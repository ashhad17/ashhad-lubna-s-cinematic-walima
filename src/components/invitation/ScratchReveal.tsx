import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import type { InvitationCopy, InvitationLanguage } from "./WalimaExperience";

type Point = { x: number; y: number };

function heartPath(context: CanvasRenderingContext2D, width: number, height: number, x = 0, y = 0) {
  context.beginPath();
  context.moveTo(x + width * 0.5, y + height * 0.92);
  context.bezierCurveTo(x + width * 0.38, y + height * 0.82, x + width * 0.04, y + height * 0.59, x + width * 0.04, y + height * 0.34);
  context.bezierCurveTo(x + width * 0.04, y + height * 0.08, x + width * 0.35, y + height * 0.02, x + width * 0.5, y + height * 0.27);
  context.bezierCurveTo(x + width * 0.65, y + height * 0.02, x + width * 0.96, y + height * 0.08, x + width * 0.96, y + height * 0.34);
  context.bezierCurveTo(x + width * 0.96, y + height * 0.59, x + width * 0.62, y + height * 0.82, x + width * 0.5, y + height * 0.92);
  context.closePath();
}

function paintFoil(canvas: HTMLCanvasElement) {
  const bounds = canvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;

  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(bounds.width * scale);
  canvas.height = Math.round(bounds.height * scale);
  const context = canvas.getContext("2d");
  if (!context) return;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  heartPath(context, bounds.width, bounds.height);
  context.save();
  context.clip();

  const foil = context.createLinearGradient(0, 0, bounds.width, bounds.height);
  foil.addColorStop(0, "#bd9955");
  foil.addColorStop(0.28, "#f0d6d0");
  foil.addColorStop(0.52, "#b5904f");
  foil.addColorStop(0.76, "#f2ded5");
  foil.addColorStop(1, "#ad8848");
  context.fillStyle = foil;
  context.fillRect(0, 0, bounds.width, bounds.height);
  context.strokeStyle = "rgba(255, 250, 232, .44)";
  context.lineWidth = 1;
  heartPath(context, bounds.width * 0.88, bounds.height * 0.85, bounds.width * 0.06, bounds.height * 0.06);
  context.stroke();
  context.textAlign = "center";
  context.fillStyle = "#493b26";
  context.font = "24px Georgia, serif";
  context.fillText("♥", bounds.width / 2, bounds.height * 0.53);
  context.restore();
}

export function ScratchReveal({ children, language, text }: { children: ReactNode; language: InvitationLanguage; text: InvitationCopy }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousPoint = useRef<Point | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const redraw = () => paintFoil(canvas);
    redraw();
    window.addEventListener("resize", redraw);
    return () => window.removeEventListener("resize", redraw);
  }, []);

  const scratch = (event: PointerEvent<HTMLCanvasElement>) => {
    if (revealed || (event.type === "pointermove" && event.buttons === 0)) return;
    const canvas = event.currentTarget;
    const context = canvas.getContext("2d");
    if (!context) return;
    event.preventDefault();
    const bounds = canvas.getBoundingClientRect();
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 38;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    if (previousPoint.current) {
      context.moveTo(previousPoint.current.x, previousPoint.current.y);
      context.lineTo(point.x, point.y);
    } else {
      context.arc(point.x, point.y, 19, 0, Math.PI * 2);
    }
    context.stroke();
    previousPoint.current = point;
  };

  const checkReveal = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext("2d");
    if (!context || !canvas.width || !canvas.height) return;
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const stride = 24;
    let transparent = 0;
    let sampled = 0;
    for (let y = 0; y < canvas.height; y += stride) {
      for (let x = 0; x < canvas.width; x += stride) {
        const normalizedX = x / canvas.width;
        const normalizedY = y / canvas.height;
        const inHeart = Math.pow(normalizedX - 0.5, 2) + Math.pow(normalizedY - 0.36, 2) < 0.22
          || normalizedY > 0.34 && normalizedY < 0.92
          && normalizedX > 0.5 - (normalizedY - 0.34) * 0.68
          && normalizedX < 0.5 + (normalizedY - 0.34) * 0.68;
        if (!inHeart) continue;
        sampled++;
        if (data[(y * canvas.width + x) * 4 + 3] === 0) transparent++;
      }
    }
    if (transparent / sampled >= 0.4) setRevealed(true);
  };

  const finishScratch = (event: PointerEvent<HTMLCanvasElement>) => {
    previousPoint.current = null;
    checkReveal(event.currentTarget);
  };

  return (
    <div className="scratch-reveal" lang={language}>
      <div className={`scratch-card ${revealed ? "is-revealed" : ""}`}>
        <div className="scratch-heart">
          <div className="scratch-details">{children}</div>
          {!revealed && <canvas
            ref={canvasRef}
            className="scratch-foil"
            aria-hidden="true"
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              scratch(event);
            }}
            onPointerMove={scratch}
            onPointerUp={finishScratch}
            onPointerCancel={finishScratch}
          />}
          {!revealed && <span className="scratch-hint" aria-hidden="true">{text.scratchHint}</span>}
        </div>
      </div>
      <p className="scratch-status" aria-live="polite">{revealed ? text.revealedStatus : text.scratchStatus}</p>
      {!revealed && <button className="scratch-reveal-button" type="button" onClick={() => setRevealed(true)}>{text.revealButton}</button>}
    </div>
  );
}

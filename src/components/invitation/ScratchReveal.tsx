import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import type { InvitationCopy, InvitationLanguage } from "./WalimaExperience";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

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
  const tokens = getComputedStyle(document.documentElement);
  const token = (name: string) => tokens.getPropertyValue(name).trim();
  foil.addColorStop(0, token("--gold"));
  foil.addColorStop(0.28, token("--ivory"));
  foil.addColorStop(0.52, token("--gold-ink"));
  foil.addColorStop(0.76, token("--gold-bright"));
  foil.addColorStop(1, token("--gold"));
  context.fillStyle = foil;
  context.fillRect(0, 0, bounds.width, bounds.height);
  context.strokeStyle = token("--ivory");
  context.lineWidth = 1;
  heartPath(context, bounds.width * 0.88, bounds.height * 0.85, bounds.width * 0.06, bounds.height * 0.06);
  context.stroke();
  context.textAlign = "center";
  context.fillStyle = token("--rose-ink");
  context.font = "24px Georgia, serif";
  context.fillText("♥", bounds.width / 2, bounds.height * 0.53);
  context.restore();
}

export function ScratchReveal({ children, language, text }: { children: ReactNode; language: InvitationLanguage; text: InvitationCopy }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousPoint = useRef<Point | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const initialPixels = useRef<Uint8ClampedArray | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const redraw = () => {
      paintFoil(canvas);
      const context = canvas.getContext("2d");
      if (context && canvas.width && canvas.height) initialPixels.current = context.getImageData(0, 0, canvas.width, canvas.height).data;
      setProgress(0);
    };
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
    const baseline = initialPixels.current;
    if (!baseline) return;
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const stride = 24;
    let transparent = 0;
    let sampled = 0;
    for (let y = 0; y < canvas.height; y += stride) {
      for (let x = 0; x < canvas.width; x += stride) {
        const alphaIndex = (y * canvas.width + x) * 4 + 3;
        if ((baseline[alphaIndex] ?? 0) < 200) continue;
        sampled++;
        if ((data[alphaIndex] ?? 255) < 40) transparent++;
      }
    }
    const completion = sampled ? Math.min(100, Math.round(transparent / sampled / .4 * 100)) : 0;
    setProgress(completion);
    if (completion >= 100) setRevealed(true);
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
          <AnimatePresence>{!revealed && <motion.canvas
            key="foil"
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
            transition={{ duration: reduced ? 0 : .8, ease: [.16, 1, .3, 1] }}
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
          />}</AnimatePresence>
          {!revealed && <span className="scratch-hint" aria-hidden="true">{text.scratchHint}</span>}
        </div>
      </div>
      {revealed && !reduced && <div className="reveal-confetti" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index}/>)}</div>}
      <p className="scratch-status" aria-live="polite">{revealed ? text.revealedStatus : text.scratchStatus}</p>
      <div className="scratch-progress" role="progressbar" aria-label={language === "ur" ? "دعوت کا انکشاف" : "Invitation reveal"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={revealed ? 100 : progress}><motion.span animate={{ scaleX: revealed ? 1 : progress / 100 }} transition={{ duration: reduced ? 0 : .4 }}/></div>
      {!revealed && <Button variant="cinemaGhost" className="scratch-reveal-button" type="button" onClick={() => setRevealed(true)}>{text.revealButton}</Button>}
    </div>
  );
}

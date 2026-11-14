import { r as __toESM } from "../_runtime.mjs";
import { i as useScroll, n as useSpring, o as AnimatePresence, r as useTransform, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { a as walimaEndDate, i as walimaDate, n as coupleNames, r as invitation, t as compactDate } from "./invitation-ep0Vk1Ff.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as ChevronLeft, c as ArrowDown, i as ChevronRight, n as MapPin, o as ChevronDown, r as Heart, s as CalendarPlus, t as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B2SVvl1v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var walima_attire_default = "/assets/walima-attire-CSYkwYi-.jpg";
var walima_rings_default = "/assets/walima-rings-CqOIHnUD.jpg";
var walima_silhouette_default = "/assets/walima-silhouette-C93l_3sE.jpg";
var walima_ballroom_default = "/assets/walima-ballroom-BmyTzGq4.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			cinema: "border border-gold bg-gold text-ink hover:bg-gold-bright",
			cinemaOutline: "border border-gold/55 bg-transparent text-ivory hover:border-gold hover:bg-gold/10",
			cinemaGhost: "border border-gold/50 bg-emerald-deep text-ivory hover:border-gold hover:bg-emerald"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			cinema: "h-12 px-6 text-[0.66rem] uppercase tracking-[0.18em] sm:h-14 sm:px-8",
			cinemaLarge: "min-h-14 whitespace-normal px-7 py-4 text-center text-[0.68rem] uppercase tracking-[0.16em] sm:px-10",
			cinemaIcon: "h-11 min-w-11 px-3 text-[0.58rem] uppercase tracking-[0.12em]"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function calendarUrl() {
	const start = compactDate(walimaDate);
	const end = compactDate(walimaEndDate);
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: `Valima of ${invitation.groom} & ${invitation.bride}`,
		dates: `${start}/${end}`,
		details: "With the blessings of Allah and our families, we invite you to celebrate our Valima.",
		location: `${invitation.walima.venue}, ${invitation.walima.address}`
	}).toString()}`;
}
function downloadCalendar() {
	const contents = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Valima Invitation//EN",
		"BEGIN:VEVENT",
		`UID:walima-${compactDate(walimaDate)}@invitation`,
		`DTSTAMP:${compactDate(/* @__PURE__ */ new Date())}`,
		`DTSTART:${compactDate(walimaDate)}`,
		`DTEND:${compactDate(walimaEndDate)}`,
		`SUMMARY:Valima of ${invitation.groom} & ${invitation.bride}`,
		`LOCATION:${invitation.walima.venue}\\, ${invitation.walima.address}`,
		"DESCRIPTION:With the blessings of Allah and our families\\, we invite you to celebrate our Valima.",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const link = document.createElement("a");
	link.href = URL.createObjectURL(new Blob([contents], { type: "text/calendar" }));
	link.download = "Ashhad-Lubna-Valima.ics";
	link.click();
	URL.revokeObjectURL(link.href);
}
function CalendarActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "calendar-actions",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "cinema",
			size: "cinema",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: calendarUrl(),
				target: "_blank",
				rel: "noreferrer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {}), " Google Calendar"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "cinemaOutline",
			size: "cinema",
			onClick: downloadCalendar,
			children: "Download .ics"
		})]
	});
}
function LocationButton({ label = "Open location" }) {
	const location = encodeURIComponent(`${invitation.walima.venue}, ${invitation.walima.address}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "cinema",
		size: "cinema",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `https://www.google.com/maps/search/?api=1&query=${location}`,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": label,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
				" ",
				label
			]
		})
	});
}
function IslamicPattern({ className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
		className: `pattern-draw ${className}`,
		viewBox: "0 0 800 800",
		"aria-hidden": "true",
		initial: reduced ? false : "hidden",
		whileInView: "visible",
		viewport: { once: true },
		variants: {
			hidden: {},
			visible: { transition: { staggerChildren: .25 } }
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.75",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					variants: {
						hidden: { pathLength: 0 },
						visible: { pathLength: 1 }
					},
					transition: { duration: reduced ? 0 : 3.5 },
					d: "M400 45 505 155 660 140 645 295 755 400 645 505 660 660 505 645 400 755 295 645 140 660 155 505 45 400 155 295 140 140 295 155Z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					variants: {
						hidden: { pathLength: 0 },
						visible: { pathLength: 1 }
					},
					transition: { duration: reduced ? 0 : 3.5 },
					d: "M400 120 480 210 600 200 590 320 680 400 590 480 600 600 480 590 400 680 320 590 200 600 210 480 120 400 210 320 200 200 320 210Z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					variants: {
						hidden: { pathLength: 0 },
						visible: { pathLength: 1 }
					},
					transition: { duration: reduced ? 0 : 3.5 },
					d: "M400 198 454 272 545 255 528 346 602 400 528 454 545 545 454 528 400 602 346 528 255 545 272 454 198 400 272 346 255 255 346 272Z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "400",
					cy: "400",
					r: "120"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "400",
					cy: "400",
					r: "205"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "400",
					cy: "400",
					r: "282"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 45v710M45 400h710M150 150l500 500M650 150 150 650" })
			]
		})
	});
}
function ParticleField() {
	const particles = (0, import_react.useMemo)(() => Array.from({ length: 24 }, (_, index) => ({
		id: index,
		left: `${index * 37 % 97}%`,
		top: `${index * 61 % 91}%`,
		delay: `${index % 8 * -1.4}s`,
		duration: `${9 + index % 7}s`,
		size: `${1 + index % 3}px`
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "particles",
		"aria-hidden": "true",
		children: particles.map((particle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
			left: particle.left,
			top: particle.top,
			width: particle.size,
			height: particle.size,
			"--delay": particle.delay,
			"--duration": particle.duration
		} }, particle.id))
	});
}
var InvitationMotionContext = (0, import_react.createContext)(false);
function Appear({ children, className = "" }) {
	const ready = (0, import_react.useContext)(InvitationMotionContext);
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : "hidden",
		whileInView: ready ? "visible" : "hidden",
		viewport: {
			once: true,
			amount: .16
		},
		variants: {
			hidden: {
				opacity: 0,
				y: 36,
				scale: .97
			},
			visible: {
				opacity: 1,
				y: 0,
				scale: 1
			}
		},
		transition: {
			duration: reduced ? 0 : 1.25,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function TitleSequence({ children, className = "" }) {
	const ready = (0, import_react.useContext)(InvitationMotionContext);
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: `title-sequence ${className}`,
		initial: "hidden",
		animate: ready ? "visible" : "hidden",
		variants: {
			hidden: {},
			visible: { transition: {
				staggerChildren: reduced ? 0 : .22,
				delayChildren: reduced ? 0 : .15
			} }
		},
		children
	});
}
function TitleBeat({ children, className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: {
			hidden: {
				opacity: 0,
				y: reduced ? 0 : 22
			},
			visible: {
				opacity: 1,
				y: 0
			}
		},
		transition: {
			duration: reduced ? 0 : 1.3,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function CameraImage({ src, alt }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1.04]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "camera-image",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src,
			alt,
			loading: "lazy",
			style: reduced ? {} : {
				y,
				scale
			}
		})
	});
}
function CelebrationReveal({ src, title }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const aperture = useTransform(scrollYProgress, [0, .7], ["inset(18% 20% 18% 20% round 180px 180px 0 0)", "inset(0% 0% 0% 0% round 0px 0px 0 0)"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.22, 1]);
	const y = useTransform(scrollYProgress, [0, .8], [30, -16]);
	const glowY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
	const titleScale = useTransform(scrollYProgress, [0, .8], [.88, 1]);
	const lineScale = useTransform(scrollYProgress, [0, .65], [.08, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: `celebration-reveal ${reduced ? "celebration-still" : ""}`,
		"aria-label": title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "celebration-sticky",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "celebration-aperture",
					style: reduced ? {} : { clipPath: aperture },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src,
						alt: "",
						loading: "lazy",
						style: reduced ? {} : { scale }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "celebration-glow",
					style: reduced ? {} : { y: glowY },
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cover-sparkles",
					"aria-hidden": "true",
					children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "celebration-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "celebration-ornament",
							"aria-hidden": "true",
							children: "✦"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "celebration-line",
							style: reduced ? {} : { scaleX: lineScale }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							style: reduced ? {} : {
								y,
								scale: titleScale
							},
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "celebration-line",
							style: reduced ? {} : { scaleX: lineScale }
						})
					]
				})
			]
		})
	});
}
function GhostWord({ text, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);
	const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.08, .92]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `ghost-layer ${className}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			style: reduced ? {} : {
				y,
				x,
				scale
			},
			children: text
		})
	});
}
function ParallaxRing({ className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
	const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [.9, 1.1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `parallax-ring ${className}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: reduced ? {} : {
				rotate,
				y,
				scale
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslamicPattern, {})
		})
	});
}
function LabelRule({ children, className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
		className: `label-rule ${className}`,
		initial: reduced ? false : "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .6
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.i, {
				variants: {
					hidden: { scaleX: 0 },
					visible: { scaleX: 1 }
				},
				transition: {
					duration: reduced ? 0 : 1,
					ease: [
						.16,
						1,
						.3,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.i, {
				variants: {
					hidden: { scaleX: 0 },
					visible: { scaleX: 1 }
				},
				transition: {
					duration: reduced ? 0 : 1,
					delay: reduced ? 0 : .18,
					ease: [
						.16,
						1,
						.3,
						1
					]
				}
			})
		]
	});
}
function SheenTitle({ children, className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `sheen-title ${className}`,
		children: [children, !reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" })]
	});
}
function CharsReveal({ text, className = "" }) {
	const reduced = useReducedMotion();
	let characterIndex = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `chars-reveal ${className}`,
		"aria-label": text,
		children: text.split(" ").map((word, wordIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [wordIndex > 0 ? " " : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "chars-reveal-word",
			"aria-hidden": "true",
			children: Array.from(word).map((char) => {
				const index = characterIndex++;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: reduced ? false : {
						opacity: 0,
						y: ".55em",
						rotate: 5
					},
					whileInView: {
						opacity: 1,
						y: 0,
						rotate: 0
					},
					viewport: {
						once: true,
						amount: .7
					},
					transition: {
						duration: reduced ? 0 : .9,
						delay: reduced ? 0 : index * .04,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: char
				}, `${char}-${index}`);
			})
		})] }, `word-${wordIndex}`))
	});
}
function ScrollSpin({ children, className = "", from = -25, to = 35 }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const rotate = useTransform(scrollYProgress, [0, 1], [from, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: reduced ? {} : { rotate },
			children
		})
	});
}
function ReadingProgress() {
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 30
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "reading-progress",
		style: { scaleX: reduced ? scrollYProgress : scaleX },
		"aria-hidden": "true"
	});
}
function heartPath(context, width, height, x = 0, y = 0) {
	context.beginPath();
	context.moveTo(x + width * .5, y + height * .92);
	context.bezierCurveTo(x + width * .38, y + height * .82, x + width * .04, y + height * .59, x + width * .04, y + height * .34);
	context.bezierCurveTo(x + width * .04, y + height * .08, x + width * .35, y + height * .02, x + width * .5, y + height * .27);
	context.bezierCurveTo(x + width * .65, y + height * .02, x + width * .96, y + height * .08, x + width * .96, y + height * .34);
	context.bezierCurveTo(x + width * .96, y + height * .59, x + width * .62, y + height * .82, x + width * .5, y + height * .92);
	context.closePath();
}
function paintFoil(canvas) {
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
	const token = (name) => tokens.getPropertyValue(name).trim();
	foil.addColorStop(0, token("--gold"));
	foil.addColorStop(.28, token("--ivory"));
	foil.addColorStop(.52, token("--gold-ink"));
	foil.addColorStop(.76, token("--gold-bright"));
	foil.addColorStop(1, token("--gold"));
	context.fillStyle = foil;
	context.fillRect(0, 0, bounds.width, bounds.height);
	context.strokeStyle = token("--ivory");
	context.lineWidth = 1;
	heartPath(context, bounds.width * .88, bounds.height * .85, bounds.width * .06, bounds.height * .06);
	context.stroke();
	context.textAlign = "center";
	context.fillStyle = token("--rose-ink");
	context.font = "24px Georgia, serif";
	context.fillText("♥", bounds.width / 2, bounds.height * .53);
	context.restore();
}
function ScratchReveal({ children, language, text }) {
	const canvasRef = (0, import_react.useRef)(null);
	const previousPoint = (0, import_react.useRef)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const initialPixels = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
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
	const scratch = (event) => {
		if (revealed || event.type === "pointermove" && event.buttons === 0) return;
		const canvas = event.currentTarget;
		const context = canvas.getContext("2d");
		if (!context) return;
		event.preventDefault();
		const bounds = canvas.getBoundingClientRect();
		const point = {
			x: event.clientX - bounds.left,
			y: event.clientY - bounds.top
		};
		context.globalCompositeOperation = "destination-out";
		context.lineWidth = 38;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.beginPath();
		if (previousPoint.current) {
			context.moveTo(previousPoint.current.x, previousPoint.current.y);
			context.lineTo(point.x, point.y);
		} else context.arc(point.x, point.y, 19, 0, Math.PI * 2);
		context.stroke();
		previousPoint.current = point;
	};
	const checkReveal = (canvas) => {
		const context = canvas.getContext("2d");
		if (!context || !canvas.width || !canvas.height) return;
		const baseline = initialPixels.current;
		if (!baseline) return;
		const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
		const stride = 24;
		let transparent = 0;
		let sampled = 0;
		for (let y = 0; y < canvas.height; y += stride) for (let x = 0; x < canvas.width; x += stride) {
			const alphaIndex = (y * canvas.width + x) * 4 + 3;
			if ((baseline[alphaIndex] ?? 0) < 200) continue;
			sampled++;
			if ((data[alphaIndex] ?? 255) < 40) transparent++;
		}
		const completion = sampled ? Math.min(100, Math.round(transparent / sampled / .4 * 100)) : 0;
		setProgress(completion);
		if (completion >= 100) setRevealed(true);
	};
	const finishScratch = (event) => {
		previousPoint.current = null;
		checkReveal(event.currentTarget);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scratch-reveal",
		lang: language,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `scratch-card ${revealed ? "is-revealed" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scratch-heart",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scratch-details",
							children
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.canvas, {
							exit: reduced ? { opacity: 0 } : {
								opacity: 0,
								scale: 1.08
							},
							transition: {
								duration: reduced ? 0 : .8,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							ref: canvasRef,
							className: "scratch-foil",
							"aria-hidden": "true",
							onPointerDown: (event) => {
								event.currentTarget.setPointerCapture(event.pointerId);
								scratch(event);
							},
							onPointerMove: scratch,
							onPointerUp: finishScratch,
							onPointerCancel: finishScratch
						}, "foil") }),
						!revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "scratch-foil-sheen",
							"aria-hidden": "true"
						}),
						!revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "scratch-hint",
							"aria-hidden": "true",
							children: text.scratchHint
						})
					]
				})
			}),
			revealed && !reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal-confetti",
				"aria-hidden": "true",
				children: Array.from({ length: 8 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "scratch-status",
				"aria-live": "polite",
				children: revealed ? text.revealedStatus : text.scratchStatus
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scratch-progress",
				role: "progressbar",
				"aria-label": language === "ur" ? "دعوت کا انکشاف" : "Invitation reveal",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": revealed ? 100 : progress,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { scaleX: revealed ? 1 : progress / 100 },
					transition: { duration: reduced ? 0 : .4 }
				})
			}),
			!revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "cinemaGhost",
				className: "scratch-reveal-button",
				type: "button",
				onClick: () => setRevealed(true),
				children: text.revealButton
			})
		]
	});
}
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers["focused"]) ref.current?.focus();
	}, [modifiers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": `${day.date.getFullYear()}-${String(day.date.getMonth() + 1).padStart(2, "0")}-${String(day.date.getDate()).padStart(2, "0")}`,
		"data-selected-single": modifiers["selected"] && !modifiers["range_start"] && !modifiers["range_end"] && !modifiers["range_middle"],
		"data-range-start": modifiers["range_start"],
		"data-range-end": modifiers["range_end"],
		"data-range-middle": modifiers["range_middle"],
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
function eventDay(iso) {
	const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
	return new Date(year ?? 2026, (month ?? 1) - 1, day ?? 1);
}
var nikah = eventDay(invitation.nikah.iso);
var walima = eventDay(invitation.walima.iso);
function MarkedCalendar({ language }) {
	const [selected, setSelected] = (0, import_react.useState)(walima);
	const iswalima = selected.getTime() === walima.getTime();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "calendar",
		className: "marked-calendar-panel",
		"aria-labelledby": "calendar-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Appear, {
			className: "marked-calendar-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "calendar-heart",
					size: 24,
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-label",
					children: language === "ur" ? "ایک یادگار دن" : "A day to remember"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "calendar-heading",
					children: language === "ur" ? "ہماری شادی کی تاریخیں" : "Our wedding dates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wedding-calendar-wrap pointer-events-auto",
					dir: "ltr",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						mode: "single",
						required: true,
						selected,
						onSelect: (day) => {
							if (day) setSelected(day);
						},
						defaultMonth: walima,
						hideNavigation: true,
						showOutsideDays: false,
						disabled: (day) => day.getTime() !== walima.getTime() && day.getTime() !== nikah.getTime(),
						modifiers: {
							wedding: walima,
							nikah
						},
						modifiersClassNames: {
							wedding: "walima-calendar-day",
							nikah: "nikah-calendar-day"
						},
						className: "wedding-calendar pointer-events-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "calendar-legend",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "nikah-dot" }), language === "ur" ? "نکاح" : "Nikah"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 12 }), language === "ur" ? "ولیمہ" : "Walima"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "calendar-hint",
					children: language === "ur" ? "تفصیلات دیکھنے کے لیے نشان زد تاریخ منتخب کریں" : "Select a marked date to see its details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "calendar-event",
					"aria-live": "polite",
					"aria-atomic": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "calendar-event-name",
						children: iswalima ? language === "ur" ? "ولیمہ" : "The Valima / Reception" : language === "ur" ? "نکاح" : "The Nikah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [iswalima ? invitation.walima.date : invitation.nikah.date, iswalima && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", invitation.walima.time] })] })]
				}),
				iswalima && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarActions, {})
			]
		})
	});
}
function CountdownDigits({ value, label }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "countdown-unit",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "countdown-numeral",
			"aria-label": `${value} ${label}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				initial: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.strong, {
					"aria-hidden": "true",
					initial: reduced ? false : {
						y: "65%",
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					exit: reduced ? { opacity: 0 } : {
						y: "-65%",
						opacity: 0
					},
					transition: {
						duration: reduced ? 0 : .45,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: value
				}, value)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "countdown-unit-label",
			children: label
		})]
	});
}
var copy = {
	en: {
		specialInvitation: "A special invitation",
		blessings: "With the blessings of Allah",
		openInvitation: "Open invitation",
		nikah: "The Nikah",
		walima: "Valima / Reception",
		littleSurprise: "",
		scratchTitle: "Scratch to reveal",
		scratchIntro: "A little heart holds the details of the day we celebrate our love.",
		invited: "You’re invited to celebrate the Valima / Reception of",
		scratchHint: "Scratch here to uncover",
		scratchStatus: "Scratch the heart to reveal the invitation, or use the button below.",
		revealedStatus: "Your Valima / Reception invitation is revealed.",
		revealButton: "Reveal with love",
		untilCelebrate: "Until we celebrate",
		countdownTitle: "Counting down to our Valima / Reception",
		anticipation: "A blessed moment is drawing near",
		countdownUnits: [
			"Days",
			"Hours",
			"Minutes",
			"Seconds"
		],
		today: "Today is the day. Alhamdulillah.",
		verseTranslation: invitation.verse.english,
		love: "With all our love",
		rsvpTitle: "Join us as our forever begins.",
		rsvpMessage: "Your presence, prayers and blessings would make our Valima / Reception celebration complete.",
		rsvpButton: "RSVP on WhatsApp",
		location: "Open location",
		date: (day, month, year) => `${day} · ${month} · ${year}`,
		walimaDate: (day, month, year) => `${day} ${month} ${year}`,
		walimaTime: (day, time) => `${day} · ${time}`,
		whatsapp: (names, date) => `Assalamu Alaikum! I would love to attend the Valima / Reception celebration of ${names} on ${date}. Looking forward to celebrating with you!`
	},
	ur: {
		specialInvitation: "خصوصی دعوت نامہ",
		blessings: "اللہ کے فضل و کرم سے",
		openInvitation: "دعوت نامہ کھولیں",
		nikah: "نکاح",
		walima: "ولیمہ / استقبال",
		littleSurprise: "محبت بھرا ایک چھوٹا سا تحفہ",
		scratchTitle: "دل کو کھرچ کر دعوت دیکھیے",
		scratchIntro: "ہمارے جشن کی تفصیلات جاننے کے لیے دل کو آہستہ سے کھرچیں۔",
		invited: "آپ کو ولیمہ / استقبال میں شرکت کی دعوت ہے",
		scratchHint: "دعوت دیکھنے کے لیے یہاں کھرچیں",
		scratchStatus: "دعوت دیکھنے کے لیے دل کو کھرچیں یا نیچے بٹن دبائیں۔",
		revealedStatus: "آپ کے ولیمے / استقبال کی دعوت ظاہر ہو گئی ہے۔",
		revealButton: "محبت سے دعوت دیکھیے",
		untilCelebrate: "جشن تک باقی وقت",
		countdownTitle: "ولیمہ / استقبال میں باقی وقت",
		anticipation: "ایک بابرکت لمحہ قریب آ رہا ہے",
		countdownUnits: [
			"دن",
			"گھنٹے",
			"منٹ",
			"سیکنڈ"
		],
		today: "آج خوشی کا دن ہے، الحمدللہ۔",
		verseTranslation: "اور ہم نے تمہیں جوڑوں کی صورت میں پیدا کیا۔",
		love: "ڈھیروں محبت کے ساتھ",
		rsvpTitle: "ہماری نئی زندگی کی خوشی میں شریک ہوں۔",
		rsvpMessage: "آپ کی آمد، دعائیں اور نیک تمنائیں ہماری خوشیوں کو دوبالا کریں گی۔",
		rsvpButton: "واٹس ایپ پر جواب دیں",
		location: "مقام دیکھیے",
		date: (day, month, year) => `${urduDigits(day)} · ${urduMonth(month)} · ${urduDigits(year)}`,
		walimaDate: (day, month, year) => `${urduDigits(day)} ${urduMonth(month)} ${urduDigits(year)}`,
		walimaTime: (day, time) => `${urduDay(day)} · ${urduTime(time)}`,
		whatsapp: (names, date) => `السلام علیکم! ${date} کو ${names} کے ولیمہ / استقبال میں شرکت کی تصدیق ہے۔ آپ کی خوشی میں شریک ہونے کی خوشی ہوگی۔`
	}
};
function urduDigits(value) {
	return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)] ?? digit);
}
function urduMonth(month) {
	return {
		January: "جنوری",
		February: "فروری",
		March: "مارچ",
		April: "اپریل",
		May: "مئی",
		June: "جون",
		July: "جولائی",
		August: "اگست",
		September: "ستمبر",
		October: "اکتوبر",
		November: "نومبر",
		December: "دسمبر"
	}[month] ?? month;
}
function urduDay(day) {
	return {
		Sunday: "اتوار",
		Monday: "پیر",
		Tuesday: "منگل",
		Wednesday: "بدھ",
		Thursday: "جمعرات",
		Friday: "جمعہ",
		Saturday: "ہفتہ"
	}[day] ?? day;
}
function urduTime(time) {
	const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(time);
	if (!match) return time;
	return `${match[3]?.toUpperCase() === "PM" ? "شام" : "صبح"} ${urduDigits(`${match[1]}:${match[2]}`)}`;
}
function Bloom() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "bloom",
		"aria-hidden": "true",
		children: "✦"
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "section-label",
		children
	});
}
function RevealTitle({ language, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheenTitle, { children: language === "en" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharsReveal, { text }) : text }) });
}
function Countdown({ language }) {
	const text = copy[language];
	const [remaining, setRemaining] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const update = () => setRemaining(Math.max(0, walimaDate.getTime() - Date.now()));
		update();
		const timer = window.setInterval(update, 1e3);
		return () => window.clearInterval(timer);
	}, []);
	const seconds = Math.floor((remaining ?? 0) / 1e3);
	const values = [
		Math.floor(seconds / 86400),
		Math.floor(seconds % 86400 / 3600),
		Math.floor(seconds % 3600 / 60),
		seconds % 60
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "countdown",
		className: "royal-section cinematic-section countdown-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cinematic-backdrop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraImage, {
					src: walima_rings_default,
					alt: ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostWord, { text: "FOREVER" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxRing, { className: "countdown-ring" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Appear, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bloom, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "countdown-anticipation",
					children: text.anticipation
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "countdown-verse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "countdown-verse-arabic",
						lang: "ar",
						dir: "rtl",
						children: invitation.verse.arabic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						dir: language === "ur" ? "rtl" : "ltr",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.verseTranslation }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
							dir: "ltr",
							children: invitation.verse.reference
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: text.untilCelebrate }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealTitle, {
					language,
					text: text.countdownTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollSpin, {
					className: "countdown-clock-spin",
					from: -30,
					to: 30,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "countdown-clock-face",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "countdown-grid",
					children: text.countdownUnits.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownDigits, {
						label,
						value: remaining === null ? "--" : language === "ur" ? urduDigits(String(values[index] ?? 0).padStart(2, "0")) : String(values[index] ?? 0).padStart(2, "0")
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "countdown-event-date",
					children: [text.walimaDate(invitation.walima.dateNumber, invitation.walima.month, invitation.walima.year), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.walimaTime(invitation.walima.day, invitation.walima.time) })]
				}),
				remaining === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text.today })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkedCalendar, { language })
		]
	});
}
function walimaExperience() {
	const [opening, setOpening] = (0, import_react.useState)("closed");
	const [language, setLanguage] = (0, import_react.useState)("en");
	const reducedMotion = useReducedMotion();
	const text = copy[language];
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = language;
	}, [language]);
	(0, import_react.useEffect)(() => {
		if (opening !== "opening") return;
		const timer = window.setTimeout(() => {
			setOpening("open");
			document.getElementById("invitation")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
		}, reducedMotion ? 50 : 2100);
		return () => window.clearTimeout(timer);
	}, [opening, reducedMotion]);
	(0, import_react.useEffect)(() => {
		if (opening === "open") return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [opening]);
	const localizedRsvp = text.whatsapp(coupleNames, text.walimaDate(invitation.walima.dateNumber, invitation.walima.month, invitation.walima.year));
	const whatsapp = `https://wa.me/${invitation.rsvp.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(localizedRsvp)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationMotionContext.Provider, {
		value: opening === "open",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			lang: language,
			dir: language === "ur" ? "rtl" : "ltr",
			className: `invitation-page ${language === "ur" ? "invitation-urdu" : ""}`,
			children: [
				opening === "open" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
				opening !== "open" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `cover-screen ${opening === "opening" ? "cover-opening" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover-leaf cover-leaf-left" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover-leaf cover-leaf-right" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cover-seam",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cover-sparkles",
							"aria-hidden": "true",
							children: Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cover-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "cover-top",
									lang: "ar",
									dir: "rtl",
									children: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cover-medallion",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslamicPattern, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "cover-seal",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "cover-seal-mark",
												"aria-hidden": "true",
												children: "♥"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "cover-kicker",
												children: text.specialInvitation
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "cover-seal-arabic",
												lang: "ar",
												dir: "rtl",
												children: "دعوة"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "cover-foot",
									children: text.blessings
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "cinemaOutline",
							size: "cinema",
							className: "open-invitation",
							disabled: opening === "opening",
							onClick: () => {
								if (opening === "closed") setOpening("opening");
							},
							children: [
								text.openInvitation,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 15 })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "invitation",
					className: "paper-section hero-section cinematic-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cinematic-backdrop",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraImage, {
								src: walima_silhouette_default,
								alt: ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostWord, {
							text: "دعوة",
							className: "ghost-arabic"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxRing, { className: "hero-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "frame-corner frame-top" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "frame-corner frame-bottom" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TitleSequence, {
							className: "hero-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBeat, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bloom, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TitleBeat, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "arabic-intro",
									lang: "ar",
									dir: "rtl",
									children: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelRule, {
									className: "section-label",
									children: text.blessings
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBeat, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										lang: "en",
										dir: "ltr",
										children: invitation.groom
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBeat, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "&" }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBeat, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										lang: "en",
										dir: "ltr",
										children: invitation.bride
									}) })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TitleBeat, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-divider" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-event",
										children: text.nikah
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-date",
										children: text.date(invitation.nikah.day, invitation.nikah.month, invitation.nikah.year)
									})
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "next-cue",
							href: "#walima",
							"aria-label": language === "ur" ? "ولیمے کی دعوت جاری رکھیں" : "Continue to the Valima invitation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 18 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CelebrationReveal, {
					src: walima_ballroom_default,
					title: text.walima
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "walima",
					className: "paper-section scratch-section cinematic-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cinematic-backdrop",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraImage, {
								src: walima_ballroom_default,
								alt: ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostWord, {
							text: "VALIMA / RECEPTION",
							className: "ghost-valima"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxRing, { className: "scratch-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Appear, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bloom, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealTitle, {
								language,
								text: text.scratchTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "scratch-intro",
								children: text.scratchIntro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScratchReveal, {
								language,
								text,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "scratch-kicker",
										children: text.invited
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "scratch-names",
										lang: "en",
										dir: "ltr",
										children: coupleNames
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scratch-rule",
										"aria-hidden": "true",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "scratch-date",
										children: language === "ur" ? urduDigits(invitation.walima.dateNumber) : invitation.walima.dateNumber
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scratch-month",
										children: text.walimaDate("", invitation.walima.month, invitation.walima.year).trim()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scratch-time",
										dir: language === "ur" ? "rtl" : "ltr",
										children: text.walimaTime(invitation.walima.day, invitation.walima.time)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scratch-venue",
										lang: "en",
										dir: "ltr",
										children: invitation.walima.venue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "scratch-address",
										lang: "en",
										dir: "ltr",
										children: invitation.walima.address
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "scratch-actions",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationButton, { label: text.location })
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { language }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "rsvp",
					className: "royal-section rsvp-section cinematic-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cinematic-backdrop",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraImage, {
								src: walima_attire_default,
								alt: ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostWord, {
							text: "CELEBRATE",
							className: "ghost-royal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxRing, { className: "rsvp-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Appear, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bloom, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelRule, {
								className: "section-label",
								children: text.love
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealTitle, {
								language,
								text: text.rsvpTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text.rsvpMessage }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cinema",
								size: "cinemaLarge",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsapp,
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}),
										" ",
										text.rsvpButton
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rsvp-signoff",
								lang: "en",
								dir: "ltr",
								children: coupleNames
							})
						] })
					]
				})
			]
		})
	});
}
var SplitComponent = walimaExperience;
//#endregion
export { SplitComponent as component };

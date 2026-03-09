import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { Globe2, Clock, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Fragmented Tech Stacks Are Growing",
    stat: "1,000+",
    statLabel: "Avg. SaaS tools per enterprise",
    description:
      "Modern enterprises juggle hundreds of disconnected applications. Zyntegrate turns chaos into a unified data ecosystem without rip-and-replace migrations.",
  },
  {
    icon: Clock,
    title: "Speed Is the New Competitive Edge",
    stat: "10×",
    statLabel: "Faster time to integration",
    description:
      "Manual data pipelines take months. Agent powered automation shrinks deployment from quarters to minutes, letting teams focus on strategy instead of plumbing.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Can't Be an Afterthought",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    description:
      "With regulations tightening globally, every data flow needs audit trails and encryption. Zyntegrate bakes security and compliance into every integration.",
  },
  {
    icon: Globe2,
    title: "AI Demands Connected Data",
    stat: "3×",
    statLabel: "Better AI model accuracy",
    description:
      "AI models are only as good as the data they consume. Unified, clean, real-time data pipelines are the foundation for every successful AI initiative.",
  },
];

const CARD_GAP = 24;

const Card = ({ reason }: { reason: (typeof reasons)[0] }) => (
  <div className="bg-white rounded-3xl shadow-xl border border-brand-100 p-8 relative">
    <div className="absolute top-8 right-8 text-right">
      <span className="block text-4xl font-bold text-brand-500">{reason.stat}</span>
      <span className="text-brand-600 text-xs font-medium">{reason.statLabel}</span>
    </div>
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center mb-6">
      <reason.icon className="w-7 h-7 text-brand-500" />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-brand-900 pr-24">{reason.title}</h3>
    <p className="text-brand-700 leading-relaxed text-base">{reason.description}</p>
  </div>
);

const WhyItMatters = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);

  // Measure actual DOM heights so scroll math is exact
  const [travel, setTravel] = useState(800);

  useEffect(() => {
    const measure = () => {
      if (!columnRef.current || !clipRef.current) return;
      const colH = columnRef.current.scrollHeight;
      const clipH = clipRef.current.clientHeight;
      // How far the column needs to move so the last card's bottom aligns with clip bottom
      setTravel(Math.max(0, colH - clipH));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Move column from y=0 down to y=-travel over the full scroll range
  const y = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  return (
    <section
      ref={sectionRef}
      id="why-it-matters"
      // Section height = 100vh (to fill screen on entry) + travel px (scroll room for all cards)
      style={{ height: `calc(100vh + ${travel}px)` }}
      className="relative bg-gradient-to-b from-white via-brand-50 to-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col lg:flex-row lg:gap-16 py-20">

          {/* Left: stays fixed */}
          <div className="lg:w-1/3 flex-shrink-0 flex flex-col justify-center mb-10 lg:mb-0">
            <span className="text-brand-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Why It Matters
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-brand-900">
              Built for{" "}
              <span className="text-brand-500">today's reality</span>
            </h2>
            <p className="text-brand-800 text-lg leading-relaxed">
              The world runs on data. Here's why seamless integration is no
              longer optional it's the foundation of every modern enterprise.
            </p>
          </div>

          {/* Right: clipping window — overflow hidden cuts off cards outside bounds */}
          <div
            ref={clipRef}
            className="lg:w-2/3 overflow-hidden"
          >
            {/* The whole column translates upward as one unit */}
            <motion.div
              ref={columnRef}
              style={{ y }}
              className="flex flex-col"
            >
              {/* Top spacer so first card starts vertically centered in the clip window */}
              <div style={{ height: `${clipRef.current ? Math.max(0, (clipRef.current.clientHeight - (reasons.length * 240 + (reasons.length - 1) * CARD_GAP)) / 2) : 0}px` }} />
              {reasons.map((reason) => (
                <div key={reason.title} style={{ marginBottom: `${CARD_GAP}px` }}>
                  <Card reason={reason} />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
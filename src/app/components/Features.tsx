import { Workflow, Database, Zap, Lock, BarChart3, Cloud } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Build and automate complex workflows with an intuitive visual editor. Connect multiple systems seamlessly.',
  },
  {
    icon: Database,
    title: 'Unified Data Layer',
    description:
      'Consolidate data from fragmented systems into a single, coherent view for better decision-making.',
  },
  {
    icon: Zap,
    title: 'Real-Time Sync',
    description:
      'Keep your data up-to-date with real-time synchronization across all connected platforms.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and SOC 2 compliance to keep your data secure at every step.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      'Monitor integration performance and gain actionable insights with comprehensive analytics.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Legacy Support',
    description:
      'Bridge the gap between modern cloud apps and legacy databases with ease.',
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const angleStep = 360 / features.length;

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 size-96 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 size-96 bg-brand-50/50 rounded-full blur-3xl" />
      </div>

      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Orbit Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-brand-100" />
          <div className="absolute inset-6 rounded-full border border-brand-100" />
          <div className="absolute inset-12 rounded-full border border-brand-100" />

          <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,#205c74,#328EAD,#6cbfd9,#205c74)] opacity-90" />
          <div className="absolute inset-14 rounded-full bg-white" />

          <motion.div
            className="absolute inset-0"
            style={{ originX: '50%', originY: '50%' }}
            animate={{ rotate: activeIndex * angleStep }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="size-9 sm:size-10 rounded-full bg-brand-500 shadow-[0_0_25px_rgba(50,142,173,0.4)]" />
            </div>
          </motion.div>

          <div className="absolute inset-16 sm:inset-20 rounded-full bg-white flex items-center justify-center px-6 text-center shadow-lg border border-brand-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="space-y-2"
              >
                <div className="flex justify-center mb-1">
                  <div className="inline-flex p-3 rounded-2xl bg-brand-500">
                    <activeFeature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <p className="text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">
                  Agent Driven Integrations
                </p>

                <h3 className="text-lg font-semibold text-brand-900">
                  {activeFeature.title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5">
            Powerful Integrations.{' '}
            <span className="text-brand-500">
              Simplified.
            </span>
          </h2>

          <p className="text-lg text-brand-900/70 mb-8">
            A modern integration layer built for enterprises bridging legacy systems, cloud apps,
            APIs, and AI-driven workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-brand-100 hover:border-brand-300 hover:bg-brand-50'
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex size-14 items-center justify-center rounded-lg ${
                      isActive
                        ? 'bg-brand-500 text-white'
                        : 'bg-brand-100 text-brand-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-brand-900">
                      {feature.title}
                    </p>
                    <p className="text-xs text-brand-900/60 line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
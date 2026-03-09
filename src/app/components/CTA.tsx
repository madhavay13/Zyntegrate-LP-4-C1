import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="py-28 px-6 lg:px-8 bg-gradient-to-b from-white via-brand-50 to-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-100/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative p-16 rounded-3xl border border-brand-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-brand-50 border border-brand-100 rounded-full text-sm mb-8"
          >
            <Sparkles className="size-4 text-brand-500" />
            <span className="font-medium text-brand-700">
              Start Your Integration Journey
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-brand-700 mb-6 leading-tight"
          >
            Stop Managing Integrations.
            <br />
            Start Orchestrating Systems.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-brand-800 max-w-2xl mx-auto mb-12"
          >
            Bring clarity to your infrastructure. Automate intelligently.
            Move at the speed of modern business.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="group px-10 py-6 text-lg font-semibold rounded-xl bg-brand-500 hover:bg-brand-600 text-white shadow-md hover:shadow-xl transition-all hover:cursor-pointer"
            >
              Contact Us
              <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
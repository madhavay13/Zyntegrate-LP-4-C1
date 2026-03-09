import { motion } from "motion/react";

export function WorkflowDiagram() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Nodes */}
      <div className="flex items-center gap-10">

        <Node label="Salesforce" />

        <AnimatedLine />

        <Node label="AI Agent" highlight />

        <AnimatedLine />

        <Node label="AWS" />

      </div>

      {/* Monitoring node */}
      <div className="absolute bottom-8">
        <Node label="Monitoring" small />
      </div>

    </div>
  );
}

function Node({
  label,
  highlight,
  small
}: {
  label: string
  highlight?: boolean
  small?: boolean
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        flex items-center justify-center
        rounded-xl
        ${small ? "px-4 py-2 text-sm" : "px-6 py-4"}
        ${highlight
          ? "bg-blue-600 text-white shadow-xl"
          : "bg-white border border-blue-200 text-blue-900"}
      `}
    >
      {label}
    </motion.div>
  );
}

function AnimatedLine() {
  return (
    <div className="relative w-20 h-[2px] bg-blue-200 overflow-hidden">

      <motion.div
        className="absolute top-0 left-[-20px] h-full w-6 bg-blue-500 rounded-full"
        animate={{
          x: [0, 100]
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

    </div>
  );
}
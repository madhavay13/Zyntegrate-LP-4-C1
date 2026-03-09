import { useEffect, useState } from "react";
import { motion, useAnimate, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

const workflows = [
  {
    bubble:
      "Hi, when a new customer signs up, add them to Salesforce, create a contact in HubSpot, and notify my team via AWS SNS.",
    steps: [
      "Bot receives new customer signup request",
      "Adds customer info to Salesforce",
      "Creates contact in HubSpot",
      "Sends notification to team via AWS SNS",
      "Keeps an eye on all new events",
    ],
  },
  {
    bubble:
      "Whenever someone places an order on my website, trigger the order processing queue and schedule follow-up tasks.",
    steps: [
      "Bot detects new order via webhook",
      "Adds order to AWS SQS queue",
      "Triggers Azure Service Bus event for processing",
      "Starts a timer for follow-up tasks",
      "Monitors order workflow automatically",
    ],
  },
  {
    bubble:
      "If a live chat message comes in through WebSocket, update HubSpot and Salesforce, and schedule a reminder to follow up later.",
    steps: [
      "Bot receives WebSocket chat message",
      "Updates HubSpot with customer info",
      "Updates Salesforce with the same info",
      "Schedules follow-up using Timer",
      "Monitors live chat workflow continuously",
    ],
  },
];

function Agents() {
  const [scope, animate] = useAnimate();
  const [currentWorkflow, setCurrentWorkflow] = useState(0);

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        const { bubble, steps } = workflows[currentWorkflow];

        await animate("[data-anim]", { opacity: 0, y: 20 }, { duration: 0 });
        await animate("[data-tick]", { opacity: 0, scale: 0 }, { duration: 0 });

        const bubbleEl = document.getElementById("bubble");
        if (bubbleEl) bubbleEl.textContent = bubble;

        await animate("#bubble", { opacity: 1, y: 0 }, { duration: 0.6 });
        await animate("#arrow1", { opacity: 1 }, { duration: 0.4 });
        await animate("#agent", { opacity: 1, y: 0 }, { duration: 0.6 });
        await animate("#arrow2", { opacity: 1 }, { duration: 0.4 });

        for (let i = 0; i < steps.length; i++) {
          const stepEl = document.getElementById(`step-${i}`);
          const tickEl = stepEl?.querySelector("svg");
          const stepSpan = document.getElementById(`step-text-${i}`);

          if (stepSpan) stepSpan.textContent = steps[i];

          await animate(`#step-${i}`, { opacity: 1, y: 0 }, { duration: 0.5 });

          if (tickEl) {
            await animate(tickEl, { opacity: 1, scale: [0, 1.2, 1] }, { duration: 0.3 });
          }

          await new Promise((r) => setTimeout(r, 200));
        }

        await new Promise((r) => setTimeout(r, 4000));
        await animate("[data-anim]", { opacity: 0, y: -10 }, { duration: 0.6 });
        await animate("[data-tick]", { opacity: 0, scale: 0 }, { duration: 0.3 });
        await new Promise((r) => setTimeout(r, 600));

        setCurrentWorkflow((prev) => (prev + 1) % workflows.length);
      }
    };

    runSequence();
  }, [animate, currentWorkflow]);

  const rightSideCards = [
    {
      label: "Event",
      title: (steps: string[]) => steps[0] || "",
      description: (steps: string[]) =>
        `Detects "${steps[0]}" and other incoming events.`,
    },
    {
      label: "Trigger",
      title: (steps: string[]) => steps[1] || "",
      description: (steps: string[]) =>
        `Automatically triggers "${steps[1]}" in connected systems.`,
    },
    {
      label: "Notifications & Monitoring",
      title: (steps: string[]) => steps[2] || "",
      description: (steps: string[]) =>
        `Executes "${steps[2]}" and keeps track of workflow progress.`,
    },
  ];

  return (
    <section
      id="agents"
      className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-brand-50 to-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-100/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div ref={scope} className="relative h-full flex items-center justify-center">
          <div className="bg-white rounded-3xl border border-brand-100 shadow-2xl p-6 flex flex-col items-center justify-center h-full">

            {/* Bubble */}
            <div
              id="bubble"
              data-anim
              className="opacity-0 px-5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-900 font-medium text-sm mb-3 text-center"
            />

            {/* Arrow */}
            <div id="arrow1" data-anim className="opacity-0 flex flex-col items-center mb-4">
              <div className="w-px h-6 bg-gradient-to-b from-brand-400/60 to-brand-200/40" />
              <svg className="w-5 h-5 text-brand-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                />
              </svg>
            </div>

            {/* Agent */}
            <div
              id="agent"
              data-anim
              className="opacity-0 relative w-32 h-32 my-2 flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-brand-400/50"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="absolute inset-4 rounded-full border border-brand-300/50" />
              <div className="absolute inset-8 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center text-brand-900 font-semibold tracking-widest">
                Agent
              </div>
            </div>

            {/* Arrow */}
            <div id="arrow2" data-anim className="opacity-0 flex flex-col items-center mb-4">
              <div className="w-px h-6 bg-gradient-to-b from-brand-400/60 to-brand-200/40" />
              <svg className="w-5 h-5 text-brand-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                />
              </svg>
            </div>

            {/* Steps */}
            <div className="flex flex-col items-center gap-2 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  id={`step-${i}`}
                  data-anim
                  className="opacity-0 flex items-center gap-3 px-4 py-1 rounded-xl bg-brand-50/60 border border-brand-100 min-w-[220px] max-w-xs"
                >
                  <div className="max-w-max flex-shrink-0 flex justify-center">
                    <Check className="text-green-500 w-4 h-4 opacity-0" data-tick />
                  </div>
                  <span
                    className="text-brand-900 text-sm flex-1"
                    id={`step-text-${i}`}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 h-full flex flex-col justify-center">

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
            Your Systems.
            <span className="block text-brand-500 bg-clip-text ">
              Now Autonomous.
            </span>
          </h2>

          <p className="text-brand-800 text-lg leading-relaxed">
            AI agents that monitor events, trigger workflows, and optimize operations automatically.
          </p>

          <div className="grid gap-4">
            {rightSideCards.map((card, idx) => {
              const title = card.title(workflows[currentWorkflow].steps);
              const desc = card.description(workflows[currentWorkflow].steps);

              return (
                <AnimatePresence mode="popLayout" key={idx}>
                  <motion.div
                    key={`${currentWorkflow}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-4 rounded-2xl bg-white border border-brand-100 shadow-lg"
                  >
                    <span className="inline-block mb-2 text-xs uppercase tracking-widest bg-brand-50 text-brand-500 px-3 rounded-full border border-brand-200">
                      {card.label}
                    </span>

                    <h3 className="text-lg font-semibold text-brand-900 mb-1">
                      {title}
                    </h3>

                    <p className="text-brand-800 text-sm">{desc}</p>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Agents;
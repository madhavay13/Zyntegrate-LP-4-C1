import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { Check } from "lucide-react";

const workflows = [
  {
    bubble:
      "Hi, when a new customer signs up, add them to Salesforce, create a contact in HubSpot, and notify my team via AWS SNS.",
    steps: [
      { id: "01", phase: "RECEIVE", text: "Receives new customer signup request" },
      { id: "02", phase: "SOURCE", text: "Connects to website signup system" },
      { id: "03", phase: "DESTINATION", text: "Connects to Salesforce, HubSpot, and AWS SNS" },
      { id: "04", phase: "TRANSFER", text: "Transfers customer data to connected platforms" },
      { id: "05", phase: "UNDERSTAND", text: "Understands signup event and workflow requirements" },
      { id: "06", phase: "IDENTIFY", text: "Identifies CRM updates and notification triggers" },
      { id: "07", phase: "COMPLETE", text: "Customer added and team notified successfully" },
    ],
  },
  {
    bubble:
      "Whenever someone places an order on my website, trigger the order processing queue and schedule follow-up tasks.",
    steps: [
      { id: "01", phase: "RECEIVE", text: "Receives new order event from website" },
      { id: "02", phase: "SOURCE", text: "Connects to ecommerce order system" },
      { id: "03", phase: "DESTINATION", text: "Connects to AWS SQS and workflow scheduler" },
      { id: "04", phase: "TRANSFER", text: "Transfers order data to processing queue" },
      { id: "05", phase: "UNDERSTAND", text: "Understands order workflow logic" },
      { id: "06", phase: "IDENTIFY", text: "Identifies follow-up tasks and automation triggers" },
      { id: "07", phase: "COMPLETE", text: "Order workflow triggered successfully" },
    ],
  },
  {
    bubble:
      "If a live chat message comes in through WebSocket, update HubSpot and Salesforce, and schedule a reminder to follow up later.",
    steps: [
      { id: "01", phase: "RECEIVE", text: "Receives WebSocket live chat message" },
      { id: "02", phase: "SOURCE", text: "Connects to live chat message stream" },
      { id: "03", phase: "DESTINATION", text: "Connects to HubSpot and Salesforce CRMs" },
      { id: "04", phase: "TRANSFER", text: "Transfers chat data to CRM systems" },
      { id: "05", phase: "UNDERSTAND", text: "Understands conversation context" },
      { id: "06", phase: "IDENTIFY", text: "Identifies follow-up action and reminder workflow" },
      { id: "07", phase: "COMPLETE", text: "CRM updated and reminder scheduled" },
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
          const phaseEl = document.getElementById(`step-phase-${i}`);
          const textEl = document.getElementById(`step-text-${i}`);

          if (phaseEl) phaseEl.textContent = steps[i].phase;
          if (textEl) textEl.textContent = steps[i].text;

          await animate(`#step-${i}`, { opacity: 1, y: 0 }, { duration: 0.5 });

          const tickEl = document.getElementById(`tick-${i}`);
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
      label: "Receive & Understand",
      title: "Input",
      description:
        "The agent receives requests or events and interprets the intent quickly.",
    },
    {
      label: "Process & Connect",
      title: "Execution",
      description:
        "Automatically connects to necessary systems and executes actions.",
    },
    {
      label: "Monitor & Complete",
      title: "Result",
      description:
        "Tracks progress, ensures success, and delivers the final outcome.",
    },
  ];

  return (
    <section
      id="agents"
      className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-brand-50 to-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-100/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div ref={scope} className="relative h-full flex items-center justify-center">
          <div className="bg-white rounded-3xl border border-brand-100 shadow-2xl p-6 flex flex-col items-center justify-center h-full">

            {/* Bubble */}
            <div
              id="bubble"
              data-anim
              className="opacity-0 px-5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-sm text-center font-medium"
            />

            {/* Arrow */}
            <div id="arrow1" data-anim className="opacity-0 flex flex-col items-center mb-4">
              <div className="w-px h-6 bg-gradient-to-b from-brand-400/60 to-brand-200/40" />
              <svg className="w-5 h-5 text-brand-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                />
              </svg>
            </div>

            {/* Agent */}
            <div id="agent" data-anim className="opacity-0 relative w-32 h-32 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-brand-400/50"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="absolute inset-4 rounded-full border border-brand-300/50" />
              <div className="absolute inset-8 rounded-full bg-white border border-brand-100 shadow-xl flex items-center justify-center font-semibold tracking-widest text-sm text-brand-900">
                Agent
              </div>
            </div>

            {/* Arrow */}
            <div id="arrow2" data-anim className="opacity-0 flex flex-col items-center mb-4">
              <div className="w-px h-6 bg-gradient-to-b from-brand-400/60 to-brand-200/40" />
              <svg className="w-5 h-5 text-brand-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                />
              </svg>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-1.5 w-full">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  id={`step-${i}`}
                  data-anim
                  className="opacity-0 flex items-center gap-3 px-3 py-1.5 rounded-xl border w-full bg-brand-50/60 border-brand-100"
                >
                  <div className="w-7 h-7 rounded-md bg-brand-100 border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-500 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <span
                      id={`step-phase-${i}`}
                      className="text-brand-500 text-[9px] tracking-[2px] uppercase font-semibold"
                    />
                    <span
                      id={`step-text-${i}`}
                      className="text-xs truncate text-brand-800"
                    />
                  </div>

                  <Check
                    id={`tick-${i}`}
                    data-tick
                    className="text-green-500 w-3.5 h-3.5 opacity-0"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 h-full flex flex-col justify-center">

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-brand-900 mb-10">
            Your Systems.
            <span className="block text-brand-500">Now Autonomous.</span>
          </h2>

          <p className="text-lg leading-relaxed text-brand-800">
            AI agents that monitor events, trigger workflows, and optimize operations automatically.
          </p>

          <div className="grid gap-8">
            {rightSideCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-2xl bg-white border border-brand-100 shadow-lg"
              >
                <span className="inline-block mb-2 text-xs uppercase tracking-widest px-3 rounded-full border bg-brand-50 text-brand-500 border-brand-200">
                  {card.label}
                </span>

                <h3 className="text-lg font-semibold mb-1 text-brand-900">
                  {card.title}
                </h3>

                <p className="text-sm text-brand-800">{card.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Agents;
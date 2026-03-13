import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { WorkflowDiagram } from "./WorkFlow";
// import Nocode from "../assets/nocode.png";
import Nocode from "../assets/nocode1.jpg";
import Connectors from "../assets/connectors1.png";
import AI from '../assets/chatbot1.jpg'

const useCases = [
  {
    title: "Legacy System Integration",
    description:
      "Connect outdated databases and systems with modern cloud applications without extensive rewrites.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600",
    benefits: [
      "Bridge legacy and modern systems",
      "Preserve existing investments",
      "No complex migrations required",
    ],
  },
  {
    title: "Vendor Agnostic Orchestration",
    description:
      "Seamlessly integrate services across AWS, Azure, Google Cloud, and other cloud providers.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600",
    benefits: [
      "Cross-platform data flow",
      "Unified management console",
      "Multi-Cloud approach",
    ],
  },
  {
    title: "Third-Party API Integration",
    description:
      "Connect with any REST, SOAP, or GraphQL API to extend your business capabilities.",
    image:
      "https://as1.ftcdn.net/jpg/07/63/99/82/1000_F_763998295_3r5Ln9vzFfb7P8Si8UNiWlauSmoiReGw.webp",
    benefits: [
      "Pre-built connectors for popular APIs",
      "Custom connector development",
      "API versioning support",
    ],
  },
  {
    title: "AI Agents for Automation",
    description:
      "Deploy intelligent AI agents that monitor workflows, trigger integrations, and automate operational tasks.",
    image:
      AI,
    benefits: [
      "Autonomous workflow execution",
      "AI-driven decision making",
      "Automated alerts and actions",
    ],
  },
  {
    title: "Low-Code / No-Code Integrations",
    description:
      "Empower teams to build integrations visually using a drag-and-drop workflow builder.",
    image:
      Nocode,
    benefits: [
      "Drag-and-drop integration builder",
      "Build workflows without writing code",
      "Reduce engineering dependency",
    ],
  },
  {
  title: "Prebuilt Connectors",
  description:
    "Instantly connect to enterprise platforms using ready-made connectors for popular services.",
  image:
    Connectors,
  benefits: [
    "Support for Salesforce, SAP, AWS, Azure, SQL, REST & more",
    "Rapid integration setup",
    "Secure and scalable connectors",
  ],
},
{
  title: "Monitoring & Alerts",
  description:
    "Track every workflow with live dashboards, logs, and intelligent alerting.",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
  benefits: [
    "Real-time dashboards and logs",
    "Customizable alerts and notifications",
    "Detect failures and anomalies instantly",
  ],
}
];

type UseCase = (typeof useCases)[0];

function UseCaseCard({
  useCase,
  index,
}: {
  useCase: UseCase;
  index: number;
}) {
  return (
    <article
      className="sticky w-full max-w-5xl mx-auto"
      style={{
        top: 120 + index * 32,
        zIndex: index + 10,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-3xl shadow-2xl border border-blue-100/60 overflow-hidden">
        {/* Content */}
        <div className={`p-8 lg:p-12 space-y-6 ${index % 2 ? "lg:order-2" : ""}`}>
          <h3 className="text-3xl lg:text-4xl font-bold text-brand-500">
            {useCase.title}
          </h3>

          <p className="text-lg text-brand-800 leading-relaxed">
            {useCase.description}
          </p>

          <ul className="space-y-4">
            {useCase.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center">
                  <Check className="size-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-brand-600 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

    {/* Image */}
    <div
      className={`relative min-h-[280px] lg:min-h-[360px] flex items-center justify-center ${
        index % 2 ? "lg:order-1" : ""
      }`}
    >
      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-200/20 to-brand-300/20 blur-2xl rotate-3" />

      {/* image container */}
      <div className="relative w-full h-full p-6">
        <div className="w-full h-full rounded-2xl border border-brand-100 overflow-hidden shadow-lg">
          <ImageWithFallback
            src={useCase.image}
            alt={useCase.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</article>
  );
}

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] bg-gradient-to-r from-brand-200/20 to-brand-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24 px-4"
        >
          <h2 className="text-5xl font-bold text-brand-900 mb-6">
            Built for Your{" "}
            <span className="text-brand-500">
              Use Case
            </span>
          </h2>

          <p className="text-xl text-brand-800">
            Whether you're bridging legacy databases, integrating cloud apps,
            deploying AI agents, or automating workflows.
          </p>
        </motion.div>

        {/* Scroll container */}
        <div
          className="relative"
          style={{
            height: `${useCases.length * 68}vh`,
          }}
        >
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
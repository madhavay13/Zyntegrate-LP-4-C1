import React from "react";
import { motion } from "framer-motion";
import { Zap, Cloud, Activity, Layers3, Rocket, Briefcase, ShieldCheck } from "lucide-react";
import http from  "../assets/http.png";
import webhook from "../assets/webhook.png";
import hubspot from "../assets/hubspot.png";
import salesforce from "../assets/salesforce.jpg";
import aws_sns from "../assets/aws_sns.png";
import aws_sqs from "../assets/aws_sqs.png";
import azure_service_bus from "../assets/azure-service-bus.png";
import websocket from "../assets/websocket.png";
import timer from "../assets/timer.png";

interface Trigger {
  name: string;
  icon: React.ReactNode;
}

const triggers: Trigger[] = [
  { name: "Http Trigger", icon: <img src={http} alt="http" className="w-10 h-10" /> },
  { name: "Webhook Trigger", icon: <img src={webhook} alt="webhook" className="w-10 h-10" /> },
  { name: "Hubspot Trigger", icon: <img src={hubspot} alt="hubspot" className="w-10 h-10" /> },
  { name: "Salesforce Platform Event", icon: <img src={salesforce} alt="salesforce" className="w-10 h-10" /> },
  { name: "AWS SNS Trigger", icon: <img src={aws_sns} alt="aws_sns" className="w-10 h-10" /> },
  { name: "AWS SQS Trigger", icon: <img src={aws_sqs} alt="aws_sqs" className="w-10 h-10" /> },
  { name: "Azure Service Bus Trigger", icon: <img src={azure_service_bus} alt="azure_service_bus" className="w-10 h-10" /> },
  { name: "Websocket Trigger", icon: <img src={websocket} alt="websocket" className="w-10 h-10" /> },
  { name: "Timer Trigger", icon: <img src={timer} alt="timer" className="w-10 h-10" /> },
];

const Pricing: React.FC = () => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...triggers, ...triggers].map((trigger, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-max">
            <div className=" rounded-full shadow">{trigger.icon}</div>
            <span className="mt-2 text-sm text-gray-700 text-center">{trigger.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
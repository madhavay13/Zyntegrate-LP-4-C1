import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ZNinth09" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/z-ninth/" },
  { icon: Instagram, href: "https://www.instagram.com/zninth09/" },
  { icon: Facebook, href: "https://www.facebook.com/zninth09" },
];

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12">

        {/* LEFT: Brand + Description + CTA */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zyntegrate Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-brand-500">Zyntegrate</span>
          </div>

          <p className="text-brand-800 text-sm leading-relaxed">
            Powerful automation and integration infrastructure built for modern enterprises. Connect systems, automate workflows, and scale with confidence.
          </p>

          {/* CTA: Join Beta / Newsletter */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-brand-500">
              Get early access
            </span>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-2 py-1 border border-brand-200 rounded w-full text-brand-900 placeholder:text-brand-400"
              />

              <button className="px-3 py-1 bg-brand-500 text-white rounded hover:bg-brand-600 transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-brand-600 mt-1">
              Or chat with our bot for instant help!
            </span>
          </div>

          <p className="text-brand-600 text-xs mt-4">
            © 2026 Z-Ninth Inc. All rights reserved.
          </p>
        </div>

        {/* RIGHT: Offices + Links + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Offices */}
          <div className="flex flex-col gap-2 text-sm text-brand-800">
            <span className="font-semibold text-brand-500">Offices</span>

            <span className="leading-snug">
              <strong>USA:</strong> Dallas, 702 S Denton Tap Rd, Suite #110,
              Coppell, 75019
            </span>

            <span className="leading-snug">
              <strong>India:</strong> Hyderabad, T-Hub Phase 2, Inorbit Mall Rd,
              Madhapur, 500081
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-sm text-brand-800">
            <span className="font-semibold text-brand-500">Quick Links</span>

            <a href="#why-it-matters" className="hover:text-brand-600 transition">
              Why
            </a>

            <a href="#features" className="hover:text-brand-600 transition">
              Features
            </a>

            <a href="#agents" className="hover:text-brand-600 transition">
              Agent
            </a>

            <a href="#use-cases" className="hover:text-brand-600 transition">
              Use Cases
            </a>

            <a href="#cta" className="hover:text-brand-600 transition">
              Contact
            </a>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col gap-2 text-sm text-brand-800">
            <span className="font-semibold text-brand-500">Contact</span>

            <a
              href="mailto:info@z-ninth.com"
              className="hover:text-brand-600 transition"
            >
              info@z-ninth.com
            </a>

            <a
              href="tel:+19729925082"
              className="hover:text-brand-600 transition"
            >
              +1 (972) 992-5082
            </a>

            <a
              href="tel:+918885257422"
              className="hover:text-brand-600 transition"
            >
              +91 88852 57422
            </a>

            {/* Socials */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded border border-brand-200 text-brand-800 hover:text-brand-600 transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
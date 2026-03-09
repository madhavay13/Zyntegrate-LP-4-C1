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
    <footer className="bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE: Brand + Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zyntegrate Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-brand-500">Zyntegrate</span>
          </div>
          <p className="text-brand-800 text-sm leading-relaxed max-w-md">
            Powerful automation and integration infrastructure built for modern enterprises. Connect systems, automate workflows, and scale with confidence.
          </p>
          <p className="text-brand-600 text-xs">
            © 2026 Z-Ninth Inc. All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDE: Links + Socials */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Links */}
          <div className="flex flex-col gap-3 text-sm text-brand-800">
            <h4 className="font-semibold text-brand-500">Company</h4>
            <a href="https://z-ninth.com/about" className="hover:text-brand-600 transition-colors">About Us</a>
            <a href="https://z-ninth.com/services" className="hover:text-brand-600 transition-colors">Services</a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-brand-800">
            <h4 className="font-semibold text-brand-500">Products</h4>
            <a href="/" className="hover:text-brand-600 transition-colors">Zyntegrate</a>
            <a href="https://finudge.com" className="hover:text-brand-600 transition-colors">Finudge</a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-brand-800">
            <h4 className="font-semibold text-brand-500">Contact</h4>
            <a href="mailto:info@z-ninth.com" className="hover:text-brand-600 transition-colors">info@z-ninth.com</a>
            <a href="tel:+19729925082" className="hover:text-brand-600 transition-colors">+1 (972) 992-5082</a>
            <a href="tel:+918885257422" className="hover:text-brand-600 transition-colors">+91 88852 57422</a>
          </div>

          {/* Socials */}
         <div className="grid grid-cols-2 gap-x-3  w-20">
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
    </footer>
  );
}
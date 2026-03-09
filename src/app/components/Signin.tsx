import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo4.jpg";

export default function SignIn() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/" + href);
    }

    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-brand-50 to-white px-6 flex items-center justify-center overflow-hidden">
      
      {/* Logo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            className="w-10 h-10 object-contain"
            src={logo}
            alt="Zyntegrate logo"
          />
          <span className="font-semibold text-xl text-brand-700">
            Zyntegrate
          </span>
        </a>
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md z-10"
      >
        {/* Neon gradient border */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-[length:400%_400%] animate-gradient-xy blur-xl opacity-30 pointer-events-none transition-all duration-300 form-active:border-glow"></div>

        <div className="relative bg-white rounded-2xl p-10 shadow-xl border border-brand-100">
          
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-brand-900">
              Sign in to your account
            </h1>
            <p className="text-sm text-brand-800 mt-2">
              Welcome back. Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="text-sm text-brand-800 mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-brand-500" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 form-focus"
                  style={{
                    borderColor: "var(--color-brand-100)",
                    backgroundColor: "var(--color-card)",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-brand-800 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-brand-500" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 form-focus"
                  style={{
                    borderColor: "var(--color-brand-100)",
                    backgroundColor: "var(--color-card)",
                  }}
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-brand-800">
                <input type="checkbox" className="rounded border-brand-200" />
                Remember me
              </label>

              <a
                href="#"
                className="text-brand-primary hover:text-brand-600 font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <Button className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:shadow-xl transition-all">
              Sign In
            </Button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-brand-800">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-brand-primary font-medium hover:text-brand-600"
            >
              Contact Us
            </a>
          </p>
        </div>
      </motion.div>

      {/* Animations */}
      <style>{`
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 10s linear infinite;
        }
        @keyframes gradient-xy {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .form-focus:focus { outline: none; }
        .form-focus:focus ~ .form-active\\:border-glow,
        .form-active\\:border-glow {
          animation: neon-pulse 3s ease-in-out infinite, gradient-xy 10s linear infinite;
        }
        @keyframes neon-pulse {
          0%,100% { opacity:0.25; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.01); }
        }
      `}</style>
    </div>
  );
}
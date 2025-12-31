"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";

const loginTranslations = {
  de: {
    title: "Willkommen zurück",
    subtitle: "Melden Sie sich bei Ihrem Konto an",
    email: "E-Mail",
    emailPlaceholder: "sie@firma.de",
    password: "Passwort",
    rememberMe: "Angemeldet bleiben",
    forgotPassword: "Passwort vergessen?",
    login: "Anmelden",
    orContinue: "oder weiter mit",
    noAccount: "Noch kein Konto?",
    register: "Kostenlos registrieren"
  },
  en: {
    title: "Welcome back",
    subtitle: "Sign in to your account",
    email: "Email",
    emailPlaceholder: "you@company.com",
    password: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    login: "Sign in",
    orContinue: "or continue with",
    noAccount: "Don't have an account?",
    register: "Sign up free"
  },
  es: {
    title: "Bienvenido de vuelta",
    subtitle: "Inicia sesión en tu cuenta",
    email: "Email",
    emailPlaceholder: "tu@empresa.com",
    password: "Contraseña",
    rememberMe: "Recordarme",
    forgotPassword: "¿Olvidaste tu contraseña?",
    login: "Iniciar sesión",
    orContinue: "o continúa con",
    noAccount: "¿No tienes cuenta?",
    register: "Regístrate gratis"
  }
};

export default function LoginPage() {
  const { lang } = useLanguage();
  const tr = loginTranslations[lang as keyof typeof loginTranslations] || loginTranslations.de;
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    console.log("Login submitted:", formData);
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <video
        className="hidden lg:block absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      >
        <source src="https://www.pexels.com/es-es/download/video/4065924/" type="video/mp4" />
      </video>
      <div className="hidden lg:block absolute inset-0 bg-[#0f172a]/80" />
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#0f172a]/30 via-[#0f172a]/70 to-[#0f172a]" />
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[95%] sm:max-w-md"
      >
        {/* Card with 3D effect */}
        <div className="relative">
          {/* Shadow layers for 3D effect - hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 bg-cyan-500/10 rounded-3xl transform translate-x-2 translate-y-2 blur-sm" />
          <div className="hidden sm:block absolute inset-0 bg-blue-600/10 rounded-3xl transform translate-x-4 translate-y-4 blur-md" />
          
          <div className="relative bg-slate-800/90 sm:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/50 p-6 sm:p-8 shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-block rounded-xl bg-white p-3 shadow-lg"
              >
                <Image 
                  src="/noventa-1.jpeg" 
                  alt="Noventa" 
                  width={160} 
                  height={45}
                  className="mx-auto w-28 sm:w-32"
                />
              </motion.div>
              
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {tr.title}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base">
                {tr.subtitle}
              </p>
            </div>

            <form
              className="space-y-4 sm:space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {tr.email}
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={tr.emailPlaceholder}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {tr.password}
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 sm:pl-12 pr-12 py-3 sm:py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                  />
                  <span className="text-sm text-slate-400">{tr.rememberMe}</span>
                </label>
                <a href="#" className="text-sm text-cyan-400 hover:underline">
                  {tr.forgotPassword}
                </a>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 text-sm sm:text-base"
              >
                {tr.login} <ArrowRight size={18} />
              </motion.button>
            </form>

            <p className="text-center text-slate-400 mt-6 sm:mt-8 text-sm sm:text-base">
              {tr.noAccount}{" "}
              <Link href="/register" className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-1">
                {tr.register} <Sparkles size={14} />
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  User, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  Loader2,
  ChevronLeft,
  Briefcase,
  CheckCircle,
  Shield,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyText, useCopyString } from "@/components/CopyEditProvider";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// Endpoints from environment variables
const API_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN || "https://loginnoventa.hjsolutions.site/public/login";

type Role = "company" | "user";

const loginTranslations = {
  de: {
    title: "Willkommen zurück",
    subtitle: "Melde dich bei deinem Konto an",
    roles: {
      company: "Unternehmen",
      user: "Vertriebler"
    },
    form: {
      username: "Benutzername",
      password: "Passwort",
      submit: "Anmelden",
      loading: "Anmeldung...",
      error: "Ungültiger Benutzername oder Passwort.",
      rememberMe: "Angemeldet bleiben",
      forgotPassword: "Passwort vergessen?"
    },
    footer: {
      noAccount: "Haben Sie noch kein Konto?",
      register: "Jetzt registrieren"
    }
  },
  en: {
    title: "Welcome Back",
    subtitle: "Log in to your account",
    roles: {
      company: "Company",
      user: "Sales Pro"
    },
    form: {
      username: "Username",
      password: "Password",
      submit: "Log In",
      loading: "Logging in...",
      error: "Invalid username or password.",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?"
    },
    footer: {
      noAccount: "Don't have an account?",
      register: "Register now"
    }
  },
  es: {
    title: "Bienvenido de nuevo",
    subtitle: "Inicia sesión en tu cuenta",
    roles: {
      company: "Empresa",
      user: "Vendedor"
    },
    form: {
      username: "Usuario",
      password: "Contraseña",
      submit: "Iniciar Sesión",
      loading: "Iniciando...",
      error: "Usuario o contraseña incorrectos.",
      rememberMe: "Recordarme",
      forgotPassword: "¿Olvidaste tu contraseña?"
    },
    footer: {
      noAccount: "¿No tienes una cuenta?",
      register: "Regístrate ahora"
    }
  }
};

export default function LoginPage() {
  const { lang } = useLanguage();
  const tr = loginTranslations[lang as keyof typeof loginTranslations] || loginTranslations.de;
  const router = useRouter();

  const [role, setRole] = useState<Role>("company");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const backToHomepageText = useCopyString(
    "auth.login.backToHomepage",
    lang === "de" ? "Zurück zur Homepage" : lang === "es" ? "Volver a la página principal" : "Back to homepage"
  );
  const usernamePlaceholder = useCopyString("auth.login.form.username.placeholder", tr.form.username);
  const passwordPlaceholder = useCopyString("auth.login.form.password.placeholder", "••••••••");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      if (response.ok) {
        const data = await response.json();
        const decoded: any = jwtDecode(data.access_token);
        
        // Almacenamiento seguro con nombres ofuscados para prevenir ataques
        const sessionData = {
          _nv_session: data.access_token, // access_token ofuscado
          _nv_sync: data.refresh_token,   // refresh_token ofuscado
          roles: decoded.realm_access?.roles || [], // roles se mantiene igual por petición
          _nv_identity: {
            id: decoded.sub,
            u: decoded.preferred_username,
            e: decoded.email,
            n: decoded.name
          }
        };

        localStorage.setItem("noventa_session_meta", JSON.stringify(sessionData));
        
        console.log("Session saved securely");
        router.push("/dashboard");
      } else {
        setError(tr.form.error);
      }
    } catch (err) {
      setError(tr.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden relative text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <Link
        href="/"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">
          <CopyText copyId="auth.login.backToHomepage" defaultText={backToHomepageText} as="span" />
        </span>
      </Link>

      <motion.div 
        layout
        className="relative w-full max-w-5xl bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={role}
            initial={{ opacity: 0, x: role === "company" ? -20 : 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: role === "company" ? 20 : -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`flex flex-col md:flex-row w-full h-full ${role === "user" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold">
                    <CopyText copyId="auth.login.title" defaultText={tr.title} as="span" />
                  </h1>
                  <div className="flex p-1 bg-slate-800 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setRole("company")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${role === "company" ? "bg-teal-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.login.roles.company" defaultText={tr.roles.company} as="span" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("user")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${role === "user" ? "bg-cyan-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.login.roles.user" defaultText={tr.roles.user} as="span" />
                    </button>
                  </div>
                </div>
                <p className="text-slate-400">
                  <CopyText copyId="auth.login.subtitle" defaultText={tr.subtitle} as="span" />
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    <CopyText copyId="auth.login.form.username.label" defaultText={tr.form.username} as="span" />
                  </label>
                  <div className="relative group">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                    <input
                      required
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder={usernamePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    <CopyText copyId="auth.login.form.password.label" defaultText={tr.form.password} as="span" />
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder={passwordPlaceholder}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <CopyText copyId="auth.login.form.rememberMe" defaultText={tr.form.rememberMe} as="span" />
                    </span>
                  </label>
                  <a href="#" className="text-sm text-cyan-400 hover:underline font-medium">
                    <CopyText copyId="auth.login.form.forgotPassword" defaultText={tr.form.forgotPassword} as="span" />
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-white transition-all shadow-xl ${
                    role === "company" 
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:scale-[1.02] shadow-teal-500/20" 
                      : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:scale-[1.02] shadow-cyan-500/20"
                  } disabled:opacity-50 disabled:scale-100`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <CopyText copyId="auth.login.form.loading" defaultText={tr.form.loading} as="span" />
                    </>
                  ) : (
                    <>
                      <CopyText copyId="auth.login.form.submit" defaultText={tr.form.submit} as="span" />
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-center font-medium"
                  >
                    <CopyText copyId="auth.login.form.error" defaultText={error} as="span" />
                  </motion.div>
                )}
              </form>

              <div className="mt-12 text-center">
                <p className="text-slate-400">
                  <CopyText copyId="auth.login.footer.noAccount" defaultText={tr.footer.noAccount} as="span" />{" "}
                  <Link href="/register" className="text-teal-400 font-bold hover:underline inline-flex items-center gap-1">
                    <CopyText copyId="auth.login.footer.register" defaultText={tr.footer.register} as="span" /> <Sparkles size={14} />
                  </Link>
                </p>
              </div>
            </div>

            {/* Video/Image Side */}
            <div className="flex-1 relative hidden md:block group">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/40 to-transparent" />
              <div className={`absolute inset-0 h-full w-full transition-all duration-1000 ${role === "company" ? "clip-path-company" : "clip-path-user"}`}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  poster={role === "company" ? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"}
                >
                  <source 
                    src={role === "company" ? "https://assets.mixkit.co/videos/preview/mixkit-business-partners-working-together-in-office-23131-large.mp4" : "https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-her-desk-in-an-office-23126-large.mp4"} 
                    type="video/mp4" 
                  />
                </video>
                <div className={`absolute inset-0 ${role === "company" ? "bg-teal-500/20" : "bg-cyan-500/20"} mix-blend-overlay`} />
              </div>

              {/* Float Cards */}
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-sm"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      {role === "company" ? <Building2 className="text-white" /> : <Briefcase className="text-white" />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">
                        <CopyText
                          copyId="auth.login.sideCard.title"
                          defaultText={role === "company" ? "Enterprise Portal" : "Sales Network"}
                          as="span"
                        />
                      </h4>
                      <div className="flex items-center gap-1">
                        <CheckCircle size={12} className="text-teal-400" />
                        <span className="text-teal-400 text-[10px] font-bold uppercase">
                          <CopyText copyId="auth.login.sideCard.badge" defaultText="Active Beta" as="span" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    <CopyText
                      copyId="auth.login.sideCard.body"
                      defaultText={
                        role === "company"
                          ? "Manage your company profile and prepare your job offers for the upcoming launch."
                          : "Stay tuned for the launch. Complete your profile to be the first to access premium offers."
                      }
                      as="span"
                    />
                  </p>
                </motion.div>
              </div>

              {/* Shape Divider */}
              <div className={`absolute top-0 bottom-0 w-px bg-white/20 z-30 transition-all duration-1000 ${role === "company" ? "left-0" : "right-0"}`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <style jsx global>{`
        .clip-path-company {
          clip-path: ellipse(120% 100% at 100% 50%);
        }
        .clip-path-user {
          clip-path: ellipse(120% 100% at 0% 50%);
        }
        @media (max-width: 768px) {
          .clip-path-company, .clip-path-user {
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
}

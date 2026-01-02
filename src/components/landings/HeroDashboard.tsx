"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  Building2,
  Search,
  Plus,
  MapPin,
  Calendar,
  DollarSign,
  MoreHorizontal,
  Mail,
  Phone,
  FileText,
  Filter,
  ChevronDown,
  MousePointerClick
} from "lucide-react";

export function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "create" | "candidates">("dashboard");
  const [showTooltip, setShowTooltip] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "¡Prueba el dashboard!",
    "¿Deseas probar? Regístrate",
    "¿Quieres ver más? Regístrate",
    "¿Deseas empezar? Regístrate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative rounded-xl border border-slate-700/50 bg-slate-800/90 shadow-2xl shadow-black/40 backdrop-blur-sm overflow-visible h-[420px] flex flex-col">
      {/* Animated Tooltip - Rotating Positions */}
      <AnimatePresence mode="wait">
        {showTooltip && (
          <motion.div
            key={`${messageIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2.5 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2">
                <MousePointerClick size={16} className="animate-pulse" />
                {messages[messageIndex]}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3 h-3 bg-teal-500 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="h-12 border-b border-slate-700/50 flex items-center justify-between px-4 bg-slate-900/50 shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <Building2 size={16} className="text-slate-500" />
          <span className="text-white font-medium">TechCorp GmbH</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500" />
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-14 flex-none border-r border-slate-700/50 bg-slate-900/50 flex flex-col items-center py-4 gap-3 z-10">
          {/* Logo with white background */}
          <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg p-1.5 mb-2">
            <Image
              src="/logo-n.png"
              alt="Noventa"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          
          <motion.button
            onClick={() => setActiveTab("dashboard")}
            animate={
              activeTab === "dashboard"
                ? { scale: [1, 1.05, 1] }
                : { scale: 1 }
            }
            transition={
              activeTab === "dashboard"
                ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.15 }
            }
            whileHover={{ scale: 1.06, y: -1 }}
            className={`p-2 rounded-lg transition-all duration-150 will-change-transform flex items-center justify-center ${activeTab === "dashboard" ? "bg-teal-500/20 text-teal-400" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
          >
            <span className="relative inline-flex">
              {activeTab !== "dashboard" && (
                <span className="absolute -inset-1 rounded-md bg-teal-400/20 animate-ping" />
              )}
              <LayoutDashboard size={20} className="relative z-10" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("create")}
            animate={
              activeTab === "create"
                ? { scale: [1, 1.05, 1] }
                : { scale: 1 }
            }
            transition={
              activeTab === "create"
                ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.15 }
            }
            whileHover={{ scale: 1.06, y: -1 }}
            className={`p-2 rounded-lg transition-all duration-150 will-change-transform flex items-center justify-center ${activeTab === "create" ? "bg-teal-500/20 text-teal-400" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
          >
            <span className="relative inline-flex">
              {activeTab !== "create" && (
                <span className="absolute -inset-1 rounded-md bg-teal-400/20 animate-ping" />
              )}
              <Briefcase size={20} className="relative z-10" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("candidates")}
            animate={
              activeTab === "candidates"
                ? { scale: [1, 1.05, 1] }
                : { scale: 1 }
            }
            transition={
              activeTab === "candidates"
                ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.15 }
            }
            whileHover={{ scale: 1.06, y: -1 }}
            className={`p-2 rounded-lg transition-all duration-150 will-change-transform flex items-center justify-center ${activeTab === "candidates" ? "bg-teal-500/20 text-teal-400" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
          >
            <span className="relative inline-flex">
              {activeTab !== "candidates" && (
                <span className="absolute -inset-1 rounded-md bg-teal-400/20 animate-ping" />
              )}
              <Users size={20} className="relative z-10" />
            </span>
          </motion.button>

          <div className="mt-auto p-2 rounded-lg text-slate-500 hover:text-slate-300 transition-colors">
            <Settings size={20} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-900/30 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <DashboardView key="dashboard" />
            )}
            {activeTab === "create" && (
              <CreateOfferView key="create" />
            )}
            {activeTab === "candidates" && (
              <CandidatesView key="candidates" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="p-4 h-full overflow-y-auto custom-scrollbar"
    >
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/30">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase size={12} className="text-teal-400" />
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Active</span>
          </div>
          <div className="text-xl font-bold text-white">5</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/30">
          <div className="flex items-center gap-2 mb-1">
            <Users size={12} className="text-cyan-400" />
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Candidates</span>
          </div>
          <div className="text-xl font-bold text-white">47</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/30">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 size={12} className="text-emerald-400" />
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Match</span>
          </div>
          <div className="text-xl font-bold text-white">89%</div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-700/30 bg-slate-800/30 overflow-hidden mb-4">
        <div className="px-3 py-2 border-b border-slate-700/30 flex items-center justify-between bg-slate-800/50">
          <span className="text-xs font-medium text-slate-300">Recent Job Campaigns</span>
        </div>
        <div className="divide-y divide-slate-700/20">
          {[
            { title: "Senior Sales Manager", status: "Active", apps: 12, color: "bg-teal-500" },
            { title: "B2B Representative", status: "Active", apps: 8, color: "bg-teal-500" },
            { title: "Account Executive", status: "Draft", apps: 0, color: "bg-slate-500" },
          ].map((job, i) => (
            <div key={i} className="px-3 py-2.5 flex items-center justify-between hover:bg-slate-800/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${job.color}`} />
                <span className="text-xs text-slate-300 group-hover:text-white transition-colors">{job.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500">{job.apps} apps</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${job.status === 'Active' ? 'bg-teal-500/10 text-teal-400' : 'bg-slate-700/30 text-slate-400'}`}>{job.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Chart Simulation */}
      <div className="h-24 rounded-lg border border-slate-700/30 bg-slate-800/30 p-3 flex items-end justify-between gap-1">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <div key={i} className="w-full bg-slate-700/30 rounded-t-sm relative group">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-500/20 to-teal-400/80 rounded-t-sm group-hover:from-teal-500/40 group-hover:to-teal-300"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CreateOfferView() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="p-4 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Create New Offer</h3>
        <button className="text-[10px] bg-teal-500 hover:bg-teal-400 text-white px-2 py-1 rounded transition-colors">
          Save Draft
        </button>
      </div>

      <div className="space-y-3 flex-1 overflow-hidden">
        <div className="space-y-1">
          <label className="text-[10px] text-slate-400">Job Title</label>
          <input type="text" placeholder="e.g. Sales Representative" className="w-full bg-slate-800/50 border border-slate-700/50 rounded p-2 text-xs text-white focus:border-teal-500/50 outline-none transition-colors" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Department</label>
            <div className="relative">
              <select className="w-full bg-slate-800/50 border border-slate-700/50 rounded p-2 text-xs text-white appearance-none outline-none">
                <option>Sales</option>
                <option>Marketing</option>
              </select>
              <ChevronDown size={12} className="absolute right-2 top-2.5 text-slate-500 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Location</label>
            <div className="relative">
              <MapPin size={12} className="absolute left-2 top-2.5 text-slate-500" />
              <input type="text" placeholder="Remote" className="w-full bg-slate-800/50 border border-slate-700/50 rounded p-2 pl-7 text-xs text-white outline-none" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] text-slate-400">Description</label>
          <div className="h-24 bg-slate-800/50 border border-slate-700/50 rounded p-2">
            <div className="flex gap-2 border-b border-slate-700/30 pb-1 mb-1">
              <div className="h-1.5 w-10 bg-slate-600/30 rounded" />
              <div className="h-1.5 w-6 bg-slate-600/30 rounded" />
              <div className="h-1.5 w-8 bg-slate-600/30 rounded" />
            </div>
            <div className="space-y-1.5 animate-pulse">
              <div className="h-1.5 w-3/4 bg-slate-700/20 rounded" />
              <div className="h-1.5 w-full bg-slate-700/20 rounded" />
              <div className="h-1.5 w-5/6 bg-slate-700/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CandidatesView() {
  const candidates = [
    { name: "Sarah Müller", role: "Senior Sales", exp: "8y", match: 94 },
    { name: "Marc Weber", role: "Account Executive", exp: "5y", match: 88 },
    { name: "Julia Schmidt", role: "B2B Sales", exp: "3y", match: 82 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="p-4 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Candidates <span className="text-slate-500 font-normal">(12)</span></h3>
        <div className="flex gap-1">
          <div className="p-1 rounded bg-slate-800 text-slate-400"><Filter size={12} /></div>
          <div className="p-1 rounded bg-slate-800 text-slate-400"><Search size={12} /></div>
        </div>
      </div>

      <div className="space-y-2 overflow-y-auto pr-1 custom-scrollbar">
        {candidates.map((c, i) => (
          <div key={i} className="p-3 rounded-lg border border-slate-700/30 bg-slate-800/30 hover:bg-slate-800/50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{c.name}</div>
                  <div className="text-[10px] text-slate-400">{c.role} • {c.exp} exp</div>
                </div>
              </div>
              <div className="text-xs font-bold text-teal-400">{c.match}%</div>
            </div>
            
            {/* Blurred Contact Details */}
            <div className="grid grid-cols-2 gap-2 mt-2 relative overflow-hidden rounded bg-slate-900/30 p-1.5">
              <div className="flex items-center gap-1.5">
                <Mail size={10} className="text-slate-500" />
                <div className="h-2 w-20 bg-slate-600/20 rounded blur-[2px]" />
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={10} className="text-slate-500" />
                <div className="h-2 w-16 bg-slate-600/20 rounded blur-[2px]" />
              </div>
              
              {/* Overlay Label */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px]">
                <span className="text-[8px] font-medium text-slate-500 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-700/50">
                  Hidden details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

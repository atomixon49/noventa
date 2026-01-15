"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Instagram, Music2, ExternalLink } from "lucide-react";

interface SocialMediaGalleryProps {
  title: ReactNode;
  subtitle: ReactNode;
  followText: ReactNode;
}

export function SocialMediaGallery({ title, subtitle, followText }: SocialMediaGalleryProps) {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            {subtitle}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/conexiocrew/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram size={20} />
              <span>{followText}</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.tiktok.com/@conexiocrew"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Music2 size={20} />
              <span>TikTok</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Trans } from "@lingui/macro";
import { motion } from "framer-motion";
import { Code, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950 selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 font-sans transition-colors duration-500">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-2xl group cursor-pointer">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
              B
            </div>
            <span className="font-outfit font-bold text-slate-800 dark:text-white hidden sm:block">
              Portfolio
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 pointer-events-auto"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
        </motion.div>
      </header>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 dark:bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-8 border border-indigo-100/50 dark:border-indigo-800 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>
                <Trans>Disponible pour de nouveaux projets</Trans>
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8 font-outfit">
              <span className="block">
                <Trans>Bienvenue dans mon</Trans>
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                <Trans>Univers Créatif</Trans>
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              <Trans>
                Je conçois des expériences numériques exceptionnelles alliant
                performance technique et esthétique raffinée. Spécialisé en
                React, TanStack et animations premium.
              </Trans>
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="btn-primary group">
                <span className="flex items-center gap-2">
                  <Trans>Voir mes projets</Trans>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="btn-secondary">
                <Trans>Me contacter</Trans>
              </button>
            </div>

            {/* Stats or Trusted by */}
            <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800 flex gap-8 items-center text-slate-400">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-100 dark:bg-slate-800"
                  />
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="text-slate-900 dark:text-white font-bold">
                  15+
                </span>{" "}
                <Trans>projets réussis avec succès</Trans>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 -z-10" />

              {/* Fake Terminal Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                  portfolio.tsx
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-indigo-500">1</span>
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    developer
                  </span>
                  <span className="text-slate-400">=</span>
                  <span className="text-amber-600 dark:text-amber-400">
                    "Creative & Tech"
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-indigo-500">2</span>
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    skills
                  </span>
                  <span className="text-slate-400">=</span>
                  <span className="text-slate-800 dark:text-slate-200">[</span>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-indigo-500">3</span>
                  <span className="text-amber-600 dark:text-amber-400">
                    "React"
                  </span>
                  <span className="text-slate-400">,</span>
                  <span className="text-amber-600 dark:text-amber-400">
                    "TanStack"
                  </span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-indigo-500">4</span>
                  <span className="text-amber-600">"Framer Motion"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-indigo-500">5</span>
                  <span className="text-slate-800 dark:text-slate-200">]</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center py-12">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl relative group-hover:scale-105 transition-transform duration-500 border border-slate-100 dark:border-slate-700">
                  <Terminal className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                <Code className="w-5 h-5" />
              </div>
              <div className="hidden xs:block">
                <div className="text-xs text-slate-400 font-medium">
                  Clean Code
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  TypeScript
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Background decoration for Dark Mode */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_50%)] dark:block hidden pointer-events-none" />
    </div>
  );
}

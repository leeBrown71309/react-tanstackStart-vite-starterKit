import { useLingui } from "@lingui/react";
import { i18n, dynamicActivate } from "../i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const { i18n: lingui } = useLingui();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = async (locale: string) => {
    await dynamicActivate(locale);
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((l) => l.code === lingui.locale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:border-indigo-300 transition-all duration-300 group"
      >
        <Languages className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
        <span className="text-sm font-semibold text-slate-700">
          {currentLanguage.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl shadow-indigo-100/50 border border-slate-100 overflow-hidden z-20"
            >
              <div className="p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                      lingui.locale === lang.code
                        ? "bg-indigo-50 text-indigo-700"
                        : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </div>
                    {lingui.locale === lang.code && (
                      <Check className="w-4 h-4 text-indigo-600" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

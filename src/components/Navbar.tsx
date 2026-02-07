import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { t } from "@lingui/macro";
import { Menu, X, Rocket, Cpu, User, Mail, Home } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Accueil");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t`Accueil`, href: "/", icon: Home },
    { label: t`Expertise`, href: "#expertise", icon: Cpu },
    { label: t`Projets`, href: "#projets", icon: Rocket },
    { label: t`À propos`, href: "#a-propos", icon: User },
    // { label: t`Contact`, href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-4 bg-[#070b14]/80 backdrop-blur-xl border-b border-indigo-500/10 shadow-2xl shadow-indigo-900/20"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Brand - LEEEIGHT */}
          <div className="flex-1">
            <Link to="/" className="group inline-block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-indigo-400 transition-colors duration-300">
                  LEEEIGHT
                  <span className="text-indigo-500 text-4xl leading-none">
                    .
                  </span>
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu - High End Minimalist */}
          <div className="hidden md:flex flex-2 justify-center items-center">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href as any}
                  onMouseEnter={() => setActiveItem(item.label)}
                  className="relative px-5 py-2 group overflow-hidden"
                >
                  <span
                    className={`relative z-10 text-sm font-bold tracking-wide transition-colors duration-300 ${
                      activeItem === item.label
                        ? "text-white"
                        : "text-indigo-200/50 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {activeItem === item.label && (
                    <motion.div
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-indigo-500/10 rounded-lg z-0"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {/* Minimalist dot indicator */}
                  <AnimatePresence>
                    {activeItem === item.label && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section - Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link
              to={"#" as any}
              className="px-6 py-2.5 rounded-full bg-white text-[#070b14] font-bold text-sm hover:bg-indigo-400 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-over Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-150 md:hidden"
            />

            {/* Slide-over Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#070b14] z-200 md:hidden border-l border-indigo-500/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Menu Header inside Slide-over */}
              <div className="flex items-center justify-between p-8 border-b border-indigo-500/10">
                <span className="text-2xl font-black text-white tracking-tighter">
                  LEEEIGHT<span className="text-indigo-500">.</span>
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto pt-4 px-2">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        to={item.href as any}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group p-6 rounded-2xl hover:bg-indigo-500/10 transition-all border border-transparent hover:border-indigo-500/10"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                            <item.icon size={22} />
                          </div>
                          <span className="text-xl font-bold text-indigo-100 group-hover:text-white">
                            {item.label}
                          </span>
                        </div>
                        <Rocket
                          size={14}
                          className="text-indigo-400 rotate-45 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-8 border-t border-indigo-500/10 bg-[#0b1224]/50">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={"#contact" as any}
                  className="w-full flex items-center justify-center py-5 rounded-2xl bg-indigo-600 text-white font-black text-lg shadow-xl shadow-indigo-600/20 active:scale-95 transition-transform"
                >
                  <Mail size={20} className="mr-3" />
                  CONTACT ME
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

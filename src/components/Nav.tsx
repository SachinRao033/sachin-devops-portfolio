import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/resume";
import { downloadResume } from "../utils/resume";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(scroll / height, 1) : 0);
      setSolid(scroll > 40);

      let current = "";
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between sm:h-[70px]">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-aws/60 bg-aws/10 font-mono text-[11px] font-bold text-aws transition-colors group-hover:bg-aws group-hover:text-ink">
              {profile.initials}
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-[13px] font-semibold tracking-tight text-white">{profile.name}</span>
              <span className="block font-mono text-[10px] tracking-[0.14em] text-slate-500 uppercase">
                {profile.role}
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`px-3 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
                  active === link.id ? "text-aws" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadResume}
              className="hidden items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] text-white uppercase transition-colors hover:border-aws hover:text-aws sm:inline-flex"
            >
              <Download size={13} /> Resume
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center border border-line text-white lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className="h-[2px] w-full bg-line/60">
          <div
            className="h-full bg-gradient-to-r from-aws to-cyan transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex flex-col bg-ink/98 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-aws uppercase">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-line text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-auto mb-auto space-y-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  onClick={() => go(link.id)}
                  className="flex w-full items-baseline gap-4 border-b border-line py-4 text-left text-3xl font-semibold tracking-tight text-white"
                >
                  <span className="font-mono text-[11px] text-aws">0{i + 1}</span>
                  {link.label}
                </motion.button>
              ))}
            </div>
            <button
              onClick={downloadResume}
              className="flex items-center justify-center gap-2 border border-aws bg-aws py-4 font-mono text-xs tracking-[0.16em] text-ink uppercase"
            >
              <Download size={14} /> Download resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

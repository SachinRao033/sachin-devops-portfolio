import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, Check, Cloud, Code2, Network, Workflow } from "lucide-react";
import { skillGroups } from "../data/resume";

const icons: Record<string, typeof Cloud> = {
  cloud: Cloud,
  workflow: Workflow,
  code: Code2,
  network: Network,
  activity: Activity,
  check: Check,
};

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
  const Icon = icons[group.icon] ?? Cloud;

  return (
    <section id="skills" className="border-b border-line py-20 sm:py-28">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">04 / Skills</span>
          <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-600 uppercase">
            Tools I use weekly
          </span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {skillGroups.map((g) => {
                const GIcon = icons[g.icon] ?? Cloud;
                const isActive = active === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setActive(g.id)}
                    className={`border p-4 text-left transition-colors ${
                      isActive ? "border-aws bg-aws/10" : "border-line bg-panel hover:border-slate-600"
                    }`}
                  >
                    <GIcon size={17} className={isActive ? "text-aws" : "text-slate-500"} />
                    <p className={`mt-3 text-[13.5px] font-semibold ${isActive ? "text-white" : "text-slate-300"}`}>
                      {g.label}
                    </p>
                    <div className="mt-3 h-[3px] w-full bg-line">
                      <motion.div
                        className="h-full bg-aws"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border border-line bg-panel">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="flex items-center gap-3">
                <Icon size={16} className="text-aws" />
                <span className="font-mono text-[11px] tracking-[0.16em] text-white uppercase">{group.label}</span>
              </span>
              <span className="font-mono text-[11px] text-aws">{group.level}%</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-5"
              >
                <p className="text-[14px] leading-7 text-slate-400">{group.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.025 }}
                      className="border border-line bg-[#080c13] px-3 py-2 font-mono text-[11.5px] text-slate-300 transition-colors hover:border-aws hover:text-aws"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

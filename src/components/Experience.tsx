import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, MapPin, Plus } from "lucide-react";
import { experience } from "../data/resume";

export default function Experience() {
  const [open, setOpen] = useState<string>(experience[0].id);
  const [filter, setFilter] = useState<"all" | "fulltime" | "intern">("all");

  const visible = experience.filter((job) =>
    filter === "all" ? true : filter === "fulltime" ? job.current : job.type === "Internship"
  );

  return (
    <section id="experience" className="border-b border-line py-20 sm:py-28">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">02 / Experience</span>
          <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-600 uppercase">
            {experience.length} roles
          </span>
          <div className="ml-auto flex gap-1">
            {[
              { id: "all", label: "All" },
              { id: "fulltime", label: "Full-time" },
              { id: "intern", label: "Internships" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3 py-1.5 font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors ${
                  filter === tab.id ? "bg-aws text-ink" : "border border-line text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {visible.map((job, i) => {
            const isOpen = open === job.id;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`border-b border-line transition-colors ${isOpen ? "bg-panel/60" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? "" : job.id)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[1fr_auto] items-start gap-4 px-1 py-6 text-left sm:grid-cols-[190px_1fr_auto] sm:px-3"
                >
                  <span className="font-mono text-[11px] leading-5 tracking-[0.08em] text-slate-500 uppercase">
                    {job.period}
                  </span>
                  <span className="col-start-2 row-start-2 sm:col-start-2 sm:row-start-1">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {job.role}
                      </span>
                      {job.current && (
                        <span className="border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9.5px] tracking-[0.14em] text-emerald-400 uppercase">
                          Current
                        </span>
                      )}
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11.5px] text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={12} className="text-aws" /> {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} className="text-aws" /> {job.location}
                      </span>
                      <span>· {job.type}</span>
                    </span>
                  </span>
                  <span
                    className={`col-start-2 row-start-1 flex h-7 w-7 items-center justify-center border border-line text-slate-400 transition-all duration-300 sm:col-start-3 ${
                      isOpen ? "rotate-45 border-aws text-aws" : "group-hover:text-white"
                    }`}
                  >
                    <Plus size={14} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 px-1 pb-7 sm:grid-cols-[190px_1fr] sm:px-3">
                        <div className="hidden sm:block">
                          <div className="h-full w-px bg-gradient-to-b from-aws to-transparent" />
                        </div>
                        <div>
                          <ul className="space-y-2.5">
                            {job.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-[14px] leading-6 text-slate-400">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aws" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {job.stack.map((s) => (
                              <span key={s} className="chip">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {visible.length === 0 && (
            <p className="py-10 font-mono text-sm text-slate-500">No roles match this filter.</p>
          )}
        </div>
      </div>
    </section>
  );
}

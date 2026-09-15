import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/resume";

export default function Credentials() {
  return (
    <section id="credentials" className="border-b border-line py-20 sm:py-28">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">05 / Credentials</span>
          <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-600 uppercase">
            Certifications & education
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
              <Award size={17} className="text-aws" /> Certifications
            </h3>
            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-panel p-5 transition-colors hover:bg-[#111823]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[14.5px] leading-6 font-semibold text-white">{cert.name}</p>
                    {cert.current && (
                      <span className="shrink-0 border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.14em] text-emerald-400 uppercase">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-mono text-[11.5px] text-aws">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-[10.5px] tracking-[0.1em] text-slate-500 uppercase">
                    {cert.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
              <GraduationCap size={17} className="text-aws" /> Education
            </h3>
            <div className="mt-6 border border-line bg-panel p-6">
              <p className="font-mono text-[10.5px] tracking-[0.16em] text-slate-500 uppercase">
                {education.period}
              </p>
              <p className="mt-3 text-xl leading-snug font-semibold tracking-tight text-white">
                {education.degree}
              </p>
              <p className="mt-2 text-[13.5px] leading-6 text-slate-400">{education.college}</p>
              <p className="font-mono text-[12px] text-slate-500">{education.place}</p>

              <div className="mt-5 flex items-baseline gap-3 border-t border-line pt-5">
                <span className="font-mono text-3xl font-bold text-aws">{education.gpa.split(" ")[0]}</span>
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-slate-500 uppercase">
                  Cumulative GPA
                </span>
              </div>

              <p className="mt-6 font-mono text-[10.5px] tracking-[0.16em] text-slate-500 uppercase">
                Relevant coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

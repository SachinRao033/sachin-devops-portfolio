import { motion } from "framer-motion";
import { profile, principles } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="relative border-b border-line py-20 sm:py-28">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">01 / About</span>
          <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-600 uppercase">
            How I work
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.06] font-bold tracking-[-0.035em] text-white"
          >
            I keep releases boring, environments consistent, and
            <span className="text-aws"> infrastructure written down as code.</span>
          </motion.h2>

          <div className="space-y-6">
            <p className="text-[15px] leading-7 text-slate-400">{profile.summary}</p>
            <p className="text-[15px] leading-7 text-slate-400">
              Based in {profile.location}, I have moved from manual QA through cloud computing into DevOps
              engineering — which means I care about the whole path a change takes: the commit, the pipeline,
              the container, the network path, and the dashboard that tells you it worked.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-panel p-6 transition-colors hover:bg-[#111823]"
            >
              <span className="font-mono text-[11px] text-aws">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-6 text-slate-400">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "../data/resume";

function ArchitectureDiagram({ services, accent }: { services: string[]; accent: string }) {
  const layers = [
    { name: "Route 53 · CloudFront", tier: "Edge / Presentation" },
    { name: "ALB · Auto Scaling · EC2 / ECS", tier: "Application / Logic" },
    { name: "RDS · S3 · VPC subnets", tier: "Data / Storage" },
  ];

  return (
    <div className="space-y-2 border border-line bg-[#080c13] p-4 sm:p-5">
      <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-slate-600 uppercase">
        Reference architecture
      </p>
      {layers.map((layer, i) => {
        const match = services.some((s) => layer.name.toLowerCase().includes(s.toLowerCase().slice(0, 3)));
        return (
          <div key={layer.name} className="relative">
            <div
              className="flex items-center justify-between border px-3 py-2.5 transition-all duration-300"
              style={{
                borderColor: match ? `${accent}66` : "#1b2431",
                background: match ? `${accent}0f` : "#0c111a",
              }}
            >
              <span className="font-mono text-[11px] text-slate-300 sm:text-[12px]">{layer.name}</span>
              <span className="font-mono text-[9.5px] tracking-[0.14em] text-slate-500 uppercase">{layer.tier}</span>
            </div>
            {i < layers.length - 1 && (
              <div className="mx-auto h-3 w-px bg-gradient-to-b from-aws to-cyan" />
            )}
          </div>
        );
      })}
      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3">
        {services.map((s) => (
          <span key={s} className="font-mono text-[10px] text-slate-500">
            {s} <span className="text-slate-700">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(projects[0].id);
  const project = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <section id="projects" className="border-b border-line py-20 sm:py-28">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">03 / Projects</span>
          <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-600 uppercase">
            Infrastructure & builds
          </span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`group min-w-[220px] border-b border-line px-3 py-4 text-left transition-colors lg:min-w-0 ${
                  active === p.id ? "bg-panel" : "hover:bg-panel/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="font-mono text-[10.5px]"
                    style={{ color: active === p.id ? p.accent : "#64748b" }}
                  >
                    {p.index}
                  </span>
                  <span className="text-lg font-semibold tracking-tight text-white">{p.name}</span>
                </span>
                <span className="mt-1.5 block pl-9 font-mono text-[10.5px] tracking-[0.1em] text-slate-500 uppercase">
                  {p.kind}
                </span>
              </button>
            ))}
          </div>

          <div className="min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="font-mono text-[10.5px] tracking-[0.16em] text-slate-500 uppercase">
                      {project.kind} · {project.year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium" style={{ color: project.accent }}>
                    {project.headline}
                  </p>
                  <p className="mt-5 text-[14.5px] leading-7 text-slate-400">{project.description}</p>

                  <ul className="mt-6 space-y-3 border-t border-line pt-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[13.5px] leading-6 text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {project.paper && (
                    <div className="mt-6 inline-flex items-center gap-3 border border-line bg-panel px-4 py-3">
                      <FileText size={15} className="shrink-0 text-aws" />
                      <span className="text-[12.5px] leading-5 text-slate-400">
                        Published as an IEEE paper: <span className="text-white">{project.paper}</span>
                      </span>
                    </div>
                  )}

                  <a
                    href="https://github.com/SachinRao033"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:border-aws hover:text-aws"
                  >
                    View on GitHub <ArrowUpRight size={14} />
                  </a>
                </div>

                <ArchitectureDiagram services={project.services} accent={project.accent} />
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download, GitBranch, Link2, Mail, Phone } from "lucide-react";
import { profile } from "../data/resume";
import { copyToClipboard, downloadResume } from "../utils/resume";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const ok = await copyToClipboard(profile.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: Link2, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: GitBranch, label: "GitHub", value: profile.githubLabel, href: profile.github },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden pt-20 pb-10 sm:pt-28">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -bottom-32 left-1/2 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-aws/10 blur-[140px]" />

      <div className="shell relative">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1] font-extrabold tracking-[-0.04em] text-white"
        >
          Have infrastructure that needs to ship reliably?
          <span className="text-aws"> Let&apos;s talk.</span>
        </motion.h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 bg-aws px-6 py-4 font-mono text-[11.5px] font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-white"
          >
            Email Sachin
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 border border-line bg-panel px-6 py-4 font-mono text-[11.5px] tracking-[0.14em] text-white uppercase transition-colors hover:border-aws hover:text-aws"
          >
            <Download size={14} /> Download resume
          </button>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 border border-line bg-panel px-6 py-4 font-mono text-[11.5px] tracking-[0.14em] text-white uppercase transition-colors hover:border-aws hover:text-aws"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-panel p-5 transition-colors hover:bg-[#111823]"
            >
              <span className="flex items-center justify-between">
                <Icon size={15} className="text-aws" />
                <ArrowUpRight
                  size={14}
                  className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aws"
                />
              </span>
              <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">{label}</p>
              <p className="mt-1.5 text-[13px] break-words text-white">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 font-mono text-[10.5px] tracking-[0.14em] text-slate-500 uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          <span className="text-slate-600">Built with React, Vite & Tailwind — deployed like everything else: automatically.</span>
        </div>
      </div>
    </footer>
  );
}

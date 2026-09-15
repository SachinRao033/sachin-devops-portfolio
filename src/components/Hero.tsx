import { motion } from "framer-motion";
import { ArrowDown, Copy, GitBranch, Link2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { profile, stats } from "../data/resume";
import { copyToClipboard, downloadResume } from "../utils/resume";
import Terminal from "./Terminal";

const marquee = [
  "EC2",
  "VPC",
  "IAM",
  "S3",
  "RDS",
  "ECS",
  "EKS",
  "Lambda",
  "CloudFront",
  "Route 53",
  "ALB",
  "Auto Scaling",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "GitHub Actions",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const ok = await copyToClipboard(profile.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-0 sm:pt-28">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-aws/10 blur-[130px]" />
      <div className="absolute top-24 -right-24 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[130px]" />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-emerald-400 uppercase">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
              <span className="chip">{profile.tagline}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-7 text-[clamp(2.9rem,8vw,5.4rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-white"
            >
              Sachin Rao D
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-4 font-mono text-sm tracking-[0.02em] text-aws sm:text-base"
            >
              {"// DevOps Engineer · AWS · CI/CD · Infrastructure as Code"}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400"
            >
              I design, deploy and manage cloud infrastructure on AWS — automating delivery with Jenkins,
              Docker and Terraform, and running workloads that stay reliable, secure and cost-aware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={downloadResume}
                className="group inline-flex items-center gap-2 bg-aws px-5 py-3.5 font-mono text-[11.5px] font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-white"
              >
                Download resume
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </button>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 border border-line bg-panel px-5 py-3.5 font-mono text-[11.5px] tracking-[0.14em] text-white uppercase transition-colors hover:border-aws hover:text-aws"
              >
                <Copy size={13} />
                {copied ? "Copied!" : "Copy email"}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[12px] text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={13} className="text-aws" /> {profile.location}
              </span>
              <a href={`tel:${profile.phoneHref}`} className="link-underline inline-flex items-center gap-2 hover:text-white">
                <Phone size={13} className="text-aws" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="link-underline inline-flex items-center gap-2 hover:text-white">
                <Mail size={13} className="text-aws" /> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 hover:text-white">
                <Link2 size={13} className="text-aws" /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 hover:text-white">
                <GitBranch size={13} className="text-aws" /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-end gap-4">
              <div className="relative w-[132px] shrink-0 border border-line bg-panel p-2 sm:w-[152px]">
                <img
                  src={profile.portrait}
                  alt={`${profile.name} — ${profile.role}`}
                  className="aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                />
                <span className="absolute -bottom-2 left-2 bg-aws px-2 py-0.5 font-mono text-[9.5px] font-bold tracking-[0.14em] text-ink uppercase">
                  {profile.role}
                </span>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2 pb-2">
                {stats.map((s) => (
                  <div key={s.label} className="border border-line bg-panel/70 px-3 py-3">
                    <p className="font-mono text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                    <p className="mt-1 text-[10.5px] leading-tight text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Terminal />
          </motion.div>
        </div>

        <a
          href="#experience"
          className="mx-auto mt-12 hidden w-fit items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] text-slate-500 uppercase transition-colors hover:text-aws lg:inline-flex"
        >
          Scroll <ArrowDown size={13} />
        </a>
      </div>

      <div className="relative mt-10 overflow-hidden border-y border-line bg-panel/60 py-3">
        <motion.div
          className="flex w-max gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8 font-mono text-[11px] tracking-[0.14em] text-slate-500 uppercase">
              {item}
              <span className="text-aws">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { profile, skillGroups, experience, projects, certifications, education } from "../data/resume";

type Line = { kind: "cmd" | "out" | "ok" | "warn" | "dim"; text: string };

const banner: Line[] = [
  { kind: "dim", text: "Last login: $(date) on ttys001 — sachin@aws-devops" },
  { kind: "out", text: "" },
  { kind: "ok", text: "  ▲ sachin-cli v2.6.0 — interactive portfolio shell" },
  { kind: "dim", text: "  Type `help` to list available commands." },
  { kind: "out", text: "" },
];

const HELP: string[] = [
  "Available commands:",
  "  whoami          profile summary",
  "  experience      work history",
  "  skills          technical skill groups",
  "  projects        selected builds",
  "  certs           certifications",
  "  education       degree details",
  "  contact         reach out",
  "  terraform plan  infrastructure preview",
  "  aws s3 ls       list buckets",
  "  kubectl get po  cluster workloads",
  "  clear           clear the screen",
];

const BOOT_LINES = ["initialising runtime...", "loading aws credentials...", "mounting portfolio volume..."];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [booted, setBooted] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let i = 0;
    const push = () => {
      setLines((prev) => [...prev, { kind: "dim", text: BOOT_LINES[i] }]);
      i += 1;
      if (i < BOOT_LINES.length) {
        setTimeout(push, 380);
      } else {
        setTimeout(() => {
          setLines((prev) => [...prev, ...banner]);
          setBooted(true);
        }, 300);
      }
    };
    const start = setTimeout(push, 260);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const emit = (out: Line[]) => setLines((prev) => [...prev, ...out]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    emit([{ kind: "cmd", text: cmd }]);
    const key = cmd.toLowerCase();

    if (!cmd) return;

    if (key === "clear") {
      setLines([]);
      return;
    }

    if (key === "help" || key === "?" || key === "ls") {
      emit(HELP.map((text) => ({ kind: "out" as const, text })));
      return;
    }

    if (key === "whoami" || key === "about") {
      emit([
        { kind: "ok", text: `${profile.name} — ${profile.role}` },
        { kind: "out", text: profile.summary },
        { kind: "dim", text: `${profile.location} · ${profile.email} · ${profile.phone}` },
      ]);
      return;
    }

    if (key === "experience" || key === "exp" || key === "work") {
      emit(
        experience.flatMap((job) => [
          { kind: "ok" as const, text: `${job.role} @ ${job.company}` },
          { kind: "dim" as const, text: `${job.period} · ${job.location}` },
          { kind: "out" as const, text: `  ${job.bullets[0]}` },
          { kind: "out" as const, text: "" },
        ])
      );
      return;
    }

    if (key === "skills" || key === "stack") {
      emit([
        ...skillGroups.flatMap((g) => [
          { kind: "ok" as const, text: g.label },
          { kind: "out" as const, text: `  ${g.skills.join(" · ")}` },
        ]),
      ]);
      return;
    }

    if (key === "projects" || key === "work ls") {
      emit(
        projects.flatMap((p) => [
          { kind: "ok" as const, text: `${p.index}  ${p.name}` },
          { kind: "out" as const, text: `   ${p.kind} · ${p.year}` },
          { kind: "dim" as const, text: `   ${p.services.slice(0, 6).join(", ")}` },
          { kind: "out" as const, text: "" },
        ])
      );
      return;
    }

    if (key === "certs" || key === "certifications") {
      emit(
        certifications.map((c) => ({
          kind: "out" as const,
          text: `✓ ${c.name} — ${c.issuer} (${c.period})`,
        }))
      );
      return;
    }

    if (key === "education" || key === "edu") {
      emit([
        { kind: "ok", text: education.degree },
        { kind: "out", text: `${education.college}, ${education.place}` },
        { kind: "dim", text: `${education.period} · GPA ${education.gpa}` },
      ]);
      return;
    }

    if (key === "contact" || key === "email" || key === "hire") {
      emit([
        { kind: "ok", text: "Opening a channel:" },
        { kind: "out", text: `  email     ${profile.email}` },
        { kind: "out", text: `  phone     ${profile.phone}` },
        { kind: "out", text: `  linkedin  ${profile.linkedinLabel}` },
        { kind: "out", text: `  github    ${profile.githubLabel}` },
      ]);
      return;
    }

    if (key.startsWith("terraform")) {
      emit([
        { kind: "dim", text: "Terraform will perform the following actions:" },
        { kind: "out", text: "  ~ aws_instance.web            update in-place" },
        { kind: "out", text: "  + aws_autoscaling_group.app   create" },
        { kind: "out", text: "  + aws_lb.front                create" },
        { kind: "ok", text: "Plan: 3 to add, 1 to change, 0 to destroy." },
        { kind: "dim", text: "Hint: I actually enjoy writing these modules." },
      ]);
      return;
    }

    if (key.includes("s3")) {
      emit([
        { kind: "out", text: "2025-02-11  sachin-static-site-prod" },
        { kind: "out", text: "2025-03-04  sachin-build-artifacts" },
        { kind: "out", text: "2025-06-19  auto-insure-uploads" },
        { kind: "dim", text: "3 buckets — all versioned, all private." },
      ]);
      return;
    }

    if (key.includes("kubectl") || key.includes("eks")) {
      emit([
        { kind: "out", text: "NAME                        READY   STATUS    RESTARTS" },
        { kind: "ok", text: "api-gateway-7d9f4b6c8-x2k9  1/1     Running   0" },
        { kind: "ok", text: "worker-scaler-5c7d8b9f-p3m1 1/1     Running   0" },
        { kind: "ok", text: "grafana-obs-6b4c2d1a-q7t4   1/1     Running   0" },
      ]);
      return;
    }

    if (key.includes("sudo") || key.includes("hire")) {
      emit([
        { kind: "warn", text: "[sudo] password for recruiter: ****" },
        { kind: "ok", text: "Permission granted. ✅ Sachin is available for DevOps roles." },
        { kind: "dim", text: `Run \`contact\` or email ${profile.email}` },
      ]);
      return;
    }

    emit([
      { kind: "warn", text: `command not found: ${cmd}` },
      { kind: "dim", text: "Try `help` for the list of supported commands." },
    ]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    run(value);
    setValue("");
  };

  const color = (kind: Line["kind"]) =>
    kind === "cmd"
      ? "text-white"
      : kind === "ok"
        ? "text-emerald-400"
        : kind === "warn"
          ? "text-amber-400"
          : kind === "dim"
            ? "text-slate-500"
            : "text-slate-300";

  return (
    <div className="overflow-hidden border border-line bg-[#080c13] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[10.5px] tracking-[0.1em] text-slate-500">
          sachin@devops — ~/portfolio — zsh
        </span>
        <span className="ml-auto hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-emerald-400 uppercase sm:flex">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" /> live
        </span>
      </div>

      <div
        ref={scroller}
        onClick={() => input.current?.focus()}
        className="term-scroll h-[330px] cursor-text space-y-1 overflow-y-auto p-4 font-mono text-[11.5px] leading-relaxed sm:h-[380px] sm:text-[12.5px]"
      >
        {lines.map((line, i) => (
          <div key={i} className={color(line.kind)}>
            {line.kind === "cmd" ? (
              <span>
                <span className="text-aws">➜ </span>
                <span className="text-cyan">~/portfolio </span>
                {line.text}
              </span>
            ) : (
              <pre className="font-mono whitespace-pre-wrap">{line.text}</pre>
            )}
          </div>
        ))}

        {booted && (
          <form onSubmit={submit} className="flex items-center gap-1">
            <span className="shrink-0 text-aws">➜ </span>
            <span className="shrink-0 text-cyan">~/portfolio </span>
            <input
              ref={input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal command input"
              className="w-full bg-transparent text-white caret-aws outline-none"
            />
          </form>
        )}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line bg-panel px-4 py-3">
        {["whoami", "skills", "experience", "projects", "terraform plan", "sudo hire sachin"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => run(cmd)}
            className="border border-line px-2.5 py-1.5 font-mono text-[10.5px] text-slate-400 transition-colors hover:border-aws hover:text-aws"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

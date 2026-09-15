import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data/resume";

export function buildResumeText() {
  const lines: string[] = [
    `${profile.name.toUpperCase()}`,
    `${profile.role} | ${profile.tagline}`,
    `${profile.location}`,
    `${profile.email} | ${profile.phone}`,
    `${profile.linkedinLabel} | ${profile.githubLabel}`,
    "",
    "SUMMARY",
    profile.summary,
    "",
    "WORK EXPERIENCE",
  ];

  experience.forEach((job) => {
    lines.push(
      `${job.role} — ${job.company} (${job.type})`,
      `${job.period} | ${job.location}`,
      ...job.bullets.map((b) => `  - ${b}`),
      `  Stack: ${job.stack.join(", ")}`,
      ""
    );
  });

  lines.push(
    "PROJECTS",
    ...projects.flatMap((p) => [
      `${p.name} (${p.kind}, ${p.year})`,
      `  ${p.description}`,
      `  Services: ${p.services.join(", ")}`,
      "",
    ]),
    "TECHNICAL SKILLS",
    ...skillGroups.map((g) => `${g.label}: ${g.skills.join(", ")}`),
    "",
    "CERTIFICATIONS",
    ...certifications.map((c) => `- ${c.name} — ${c.issuer} (${c.period})`),
    "",
    "EDUCATION",
    `${education.degree}`,
    `${education.college}, ${education.place}`,
    `${education.period} | GPA ${education.gpa}`,
    `Coursework: ${education.coursework.join(", ")}`,
    ""
  );

  return lines.join("\n");
}

export const resumePdfUrl = "/Sachin_Rao_Resume.pdf";
export const resumePdfFileName = "Sachin_Rao_Resume.pdf";

export function downloadResume() {
  const link = document.createElement("a");
  link.href = resumePdfUrl;
  link.download = resumePdfFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

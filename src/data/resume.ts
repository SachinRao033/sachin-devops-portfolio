export const profile = {
  name: "Sachin Rao D",
  firstName: "Sachin",
  initials: "SR",
  role: "DevOps Engineer",
  tagline: "AWS Certified Cloud Practitioner",
  location: "Bangalore, Karnataka, India",
  email: "sachinace033@gmail.com",
  phone: "+91 63824 36949",
  phoneHref: "+916382436949",
  linkedin: "https://linkedin.com/in/dsachinrao",
  linkedinLabel: "linkedin.com/in/dsachinrao",
  github: "https://github.com/SachinRao033",
  githubLabel: "github.com/SachinRao033",
  portrait: "/sachin-portrait.jpg",
  summary:
    "AWS DevOps Engineer with hands-on experience designing, deploying and managing cloud infrastructure on AWS. I build CI/CD automation, containerised workloads and resilient, cost-aware architectures — from VPC design and Auto Scaling groups to monitoring with CloudWatch, Prometheus and Grafana.",
  availability: "Open to DevOps / Cloud Engineer roles",
};

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "AWS services in production" },
  { value: "4", label: "Companies & teams supported" },
  { value: "8.04", label: "B.Tech GPA / 10" },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  current?: boolean;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "stackly",
    company: "Stackly",
    role: "DevOps Engineer",
    type: "Full-time",
    location: "Bangalore, Karnataka",
    period: "Jan 2026 — Present",
    current: true,
    stack: ["EC2", "VPC", "IAM", "S3", "RDS", "Route 53", "ALB", "Auto Scaling", "Jenkins", "Docker"],
    bullets: [
      "Designed and managed scalable AWS infrastructure using EC2, VPC, IAM, S3, RDS, Route 53, ALB and Auto Scaling.",
      "Built and maintained CI/CD pipelines with Jenkins, GitHub, Bitbucket, Maven and Gradle to automate application deployments.",
      "Containerised applications with Docker and deployed them on AWS, ensuring consistent and reliable environments.",
      "Administered Linux EC2 instances, configured Nginx and PM2, and monitored application health with Amazon CloudWatch.",
      "Implemented secure networking with VPCs, subnets, security groups, NAT Gateways and IAM policies.",
      "Worked with modern AWS services including ECS, EKS, Lambda, API Gateway, CloudFront and S3 static website hosting.",
      "Troubleshot production issues, optimised cloud resources and partnered with development teams to improve deployment efficiency and reliability.",
    ],
  },
  {
    id: "blue-planet",
    company: "Blue Planet Infosolutions Pvt Ltd",
    role: "DevOps Engineer Intern",
    type: "Internship",
    location: "Remote — Pune",
    period: "Jan 2025 — Jun 2025",
    stack: ["Jenkins", "GitLab CI", "Azure DevOps", "Jira", "CloudFormation"],
    bullets: [
      "Managed Jira Server to track tasks, bugs and user stories — improving team efficiency by 15% and cutting project delays by 10% through streamlined workflows.",
      "Assisted in implementing and maintaining CI/CD pipelines using Jenkins, GitLab CI and Azure DevOps.",
      "Integrated DevOps practices with development teams to strengthen the software development lifecycle.",
      "Configured monitoring tools to track system performance and troubleshoot issues proactively.",
      "Managed migration of applications, databases and infrastructure to cloud-native environments.",
    ],
  },
  {
    id: "besant",
    company: "Besant Technologies",
    role: "Cloud Computing Intern",
    type: "Internship",
    location: "Bangalore",
    period: "Aug 2024 — Mar 2025",
    stack: ["AWS EC2", "S3", "Lambda", "Cost optimization"],
    bullets: [
      "Gained hands-on experience with AWS cloud solutions including design, deployment and optimisation of scalable services using EC2, S3 and Lambda.",
      "Delivered cost-effective infrastructure management across environments.",
      "Conducted performance monitoring and optimisation to ensure efficient resource utilisation and high application performance.",
    ],
  },
  {
    id: "salesqueen",
    company: "Salesqueen Software Solutions",
    role: "Software Testing Intern",
    type: "Internship",
    location: "Remote — Chennai",
    period: "Jun 2024 — Aug 2024",
    stack: ["Manual testing", "Test plans", "QA"],
    bullets: [
      "Executed test cases and performed manual testing on web and mobile applications, verifying functionality, performance and compliance with requirements.",
      "Contributed to comprehensive test plans and test cases ensuring full coverage of application features.",
      "Recommended improvements to developers, enhancing software performance, usability and overall efficiency.",
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  kind: string;
  year: string;
  headline: string;
  description: string;
  highlights: string[];
  services: string[];
  accent: string;
  link?: string;
  paper?: string;
};

export const projects: Project[] = [
  {
    id: "three-tier",
    index: "01",
    name: "AWS Three-Tier Web Architecture",
    kind: "Cloud infrastructure",
    year: "2025",
    headline: "A production-shaped VPC with presentation, logic and data tiers.",
    description:
      "Designed and implemented a three-tier architecture on AWS with isolated public and private subnets, an Application Load Balancer for scalability and Auto Scaling for dynamic resource management — plus an RDS instance, security groups, IAM roles and CloudWatch monitoring.",
    highlights: [
      "Multi-AZ VPC with public and private subnets across presentation, logic and data tiers",
      "Application Load Balancer plus Auto Scaling group for elastic traffic handling",
      "Amazon RDS in private subnets with hardened security groups and IAM roles",
      "Performance and health monitored end to end with Amazon CloudWatch",
    ],
    services: ["VPC", "EC2", "ALB", "Auto Scaling", "RDS", "Route 53", "NAT", "IAM", "CloudWatch", "S3"],
    accent: "#ff9900",
  },
  {
    id: "auto-insure",
    index: "02",
    name: "Auto Insure",
    kind: "Product build",
    year: "2024",
    headline: "Vehicle insurance estimates from photos of damaged parts.",
    description:
      "An online platform that helps customers estimate the cost of vehicle insurance by uploading images of damaged vehicle parts, then returns a report with an estimated insurance amount — replacing slow manual survey workflows with a guided digital flow.",
    highlights: [
      "Image-based damage submission flow for non-technical customers",
      "Automated estimation report generated from the submitted damage evidence",
      "Structured output designed for insurers to review and act on quickly",
    ],
    services: ["Python", "JavaScript", "Web app", "Image upload", "Reporting"],
    accent: "#38bdf8",
  },
  {
    id: "breakdown",
    index: "03",
    name: "Intelligent Vehicle Breakdown Assistance",
    kind: "IEEE published project",
    year: "2024",
    headline: "GPS-first breakdown reporting for faster roadside response.",
    description:
      "A system for handling vehicle breakdowns where customers report issues and share their GPS location for services such as roadside assistance. The platform streamlines reporting for prompt assistance and effective breakdown management, and was published as an IEEE paper.",
    highlights: [
      "One-step incident reporting with automatic GPS location capture",
      "Service routing that connects drivers to nearby roadside assistance",
      "Published as an IEEE paper on breakdown management services",
    ],
    services: ["GPS", "Cloud backend", "Service workflow", "IEEE paper"],
    accent: "#4ade80",
    paper: "An Intelligent Vehicle Breakdown Assistance Management Services",
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  level: number;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "cloud",
    label: "Cloud",
    icon: "cloud",
    blurb: "Designing, deploying and hardening workloads across AWS, with Azure and GCP exposure.",
    level: 92,
    skills: [
      "AWS EC2",
      "S3",
      "RDS (MySQL)",
      "DynamoDB",
      "VPC",
      "IAM",
      "Application Load Balancer",
      "Auto Scaling",
      "ECS",
      "EKS",
      "Lambda",
      "API Gateway",
      "CloudFront",
      "Route 53",
      "CloudFormation",
      "Elastic Beanstalk",
      "Azure",
      "GCP",
    ],
  },
  {
    id: "devops",
    label: "DevOps & IaC",
    icon: "workflow",
    blurb: "Automated delivery pipelines and infrastructure defined as version-controlled code.",
    level: 90,
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Azure DevOps",
      "Bitbucket",
      "Maven",
      "Gradle",
      "Terraform",
      "Ansible",
      "Git",
    ],
  },
  {
    id: "code",
    label: "Programming",
    icon: "code",
    blurb: "Scripting for automation, tooling and glue work between systems.",
    level: 82,
    skills: ["Python", "Bash / Shell", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "network",
    blurb: "Secure, well-segmented networking as the foundation of every deployment.",
    level: 85,
    skills: [
      "TCP/IP",
      "LAN / WAN",
      "Subnets & route tables",
      "NAT Gateway",
      "Security groups",
      "DNS / Route 53",
      "Cisco router & switch management",
    ],
  },
  {
    id: "systems",
    label: "Systems & Monitoring",
    icon: "activity",
    blurb: "Linux administration, process management and observability you can act on.",
    level: 88,
    skills: [
      "Linux (Red Hat, Kali)",
      "Windows Server",
      "Nginx",
      "PM2",
      "Amazon CloudWatch",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    id: "practices",
    label: "Practices",
    icon: "check",
    blurb: "The day-to-day habits that keep releases boring and systems reliable.",
    level: 86,
    skills: [
      "CI/CD design",
      "Incident troubleshooting",
      "Cost optimisation",
      "Cloud migration",
      "Jira workflows",
      "Manual QA & test planning",
      "Documentation",
    ],
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", href :"https://cp.certmetrics.com/amazon/en/public/verify/credential/d62c34629b154a0a9f86ce12b56ce603" , issuer: "Amazon Web Services", period: "Jul 2026 — Jul 2029", current: true },
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", period: "Feb 2026 — Feb 2028", current: true },
  { name: "AWS Solutions Architecture Job Simulation", issuer: "Forage", period: "Mar 2025" },
  { name: "DevOps", issuer: "HCL GUVI", period: "Oct 2023" },
  { name: "Cloud Core", issuer: "IBM", period: "May 2023" },
  { name: "Introduction to Cloud", issuer: "IBM · TNSDC", period: "May 2023" },
];

export const education = {
  degree: "B.Tech, Information Technology",
  college: "Er. Perumal Manimekalai College of Engineering",
  place: "Hosur, Tamil Nadu",
  period: "Sep 2020 — Jun 2024",
  gpa: "8.04 / 10",
  coursework: ["DBMS", "Operating Systems", "Computer Networks", "SDLC & OOAD", "Cloud Computing"],
};

export const principles = [
  {
    title: "Automate the second time",
    body: "Do it once by hand to understand it, then write the pipeline or module so nobody has to do it again.",
  },
  {
    title: "Secure by default",
    body: "Least-privilege IAM, private subnets, audited security groups — designed in, never bolted on later.",
  },
  {
    title: "Measure before tuning",
    body: "CloudWatch, Prometheus and Grafana first. Optimising cost and performance starts with real numbers.",
  },
];

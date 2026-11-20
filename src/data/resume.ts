export const profile = {
  name: "Sachin Rao D",
  firstName: "Sachin",
  initials: "SR",
  role: "DevOps Engineer | AWS Cloud Engineer",
  roleBadge: "DevOps / AWS",
  tagline: "AWS Certified Cloud Practitioner",
  location: "Bangalore, Karnataka, India",
  email: "sachinace033@gmail.com",
  phone: "+91 63824 36949",
  phoneHref: "+916382436949",
  linkedin: "https://linkedin.com/in/dsachinrao",
  linkedinLabel: "linkedin.com/in/dsachinrao",
  github: "https://github.com/SachinRao033",
  githubLabel: "github.com/SachinRao033",
  portfolio: "https://v0-sachin-devops-portfolio-v2.vercel.app",
  portrait: "/sachin-portrait.jpg",
  summary:
    "DevOps Engineer focused on AWS cloud infrastructure, Linux administration, Docker, CI/CD automation, and application deployment.",
  about: [
    "I am a DevOps Engineer with hands-on experience in AWS cloud infrastructure, Linux administration, Docker containerization, CI/CD pipelines, and application deployment.",
    "I have worked with AWS services including EC2, S3, VPC, IAM, RDS, Application Load Balancer, Auto Scaling, Route 53, and CloudWatch. My technical experience also includes Docker, Docker Compose, Jenkins, GitHub Actions, GitLab CI/CD, Nginx, and Linux-based application management.",
    "I enjoy automating deployment workflows, troubleshooting infrastructure issues, and building reliable cloud environments. I am passionate about improving deployment efficiency and developing practical DevOps solutions.",
  ],
  availability: "Open to DevOps / Cloud Engineer roles",
};

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "14", label: "AWS services listed" },
  { value: "4", label: "Professional roles" },
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
    role: "DevOps Engineer Trainee",
    type: "Full-time",
    location: "Bangalore, Karnataka",
    period: "Jan 2026 — Sep 2026",
    current: false,
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
    company: "Blue Planet Infosolutions Pvt. Ltd.",
    role: "Junior DevOps Engineer Intern",
    type: "Internship",
    location: "Remote — Pune",
    period: "Jan 2025 — Jun 2025",
    stack: ["Jenkins", "GitLab CI/CD", "Azure DevOps", "AWS", "Docker", "Git", "Jira", "Linux"],
    bullets: [
      "Worked with Jenkins, GitLab CI/CD, and Azure DevOps to support continuous integration and deployment workflows.",
      "Assisted with AWS infrastructure and cloud resource management.",
      "Used Docker in application packaging and deployment workflows.",
      "Used Git and Jira for version control, task tracking, and team collaboration.",
      "Gained practical exposure to Linux administration and deployment troubleshooting.",
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
      "Gained practical exposure to AWS cloud infrastructure and services, including EC2, S3, and Lambda concepts.",
      "Explored cloud resource management and application deployment practices.",
      "Learned cloud monitoring, performance optimization, and infrastructure management fundamentals.",
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
      "Executed manual test cases for web and mobile applications.",
      "Performed functional testing, identified defects, and documented reproducible issues.",
      "Assisted in preparing test plans and test documentation.",
      "Reported bugs and collaborated with the team to improve application quality.",
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
  workflow?: string[];
};

export const projects: Project[] = [
  {
    id: "three-tier",
    index: "01",
    name: "AWS Three-Tier Web Architecture",
    kind: "Cloud Infrastructure",
    year: "2025",
    headline: "Presentation, application, and database tiers on AWS.",
    description:
      "Designed and implemented a three-tier AWS architecture with separate presentation, application, and database layers to support scalability, availability, and security.",
    highlights: [
      "Designed a VPC with public and private subnets.",
      "Configured application traffic distribution through an Application Load Balancer.",
      "Implemented Auto Scaling for application instances.",
      "Configured Amazon RDS within private subnets and applied IAM roles and security groups.",
      "Used CloudWatch for infrastructure monitoring.",
    ],
    services: ["EC2", "VPC", "Public / Private Subnets", "ALB", "Auto Scaling", "RDS", "S3", "IAM", "NAT Gateway", "Route 53", "Security Groups", "CloudWatch"],
    accent: "#ff9900",
    link: "https://github.com/SachinRao033/Food-Order-3_tier_Architecture_Deployment-using-AWS",
  },
  {
    id: "auto-insure",
    index: "02",
    name: "Auto Insure",
    kind: "Product Development",
    year: "2024",
    headline: "Vehicle damage estimates from submitted photographs.",
    description:
      "Developed an online vehicle insurance estimation platform where users submit photographs of damaged vehicle parts and receive an estimated insurance report.",
    highlights: [
      "Image-based vehicle damage submission.",
      "Damage estimation workflow based on submitted images.",
      "Automated insurance report generation for assessment.",
    ],
    services: ["Python", "JavaScript", "HTML", "CSS", "MySQL", "OpenCV"],
    accent: "#38bdf8",
    workflow: ["Upload damaged-part photos", "Estimate vehicle damage", "Generate insurance report"],
  },
  {
    id: "breakdown",
    index: "03",
    name: "Intelligent Vehicle Breakdown Assistance",
    kind: "IEEE Published Project",
    year: "2024",
    headline: "GPS-based reporting that connects drivers with roadside assistance.",
    description:
      "Developed a GPS-based vehicle breakdown assistance platform that lets users report incidents and connect with nearby roadside assistance services.",
    highlights: [
      "Vehicle breakdown reporting with automatic GPS location capture.",
      "Nearby roadside assistance coordination and a streamlined service workflow.",
      "Research published as an IEEE project.",
    ],
    services: ["GPS Location", "Incident Reporting", "Roadside Assistance", "IEEE Publication"],
    accent: "#4ade80",
    paper: "An Intelligent Vehicle Breakdown Assistance Management Services",
    workflow: ["Report vehicle breakdown", "Capture GPS location", "Find nearby roadside assistance", "Coordinate service response"],
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  experience: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "cloud-platforms",
    label: "Cloud Platforms",
    icon: "cloud",
    blurb: "AWS cloud infrastructure experience, with exposure to Azure and GCP.",
    experience: "Hands-on + exposure",
    skills: ["AWS", "Azure (exposure)", "GCP (exposure)"],
  },
  {
    id: "aws-services",
    label: "AWS Services",
    icon: "cloud",
    blurb: "Core AWS infrastructure experience and familiarity with additional AWS services.",
    experience: "Practical experience",
    skills: ["EC2", "S3", "VPC", "IAM", "RDS", "ALB", "Auto Scaling", "Route 53", "CloudWatch", "Lambda", "ECS", "EKS", "API Gateway", "CloudFront"],
  },
  {
    id: "devops-cicd",
    label: "DevOps & CI/CD",
    icon: "workflow",
    blurb: "Experience supporting automated build, test, and deployment workflows.",
    experience: "Practical experience",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "CI/CD pipelines", "Git"],
  },
  {
    id: "containerization",
    label: "Containerization",
    icon: "workflow",
    blurb: "Containerized application workflows and familiarity with container registries.",
    experience: "Hands-on + familiarity",
    skills: ["Docker", "Docker Compose", "Docker Hub", "Amazon ECR"],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    icon: "check",
    blurb: "Foundational infrastructure-as-code knowledge; Terraform is at a basic level.",
    experience: "Foundational",
    skills: ["Terraform (basic)", "Ansible (foundational)"],
  },
  {
    id: "operating-systems",
    label: "Operating Systems",
    icon: "activity",
    blurb: "Linux-based application management, administration, and troubleshooting.",
    experience: "Practical experience",
    skills: ["Linux", "Ubuntu", "Red Hat", "Shell Scripting", "Linux Troubleshooting"],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "network",
    blurb: "Networking fundamentals applied to cloud environments and web application delivery.",
    experience: "Foundational + practical application",
    skills: ["DNS", "TCP/IP fundamentals", "VPC", "Subnets", "Routing", "Security Groups", "Load Balancing", "Nginx", "HTTP/HTTPS"],
  },
  {
    id: "programming",
    label: "Programming",
    icon: "code",
    blurb: "Programming and scripting used in application, database, and automation tasks.",
    experience: "Practical experience",
    skills: ["Python", "Bash", "JavaScript", "SQL", "MySQL"],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    icon: "activity",
    blurb: "CloudWatch experience, with familiarity in Prometheus and the ELK Stack.",
    experience: "Practical + familiarity",
    skills: ["AWS CloudWatch", "Prometheus (familiarity)", "ELK Stack (familiarity)"],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    icon: "workflow",
    blurb: "Foundational understanding of container orchestration concepts.",
    experience: "Basic knowledge",
    skills: ["Kubernetes (basic knowledge)"],
  },
];

export const certifications: Array<{
  name: string;
  issuer: string;
  period: string;
  current?: boolean;
  status?: string;
}> = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", period: "July 2026 — July 2029", current: true },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", period: "In progress", status: "In progress" },
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", period: "February 2026 — February 2028", current: true },
  { name: "AWS Solutions Architecture Job Simulation", issuer: "Forage", period: "March 2025" },
  { name: "DevOps", issuer: "HCL GUVI", period: "October 2023" },
  { name: "Cloud Core", issuer: "IBM", period: "May 2023" },
  { name: "Introduction to Cloud", issuer: "IBM / TNSDC", period: "May 2023" },
];

export const education = {
  degree: "B.Tech – Information Technology",
  college: "Er. Perumal Manimekalai College of Engineering",
  place: "Hosur, Tamil Nadu",
  period: "September 2020 — June 2024",
  gpa: "8.04 / 10",
  coursework: ["Operating Systems", "Database Management Systems", "Computer Networks", "SDLC", "Cloud Computing"],
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

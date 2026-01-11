
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  shortDescription?: string;
  image: string;
  technologies: string[];
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  problem?: string;
  solution?: string;
  architectureImage?: string;
  // Blog fields
  date: string;
  readTime: string;
  author: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hardened EC2 Web Server Behind ALB with HTTPS",
    category: "Cloud",
    description: "Designed a production-grade AWS setup with a custom VPC, public/private subnets, hardened EC2, ALB, Route 53 DNS, and ACM-enabled HTTPS.",
    shortDescription: "Production-grade AWS setup with VPC, ALB, and HTTPS.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    technologies: ["AWS", "EC2", "ALB", "VPC", "Route53", "ACM"],
    link: "https://github.com",
    githubUrl: "https://github.com",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    author: "Shloka Kamdar"
  },
  {
    id: 2,
    title: "S3 Lifecycle Transitions & Cross-Region Replication",
    category: "Cloud",
    description: "Developed a durable, cost-optimized S3 architecture using versioning, lifecycle rules, and cross-region replication with IAM roles. Demonstrated DR readiness using NAT Gateway, Bastion Host, and private subnets.",
    shortDescription: "Cost-optimized S3 architecture with CRR and DR readiness.",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=1932",
    technologies: ["AWS S3", "IAM", "DR", "NAT Gateway", "Bastion Host"],
    link: "https://github.com",
    githubUrl: "https://github.com",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    author: "Shloka Kamdar"
  },
  {
    id: 3,
    title: "Canary Deployment Using ALB Listener Rules",
    category: "DevOps",
    description: "Executed canary deployment with ALB listener rule weighting (10% canary / 90% stable). Validated routing via ALB access logs and implemented a rollback plan using target group switching and health checks.",
    shortDescription: "Canary deployment strategy using AWS ALB listener rules.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    technologies: ["AWS ALB", "Canary Deployment", "DevOps"],
    link: "https://github.com",
    githubUrl: "https://github.com",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    author: "Shloka Kamdar"
  },
  {
    id: 4,
    title: "Infrastructure as Code with Terraform",
    category: "IaC",
    description: "Provisioned AWS infrastructure using Terraform, including VPC, public subnets, Application Load Balancer, target groups, security groups, and EC2 instances running Nginx. Demonstrated repeatable, idempotent deployments.",
    shortDescription: "IaC provisioning of AWS infrastructure using Terraform.",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0c0b1a03?auto=format&fit=crop&q=80&w=1932",
    technologies: ["Terraform", "AWS", "Nginx", "IaC"],
    link: "https://github.com",
    githubUrl: "https://github.com",
    date: "Oct 12, 2025",
    readTime: "10 min read",
    author: "Shloka Kamdar"
  }
];

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === Number(id));
};

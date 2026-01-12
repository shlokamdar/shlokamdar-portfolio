
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
    title: "Secure AWS VPC Architecture with ALB, HTTPS & Private EC2",
    category: "Cloud / AWS",
    description:
      "Designed and deployed a secure, highly available cloud infrastructure on AWS using a custom VPC, public and private subnets, NAT Gateway, Bastion Host, Application Load Balancer, Route 53, and ACM. The architecture ensures isolation of private resources while enabling secure internet access and HTTPS-enabled web traffic through a load balancer.",
    shortDescription:
      "A production-style AWS VPC setup with private EC2 instances behind an ALB, secured using NAT, Bastion Host, Route 53 DNS, and ACM HTTPS.",
    image: "/images/projects/aws-vpc-alb.png",
    technologies: [
      "AWS EC2",
      "VPC",
      "Application Load Balancer",
      "Route 53",
      "ACM",
      "Nginx",
      "NAT Gateway",
      "Bastion Host",
      "Security Groups"
    ],
    // link: "https://shlokamdar.in",
    // liveUrl: "https://shlokamdar.in",
    githubUrl: "https://github.com/shlokamdar/aws-secure-alb-ec2-architecture",
    // documentationUrl: "/docs/secure-aws-vpc-alb",
    problem:
      "Deploying a secure and highly available web application while ensuring private EC2 instances are not directly exposed to the internet, yet still have outbound access for updates and package installation.",
    solution:
      "Implemented a custom VPC with public and private subnets across multiple Availability Zones, used a NAT Gateway for outbound access, a Bastion Host for secure SSH access, an Application Load Balancer for traffic distribution, Route 53 for DNS, and ACM to enable HTTPS.",
    // architectureImage: "/images/projects/aws-vpc-architecture.png",
    date: "02-12-2025",
    readTime: "5 min read",
    author: "Shloka Kamdar"
  },

  {
    id: 2,
    title: "AWS S3 Cross-Region Backup with Lifecycle & Tag-Based Replication",
    category: "Cloud / AWS",
    description:
      "Designed and implemented an enterprise-grade S3 backup architecture using cross-region replication, lifecycle management, versioning, and encryption. The solution selectively replicates production data across regions while optimizing storage costs through intelligent tiering and automated cleanup of noncurrent versions.",
    shortDescription:
      "A robust S3 backup strategy using cross-region replication, tag-based filtering, lifecycle policies, and encryption for durability and cost optimization.",
    image: "/images/projects/aws-s3-crr-architecture.png",
    technologies: [
      "AWS S3",
      "Cross-Region Replication",
      "Lifecycle Policies",
      "IAM",
      "SSE-S3",
      "Intelligent-Tiering"
    ],
    // link: "https://github.com/shlokamdar/aws-s3-backup-crr-lifecycle",
    liveUrl: undefined,
    githubUrl: "https://github.com/shlokamdar/aws-s3-backup-crr-lifecycle",
    // documentationUrl: "/docs/aws-s3-backup-crr-lifecycle",
    problem:
      "Ensuring durable, cost-effective backups with disaster recovery capabilities while avoiding unnecessary replication of non-production data.",
    solution:
      "Implemented a dual-region S3 architecture with versioning and encryption, configured tag-based cross-region replication for production objects only, and applied lifecycle rules to transition aging data to Intelligent-Tiering and clean up noncurrent versions automatically.",
    // architectureImage: "/images/projects/aws-s3-crr-architecture.png",
    date: "03-12-2025",
    readTime: "6 min read",
    author: "Shloka Kamdar"

  },
  {
    id: 3,
    title: "AWS ALB Canary Deployment with Weighted Routing & Rollback",
    category: "Cloud / AWS / DevOps",
    description:
      "Designed and implemented a production-style canary deployment strategy on AWS using an Application Load Balancer with weighted routing. The solution gradually introduced a new application version by routing 10% of traffic to a canary target group while maintaining 90% traffic on the stable version, with full observability and an instant rollback mechanism.",
    shortDescription:
      "A canary deployment on AWS using ALB weighted routing, multiple target groups, access log validation, and a zero-downtime rollback strategy.",
    image: "/images/projects/alb-canary-architecture.png.png",
    technologies: [
      "AWS EC2",
      "Application Load Balancer",
      "Target Groups",
      "AWS VPC",
      "Nginx",
      "S3",
      "ALB Access Logs",
      "Canary Deployment"
    ],
    // link: "https://github.com/shlokamdar/aws-alb-canary-deployment",
    liveUrl: undefined,
    githubUrl: "https://github.com/shlokamdar/aws-alb-canary-deployment",
    // documentationUrl: "/docs/aws-alb-canary-deployment",
    problem:
      "Deploying a new application version without risking full production traffic, while ensuring visibility into traffic distribution and the ability to instantly roll back if issues occur.",
    solution:
      "Implemented a canary deployment using ALB weighted listener rules to route 90% of traffic to the stable version and 10% to the canary version. Enabled ALB access logs in S3 to validate traffic distribution and configured a rollback plan to shift 100% traffic back to the stable target group instantly.",
    // architectureImage: "/images/projects/alb-canary-architecture.png.png",
    date: "05-12-2025",
    readTime: "4 min read",
    author: "Shloka Kamdar"

  },
  {
    id: 4,
    title: "AWS RDS MySQL Read Replica with Monitoring and Alerts",
    category: "Cloud / AWS / Database",
    description: "Deployed a secure MySQL RDS database environment inside a private VPC with a same-region read replica, enabled slow query logging, configured CloudWatch alarms with SNS notifications, and validated connectivity via a private EC2 instance.",
    shortDescription: "Secure RDS MySQL setup with read replica, monitoring, alerting, and private EC2 connectivity validation.",
    image: "/images/projects/read-replica-monitoring.png",
    technologies: [
      "AWS RDS",
      "MySQL 8.0",
      "CloudWatch",
      "SNS",
      "EC2",
      "VPC",
      "Security Groups",
      "NAT Gateway"
    ],
    // link: "https://github.com/shlokamdar/aws-rds-mysql-read-replica-monitoring",
    liveUrl: null,
    githubUrl: "https://github.com/shlokamdar/read-replica-monitoring",
    // documentationUrl: "/docs/aws-rds-mysql-read-replica-monitoring",
    problem: "Need to deploy a secure MySQL database with read scalability, monitoring, alerting, and secure access in a private AWS environment.",
    solution: "Created a private-only AWS VPC, deployed a primary RDS MySQL instance with a read replica, configured slow query logging via a custom parameter group, set up CloudWatch alarms and SNS notifications, and verified connectivity and replication from a private EC2 instance.",
    // architectureImage: "/images/projects/aws-rds-read-replica-architecture.png",
    date: "04-12-2025",
    readTime: "5 min read",
    author: "Shloka Kamdar"
  },
  {
    "id": 5,
    "title": "ServeWare – Restaurant Management System",
    "category": "Full Stack / Web Development",
    "description": "ServeWare is a comprehensive restaurant management system built using Django that streamlines restaurant operations and enhances customer experience. It supports role-based access for restaurant admins and customers, QR code-based menu access, order management, table tracking, and email-based OTP authentication.",
    "shortDescription": "A Django-based restaurant management system with QR menu access, order tracking, role-based authentication, and admin dashboards.",
    "image": "/images/projects/serveware.png",
    "technologies": [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite",
      "Email OTP Authentication",
      "QR Code Generation"
    ],
    "link": "https://serveware.pythonanywhere.com/",
    "liveUrl": "https://serveware.pythonanywhere.com/",
    "githubUrl": "https://github.com/shlokamdar/serveware",
    "documentationUrl": "/docs/serveware",
    "problem": "Restaurants often struggle with manual order handling, table tracking, and fragmented customer interactions, leading to inefficiencies and poor customer experience.",
    "solution": "Built a centralized web-based platform that allows customers to place orders via QR codes and enables restaurant admins to manage menus, tables, and orders through a unified dashboard with secure authentication.",
    "architectureImage": "/images/projects/serveware-architecture.png",
    "date": "04-01-2025",
    "readTime": "9 min read",
    "author": "Shloka Kamdar"
  }

];

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === Number(id));
};

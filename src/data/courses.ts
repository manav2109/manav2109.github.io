export interface Course {
  id: number;
  title: string;
  description: string;
  accent: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration_hrs: number;
  price_inr: number;
  tags: string[];
  payment_link: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Cloud-Native QA Engineering',
    description: 'Design end-to-end test strategies for distributed systems running on AWS EKS — from unit to chaos.',
    accent: 'var(--pink)',
    level: 'Intermediate',
    duration_hrs: 8,
    price_inr: 4999,
    tags: ['AWS', 'EKS', 'Python', 'Pytest', 'K6'],
    payment_link: '',
  },
  {
    id: 2,
    title: 'Observability from Zero to Production',
    description: 'APM · metrics · distributed tracing · alerting — built on real ad-tech systems handling billions of events.',
    accent: 'var(--teal)',
    level: 'Intermediate',
    duration_hrs: 6,
    price_inr: 3999,
    tags: ['Datadog', 'Prometheus', 'Grafana', 'OpenTelemetry', 'PagerDuty'],
    payment_link: '',
  },
  {
    id: 3,
    title: 'Kubernetes for Engineers',
    description: 'EKS deployments · rolling updates · HPA · multi-region failover on live production traffic.',
    accent: 'var(--cobalt)',
    level: 'Advanced',
    duration_hrs: 10,
    price_inr: 5999,
    tags: ['Kubernetes', 'Helm', 'EKS', 'Terraform', 'ArgoCD'],
    payment_link: '',
  },
  {
    id: 4,
    title: 'CI/CD That Actually Works',
    description: 'GitHub Actions pipelines that gate production risk before it ships — not just green ticks.',
    accent: 'var(--gold)',
    level: 'Beginner',
    duration_hrs: 5,
    price_inr: 2999,
    tags: ['GitHub Actions', 'Docker', 'ArgoCD', 'OWASP', 'SonarQube'],
    payment_link: '',
  },
];

export const MARKETPLACE_ENABLED = import.meta.env.VITE_MARKETPLACE_ENABLED === 'true';

export const totalHours = courses.reduce((s, c) => s + c.duration_hrs, 0);

export interface MetricChip {
  value: number;
  suffix?: string;
  label: string;
}

export interface Project {
  logo: string;
  name: string;
  title: string;
  description: string;
  techStack: string[];
  metrics: MetricChip[];
  pull: string;
}

export interface SubRole {
  name: string;
  range: string;
  body: string;
  variant?: 'cobalt' | 'pink';
}

export interface CareerRow {
  range: string;
  location: string;
  roleTag: string;
  company: string;
  blurb: string;
  bullets: string[];
  subRoles?: SubRole[];
}

export interface StackCategory {
  title: string;
  chips: string[];
}

export interface ContactLink {
  lbl: string;
  val: string;
  href: string;
  icon: 'mail' | 'whatsapp' | 'github' | 'linkedin' | 'phone' | 'instagram' | 'resume';
}

export interface HeroStat {
  target: number;
  suffix?: string;
  label: string;
}

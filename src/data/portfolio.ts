import type {
  Project,
  CareerRow,
  StackCategory,
  ContactLink,
  HeroStat,
} from '../types';

export const heroStats: HeroStat[] = [
  { target: 5,   suffix: '+', label: 'Years Eng.' },
  { target: 4,                label: 'Countries' },
  { target: 12,  suffix: '+', label: 'Projects Shipped' },
  { target: 3,                label: 'Clouds (AWS·GCP·Azure)' },
  { target: 80,  suffix: '%', label: 'Report Time ↓ (Bosler)' },
  { target: 185, suffix: '+', label: 'Test Cases' },
];

export const marqueeTop: string[] = [
  'AVAILABLE FOR HIRE',
  'SDET-II @ AFFLE · YOUAPPI + JAMPP',
  '5+ YEARS · 4 COUNTRIES · 12+ PROJECTS',
  'BILLIONS OF AD REQUESTS / DAY',
  '10 MIN → 2 MIN · 80% REPORT TIME ↓',
  'AWS · GCP · AZURE · HEROKU · K8S',
  'TRAINED LLAMA 3B (UNSLOTH + OLLAMA)',
  'TERRAFORM · ANSIBLE · JENKINS · ARGOCD',
  'OBSERVABILITY BY DESIGN',
  '85% SYNTHETIC API COST ↓ · YAML + EKS',
  'AWS DEVICE FARM · REAL-DEVICE AD CREATIVE AUTOMATION',
  'OPEN TO REMOTE · OPEN TO RELOCATION',
];

export const marqueeBottom: string[] = [
  'MANAV RATHI · SOFTWARE ENGINEER · DELHI',
  'AVIATION · FASHION · ADTECH · DATA · BLOCKCHAIN',
  'GKE CERTIFIED · GCP DEVSECOPS · LINUX ADMIN',
  'PYTHON · JAVA · C# · JAVASCRIPT · SHELL',
  'EDITORIAL × HOLOGRAPHIC × BRUTALIST',
  '2 YEARS HANDS-ON CENTRIC8 PLM',
  '50% DEPLOY TIME ↓ AT AIRBUS · AZURE DEVOPS',
  'AI CLOUD OBSERVER · HUMAN-IN-THE-LOOP APPROVAL MODEL',
  'LOCUST · K6 · LOAD TESTING MEDIASMART · CTV.AI · YOUAPPI',
  'FILED FROM BAHADURGARH / WORLDWIDE',
];

export const career: CareerRow[] = [
  {
    range: 'APR 2025 — PRESENT',
    location: 'Gurgaon, India · Full-time',
    roleTag: 'SDET-II · Affle India',
    company: 'Affle 3i',
    blurb: 'Consumer-intelligence & mobile-advertising platform.',
    bullets: [
      'Driving the <strong>YouAppi observability initiative</strong> — Datadog APM rollout, YAML-driven synthetic monitoring on EKS, and real-device creative automation on AWS Device Farm; all results surfaced in Grafana via Prometheus.',
      'Spanning two product lines (<strong>YouAppi + Jampp</strong>) — refactoring test architectures, scaling coverage, running <strong>Locust</strong> + <strong>k6</strong> load campaigns across Mediasmart, CTV.AI and YouAppi BUs, and conducting Java + Python codebase reviews.',
      'Maintaining <strong>CI/CD infrastructure</strong> — Docker pipelines, Helm charts, EKS pod configs, Jenkins, Bitbucket Pipelines and GitHub Actions; authoring docs across Confluence, Drawio, Jira and Miro.',
    ],
    subRoles: [
      {
        name: '↳ YouAppi · Jan 2026 – Present',
        range: '',
        body: '<ul><li><strong>Datadog APM</strong> — distributed tracing, log correlation, service-map visibility; audited and reduced alert noise end-to-end.</li><li><strong>Synthetic Monitor</strong> — YAML-configured test cases; S3 hot-reload (no restart on config change); HTTP/TCP/SSL checks on EKS pods; AlertManager → Slack; Prometheus + Grafana. Replaced Datadog Synthetics — <strong>85% API cost cut</strong>.</li><li><strong>Creative Automation</strong> — FastAPI + Appium on AWS Device Farm public real devices; iOS via MacOS/Xcode direct-connect; bid-win confirmed via Elasticsearch <code>bid_response_id</code>; results in Grafana via Prometheus queue.</li><li><strong>AI Agents</strong> — cloud-environment observer with human-in-the-loop (MiTM) approval gate before execution; information-retrieval agent for team self-service.</li><li><strong>VictOps</strong> — on-call routing for high-severity incidents; maintained SLO coverage across risky deployments.</li><li><strong>Locust</strong> + <strong>k6</strong> load testing for Mediasmart, CTV.AI and YouAppi BUs.</li><li><strong>AI tooling</strong> — <strong>Claude</strong>, <strong>Cursor</strong> &amp; <strong>Kiro</strong> as daily pair-programmers for architecture and code generation; <strong>Copilot</strong> &amp; <strong>Codex</strong> for in-editor completion; <strong>ChatGPT</strong>, <strong>Gemini GEMS</strong> &amp; <strong>NotebookLM</strong> for knowledge synthesis and runbook deep-dives.</li></ul>',
        variant: 'cobalt',
      },
      {
        name: '↳ Jampp · Apr 2025 – Dec 2025',
        range: '',
        body: 'Campaign-management platform processing <strong>billions of ad requests daily</strong> — refactored test architecture, scaled coverage, integrated PyTest into CI/CD via <strong>GitHub Actions</strong>. Deep experience with high-throughput distributed systems and large-scale data ingestion.',
        variant: 'pink',
      },
    ],
  },
  {
    range: 'MAR 2024 — APR 2025',
    location: 'France · Remote contract',
    roleTag: 'Technical Expert · Bosler',
    company: 'Bosler',
    blurb: 'Big-data analysis platform.',
    bullets: [
      'Built <strong>big-data processing pipelines</strong> with Java, Python, Hadoop &amp; Spark — improving data-retrieval speed by <strong>30%</strong>.',
      'Optimised PostgreSQL queries — slashing report generation from <strong>10 minutes to under 2 minutes (80% reduction)</strong>.',
      'Led <strong>Linux server operations</strong> — automating system monitoring &amp; log analysis with Bash and the <strong>ELK Stack</strong>.',
      'Collaborated with cross-functional teams across time zones to design and implement scalable software solutions.',
    ],
  },
  {
    range: 'MAR 2022 — MAR 2024',
    location: 'Sweden · Remote contract',
    roleTag: 'Python & GCP Engineer · H&M',
    company: 'H&M Group',
    blurb: 'Global fashion & retail · supply-chain platform.',
    bullets: [
      'Led <strong>PLM Architecture setup</strong> using <strong>Centric8</strong> and <strong>RabbitMQ</strong> — integrating product-lifecycle systems across H&amp;M\'s supply chain.',
      'Designed <strong>Python-based automation</strong> to streamline CI/CD workflows — significantly cutting manual deployment effort.',
      'Managed <strong>proxy configurations &amp; API gateways</strong> — secure, efficient data flow across services.',
      'Built <strong>SQL-based analytics pipelines</strong> delivering real-time insights to key business stakeholders.',
      'Accumulated <strong>2 years of hands-on Centric8 expertise</strong> — API usage, component management, platform configuration.',
    ],
  },
  {
    range: 'FEB 2021 — FEB 2022',
    location: 'California, USA · Remote contract',
    roleTag: 'C# Software Engineer · SkyThread Airbus',
    company: 'Airbus · SkyThread',
    blurb: 'Aviation · enterprise blockchain.',
    bullets: [
      'Developed <strong>C#-based distributed applications</strong> for secure data sharing on <strong>Hyperledger Fabric</strong> blockchain.',
      'Designed <strong>Azure DevOps CI/CD pipelines</strong> — reducing deployment time by <strong>50%</strong>.',
      'Led unit testing &amp; code-review cycles using <strong>nUnit</strong> and <strong>SpecFlow</strong> — improving code quality and maintainability.',
      'Integrated blockchain <strong>smart contracts</strong> with existing enterprise systems — ensuring reliability and auditability.',
    ],
  },
];

export const techStack: StackCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    chips: ['GCP', 'AWS', 'Azure', 'Heroku', 'Kubernetes', 'OpenShift', 'Docker', 'Containerd'],
  },
  {
    title: 'DevOps & CI/CD',
    chips: ['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'Bitbucket Pipelines', 'Azure Pipelines', 'ArgoCD', 'Helm', 'Shell Scripting'],
  },
  {
    title: 'Languages',
    chips: ['Python', 'Java', 'C#', 'JavaScript', 'Shell Script'],
  },
  {
    title: 'Frameworks',
    chips: ['Spring Boot', 'FastAPI', 'Flask', 'React', 'Next.js', 'D3.js'],
  },
  {
    title: 'Databases',
    chips: ['PostgreSQL', 'MSSQL', 'Redis', 'Elasticsearch', 'Cassandra', 'Snowflake', 'BigQuery', 'AlloyDB'],
  },
  {
    title: 'Monitoring & Observability',
    chips: ['ELK Stack', 'Prometheus', 'Grafana', 'Splunk', 'Datadog', 'AlertManager', 'VictOps', 'Filebeat', 'Metricbeat', 'APM'],
  },
  {
    title: 'Testing',
    chips: ['PyTest', 'SpecFlow', 'jUnit', 'nUnit', 'Gherkin', 'Unittest', 'Appium', 'UIAutomator', 'Locust', 'k6', 'AWS Device Farm'],
  },
  {
    title: 'AI & LLM Tools',
    chips: ['Claude', 'Cursor', 'Kiro', 'CoPilot', 'Codex', 'ChatGPT', 'Gemini GEMS', 'NotebookLM', 'Deepseek', 'unSloth', 'Ollama', 'LLaMA', 'Prompt Engg.', 'Model Tuning'],
  },
  {
    title: 'Security & Identity',
    chips: ['OAuth2', 'SAML', 'RBAC', 'ABAC', 'SSO', 'MFA / 2FA', 'SSL/TLS'],
  },
  {
    title: 'Operating Systems',
    chips: ['RHEL', 'CentOS', 'Ubuntu', 'Rocky Linux'],
  },
  {
    title: 'Networking & Storage',
    chips: ['TCP/IP', 'DNS', 'NFS', 'S3', 'NAS', 'LVM', 'RAID'],
  },
  {
    title: 'Tools & Tradecraft',
    chips: ['Jira', 'Confluence', 'Git', 'Centric8', 'Configura CET', 'CM Lang', 'AutoCAD', 'Altova', 'Hyperledger Fabric', 'Buildah', 'GoHarbor'],
  },
];

export const projects: Project[] = [
  {
    logo: 'YA',
    name: 'YouAppi',
    title: 'SDET-II · Observability Initiative — Affle, India',
    description:
      '<strong>Datadog APM</strong> rollout with full alert-noise audit across the YouAppi mobile-DSP stack. <strong>VictOps</strong> on-call routing for high-severity incidents. <strong>Locust</strong> + <strong>k6</strong> load &amp; performance campaigns for Mediasmart, CTV.AI and YouAppi BUs. AI-augmented daily workflow — <strong>Claude</strong>, <strong>Cursor</strong>, <strong>Kiro</strong>, <strong>Copilot</strong>, <strong>Codex</strong>, <strong>ChatGPT</strong>, <strong>Gemini GEMS</strong> and <strong>NotebookLM</strong> embedded across research, development and debugging.',
    techStack: ['Python', 'Datadog', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana', 'VictOps', 'Locust', 'k6', 'Bitbucket CI', 'Claude', 'Cursor', 'Kiro', 'Copilot', 'Codex', 'ChatGPT', 'Gemini GEMS', 'NotebookLM'],
    metrics: [
      { value: 85,  suffix: '%', label: 'Synthetic API Cost ↓' },
      { value: 2,                label: 'Tools Built on EKS' },
      { value: 3,                label: 'BUs Load Tested' },
      { value: 8,                label: 'AI Tools in Loop' },
    ],
    pull: 'Observability first. Zero guessing. Eight AI tools embedded in the loop.',
  },
  {
    logo: 'SM',
    name: 'SynMon',
    title: 'Synthetic Monitor Agent · YouAppi — AWS EKS',
    description:
      'YAML-configured test cases with S3 hot-reload — config changes take effect without a pod restart. HTTP/TCP/SSL health checks run continuously on EKS pods; conditions defined in YAML trigger <strong>AlertManager</strong> fan-out to Slack channels; <strong>Prometheus</strong> metrics flow into <strong>Grafana</strong> dashboards for full observability. Built to replace Datadog Synthetic Monitors entirely — cutting Synthetic API spend by <strong>85%</strong>. Python service, Helm-deployed on EKS, zero-downtime config changes.',
    techStack: ['Python', 'AWS EKS', 'Helm', 'S3', 'Prometheus', 'Grafana', 'AlertManager', 'Datadog', 'YAML', 'Slack', 'Bitbucket CI', 'Claude', 'Cursor', 'Kiro'],
    metrics: [
      { value: 85, suffix: '%', label: 'Synthetic API Cost ↓' },
      { value: 3,               label: 'Check Types (HTTP·TCP·SSL)' },
      { value: 0,               label: 'Restart on Config Change' },
    ],
    pull: 'YAML in S3. Checks on EKS. Alerts to Slack. No Datadog invoice.',
  },
  {
    logo: 'CA',
    name: 'CreativeQ',
    title: 'SSP Creative Automation · AWS Device Farm + Appium',
    description:
      'Python <strong>FastAPI</strong> orchestrator driving <strong>Appium</strong> sessions on AWS Device Farm public real devices — across creative types and sizes for SSP demo apps. iOS handled via <strong>MacOS/Xcode</strong> direct-connect because Device Farm doesn\'t allow session login for app installation. Ad-win verified end-to-end via <strong>Elasticsearch</strong> <code>bid_response_id</code> object. All run results pushed to <strong>Grafana</strong> via Prometheus queue — full creative-run visibility across all SSPs.',
    techStack: ['Python', 'FastAPI', 'Appium', 'AWS Device Farm', 'Elasticsearch', 'Prometheus', 'Grafana', 'Xcode', 'iOS', 'MacOS', 'Bitbucket CI'],
    metrics: [
      { value: 185, suffix: '+', label: 'Test Cases' },
      { value: 5,                label: 'SSPs Covered' },
      { value: 2,                label: 'Platforms (Android + iOS)' },
    ],
    pull: 'Real devices. Real ad calls. bid_response_id in Elasticsearch as proof.',
  },
  {
    logo: 'JP',
    name: 'Jampp',
    title: 'SDET-II · Campaign Engine — Affle, India',
    description:
      'Worked on a campaign-management platform processing billions of ad requests daily — improving test architecture, scalability, and code coverage. Refactored and optimised the test codebase using Python and PyTest; integrated automated tests into CI/CD pipelines via GitHub Actions. Deep, hands-on experience with distributed high-throughput systems and large-scale data ingestion patterns.',
    techStack: ['Python', 'PyTest', 'GitHub Actions', 'Cassandra', 'Kafka', 'Redis'],
    metrics: [
      { value: 1, suffix: 'B+', label: 'Ad Reqs / Day' },
      { value: 9,               label: 'Months In-role' },
    ],
    pull: 'When your test code has to keep up with billions of impressions, every assertion is a load test.',
  },
  {
    logo: 'BS',
    name: 'Bosler',
    title: 'Technical Expert · Big-Data Pipeline — France',
    description:
      'Built big-data processing pipelines in Java, Python, Hadoop and Spark — improving data-retrieval speed by 30%. Optimised PostgreSQL queries, slashing report generation from 10 min to under 2 min (80% reduction). Led Linux server operations, automating system monitoring and log analysis with Bash and the ELK Stack. Collaborated cross-functionally across time zones to design and implement scalable solutions.',
    techStack: ['Java', 'Python', 'Hadoop', 'Spark', 'PostgreSQL', 'Linux', 'Bash', 'ELK'],
    metrics: [
      { value: 80, suffix: '%', label: 'Report Time ↓' },
      { value: 30, suffix: '%', label: 'Data Retrieval ↑' },
      { value: 2,               label: 'Time Zones' },
    ],
    pull: 'Ten minutes became two. The PMs noticed.',
  },
  {
    logo: 'HM',
    name: 'H&M',
    title: 'Python & GCP Engineer · PLM Architecture — Sweden',
    description:
      'Led PLM Architecture setup using Centric8 and RabbitMQ — integrating product-lifecycle systems across H&amp;M\'s supply chain. Designed Python-based automation to streamline CI/CD workflows. Managed proxy configurations and API gateways for secure, efficient data flow. Built SQL-based analytics pipelines delivering real-time insights to key business stakeholders. Two years of hands-on Centric8 expertise — API usage, component management, and platform configuration.',
    techStack: ['Python', 'GCP', 'Centric8', 'RabbitMQ', 'SQL', 'BigQuery', 'AlloyDB'],
    metrics: [
      { value: 2, suffix: ' yr', label: 'Centric8 Hands-on' },
      { value: 1,                label: 'PLM Architecture' },
    ],
    pull: 'PLM at retail scale — API-by-API, component-by-component, country-by-country.',
  },
  {
    logo: 'AB',
    name: 'Airbus',
    title: 'C# Engineer · Hyperledger Fabric — SkyThread, California',
    description:
      'Developed and maintained C#-based distributed applications for secure data sharing on Hyperledger Fabric blockchain. Designed Azure DevOps CI/CD pipelines that cut deployment time by 50%. Led unit testing &amp; code-review cycles using nUnit and SpecFlow. Integrated blockchain smart contracts with existing enterprise systems — ensuring reliability and auditability for aerospace data.',
    techStack: ['C#', '.NET', 'Hyperledger Fabric', 'Azure DevOps', 'nUnit', 'SpecFlow', 'Git'],
    metrics: [
      { value: 50, suffix: '%', label: 'Deploy Time ↓' },
      { value: 12,              label: 'Months' },
    ],
    pull: 'Smart contracts as system-of-record. Audit trail you can\'t argue with.',
  },
  {
    logo: 'LL',
    name: 'Esentri',
    title: 'LLM Email Categorisation · LLaMA 3B — Independent',
    description:
      'Trained a LLaMA 3B model with unSloth and Ollama in Python to auto-categorise and route emails by sentiment and subject. Populated JSON templates that automated routing to the right department — eliminating manual triage and improving cross-organisation client interaction.',
    techStack: ['Python', 'LLaMA 3B', 'unSloth', 'Ollama', 'Prompt Engg.', 'Fine-tuning'],
    metrics: [
      { value: 3, suffix: 'B', label: 'Params Tuned' },
      { value: 1,              label: 'Manual Step ↓ → 0' },
    ],
    pull: 'Email triage as an LLM problem. Open-weights stack, end-to-end.',
  },
  {
    logo: 'TR',
    name: 'TRS',
    title: 'OCR Document Intelligence · FastAPI Service',
    description:
      'Built an OCR service in Python using pytesseract, scikit-learn, NumPy, pandas and FastAPI to extract text from images and PDFs. The system processes documents and outputs actionable defect &amp; complaint insights, giving teams the visibility to address issues efficiently.',
    techStack: ['Python', 'FastAPI', 'pytesseract', 'scikit-learn', 'pandas', 'NumPy'],
    metrics: [
      { value: 2,                label: 'Input Formats' },
      { value: 100, suffix: '+', label: 'Docs / Run' },
    ],
    pull: 'OCR as a service — defect insights surfaced from images and PDFs nobody wanted to read.',
  },
  {
    logo: 'CL',
    name: 'OmniCLI',
    title: 'Multi-Cloud CLI · GCP · AWS · Azure · Heroku · K8s',
    description:
      'Python-based command-line interface integrating Heroku, GCP, Azure, AWS and on-premise services — Kubernetes, Container Registries, Cloud Computing, Storages, Databases, and CI/CD. The tool automates cloud-resource management, letting organisations interact with multiple platforms from a single interface.',
    techStack: ['Python', 'GCP SDK', 'AWS SDK', 'Azure SDK', 'Heroku API', 'Kubernetes API'],
    metrics: [
      { value: 5, suffix: '+', label: 'Clouds Wrapped' },
      { value: 1,              label: 'CLI to Rule Them' },
    ],
    pull: 'One CLI, five clouds, zero context switches. Internal-tooling joy.',
  },
  {
    logo: 'GK',
    name: 'GKE-IaC',
    title: 'End-to-End GKE Infrastructure · Terraform on GCP',
    description:
      'Designed an end-to-end GKE infrastructure: automated deployment, configuration and management of a Google Kubernetes Engine cluster on GCP. Highly secure, scalable clusters with preemptible node pools (e2-standard-8, 50 GB disks). Service accounts &amp; IAM roles for secure access. Modularised Terraform to optimise the deploy process, resolve SSD storage limitations, and ensure quota compliance — eliminating manual intervention and ensuring consistency.',
    techStack: ['Terraform', 'GCP', 'GKE', 'IAM', 'Service Accounts', 'Preemptible Node Pools'],
    metrics: [
      { value: 100, suffix: '%', label: 'Automated' },
      { value: 0,                label: 'Manual Steps' },
    ],
    pull: 'Click-ops is a smell. The cluster boots from a `terraform apply`.',
  },
  {
    logo: 'EK',
    name: 'EKS-IaC',
    title: 'End-to-End AWS EKS Infrastructure · Terraform',
    description:
      'Designed and implemented an end-to-end AWS infrastructure with Terraform: Amazon EKS clusters with EC2 instances and Elastic Load Balancers, IAM roles, security groups, and VPC configurations. Modularised resource provisioning, optimised scalability, handled limitations cleanly. Real-time metrics &amp; alerts via CloudWatch — operational efficiency by default.',
    techStack: ['Terraform', 'AWS', 'EKS', 'EC2', 'VPC', 'IAM', 'ELB', 'CloudWatch'],
    metrics: [
      { value: 7, suffix: '+', label: 'AWS Services' },
      { value: 1,              label: 'Module-First Repo' },
    ],
    pull: 'Network, identity, compute, and observability — woven into one Terraform graph.',
  },
  {
    logo: 'EL',
    name: 'Fleet-ELK',
    title: 'Fleet-Managed ELK + SSL/TLS · Multi-Environment',
    description:
      'Architected a multi-country, fleet-managed ELK stack — Filebeat, Metricbeat, Packetbeat, Heartbeat, Elastic-Agent, and Fleet — for centralised logging, system metrics, APM and security event monitoring. Real-time insight across distributed Kubernetes clusters. SSL/TLS automated via Let\'s Encrypt &amp; Certbot — auto-renewing certificates for every service and beat.',
    techStack: ['ELK', 'Filebeat', 'Metricbeat', 'APM', 'Fleet', 'Let\'s Encrypt', 'Certbot', 'Kubernetes'],
    metrics: [
      { value: 3, suffix: '+', label: 'Countries' },
      { value: 1,              label: 'Cert Lifecycle Auto' },
    ],
    pull: 'A monitoring stack that monitors itself, signs itself, and rotates its own keys.',
  },
  {
    logo: 'SP',
    name: 'Snap',
    title: 'Platform Version Management · Java Spring Boot',
    description:
      'Java Spring Boot service to build Docker images using buildah, optimising performance during builds. Integrates with a self-hosted GoHarbor registry; manages platform licences and subscriptions. End-to-end setup with Terraform — deployed across Heroku, GCP, Azure, AWS, and on-premise. Plus on-prem Kubernetes work with Calico CNI &amp; MetalLB; an on-prem NAS with RAID for centralised backups; and a private GoHarbor registry wired into CI/CD.',
    techStack: ['Java', 'Spring Boot', 'buildah', 'GoHarbor', 'Terraform', 'Kubernetes', 'Calico', 'MetalLB', 'Helm', 'NAS'],
    metrics: [
      { value: 4, suffix: '+', label: 'Deploy Targets' },
      { value: 1,              label: 'Self-Hosted Registry' },
    ],
    pull: 'On-prem isn\'t legacy — it\'s a deployment target you have to earn.',
  },
];

export const certifications: string[] = [
  'Google Kubernetes Engine (GKE)',
  'Google Cloud Platform (GCP)',
  'GCP DevSecOps',
  'GCP Networking',
  'Linux Administration',
  'Kubernetes',
  'Python (Advanced)',
  'Java (Advanced)',
  'ELK Stack — 4 mo. hands-on',
  'Centric8 PLM — 2 yr expert',
  'CM Language — Configura CET',
];

export const industries: string[] = [
  'Aviation',
  'Fashion & Retail',
  'AdTech & Mobile Advertising',
  'Data Analytics',
  'Blockchain',
];

export const interests: { name: string; aside?: string }[] = [
  { name: 'Snooker & Billiards', aside: '· positional-level tournaments' },
  { name: 'Hiking' },
  { name: 'Running' },
  { name: 'Story-driven games' },
  { name: 'Solo travelling' },
];

export const languages: { name: string; level: string }[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi',   level: 'Fluent' },
];

export const contact: ContactLink[] = [
  { lbl: 'Email',     val: 'manavdex21@gmail.com',   href: 'mailto:manavdex21@gmail.com',                  icon: 'mail' },
  { lbl: 'WhatsApp',  val: '+91 7027801416',          href: 'https://wa.me/917027801416',                   icon: 'whatsapp' },
  { lbl: 'GitHub',    val: 'manav2109',              href: 'https://github.com/manav2109',                 icon: 'github' },
  { lbl: 'LinkedIn',  val: 'manavdex21',             href: 'https://www.linkedin.com/in/manavdex21/',      icon: 'linkedin' },
  { lbl: 'Instagram', val: '@mxnxv_rxthx',           href: 'https://www.instagram.com/mxnxv_rxthx',        icon: 'instagram' },
  { lbl: 'Résumé',    val: 'Download PDF ↓',          href: '/assets/ManavRathi_Resume.pdf',                icon: 'resume' },
];

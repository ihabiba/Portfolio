
// ============================================
// PORTFOLIO CONTENT DATA
// ============================================

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  demoUrl2?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Internship {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  honors?: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ============================================
// NAVIGATION
// ============================================
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

// ============================================
// HERO SECTION
// ============================================
export const heroData = {
  name: 'Habiba Hassan',
  title: 'AI & Data Engineer | Full-Stack Developer',
  roles: [
    'Machine Vision Engineer',
    'AI & Data Engineer',
    'Full-Stack Developer',
    'Deep Learning Practitioner',
  ],
  location: 'Malaysia',
  pitch: 'Building end-to-end intelligent systems — from industrial computer vision and edge AI deployment to full-stack AI platforms and data-driven applications.',
  profileImage: '/Portfolio/profile.jfif',
  resumeUrl: '/Portfolio/Habiba_Hassan_CV.pdf',
  email: 'itshabibahassan@gmail.com',
  github: 'https://github.com/ihabiba',
  linkedin: 'https://linkedin.com/in/ihabiba',
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  paragraphs: [
    "I am a final-year Computer Science (Data Science) student currently working across <strong>two concurrent engineering internships</strong> — developing industrial computer vision systems for automated defect detection at IRnow Sdn Bhd, and building AI-powered platforms and RAG-based systems at NextGen Spark Sdn Bhd.",
    "My work spans the full AI stack: from <strong>model training, edge AI deployment, and computer vision pipelines</strong> to full-stack development, NLP analytics, LLM integration, and production-ready system deployment. I approach problems end-to-end — understanding the operational context first, then engineering solutions that are technically sound and practically valuable.",
    "I am driven by <strong>applied AI that moves beyond notebooks</strong> — systems that run in factories, products that real users interact with, and models that explain their own decisions.",
  ],
};

// ============================================
// INTERNSHIPS (Professional Experience)
// ============================================
export const internships: Internship[] = [
  {
    title: 'Assistant Machine Vision Engineer',
    company: 'IRnow Sdn Bhd',
    period: 'April 2026 – Present',
    location: 'Selangor, Malaysia · On-site',
    highlights: [
      'Developing industrial computer vision systems for automated defect detection across manufacturing clients',
      'Handling hardware setup, model training, edge AI deployment on NVIDIA Jetson, and technical reporting',
    ],
    tags: ['Computer Vision', 'Edge AI', 'PyTorch', 'OpenCV', 'NVIDIA Jetson', 'Object Detection'],
  },
  {
    title: 'AI Analytics & Development Intern',
    company: 'NextGen Spark Sdn Bhd',
    period: 'April 2026 – Present',
    location: 'Kuala Lumpur, Malaysia · Hybrid',
    highlights: [
      'Building AI-powered platforms and analytics dashboards with full-stack development',
      'Developing RAG-based chat systems, data pipeline integration, and end-to-end system deployment',
    ],
    tags: ['RAG', 'LLM', 'FastAPI', 'React', 'Python', 'Full-Stack', 'Data Pipelines'],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    title: 'Golden Knot — Multi-Vendor E-Commerce Marketplace',
    description:
      'A full-stack marketplace connecting Afghan women weavers with global buyers, featuring multi-role access, product approval workflows, and end-to-end commerce operations.',
    highlights: [
      'Built multi-role system (customer, seller, admin) with product approval workflow, seller onboarding, and payout management',
      'Implemented shopping cart, checkout, order tracking, wishlists, promo codes, and customer reviews',
      'Deployed with Django REST Framework + React 19 + TypeScript, PostgreSQL on Supabase, images via Cloudinary',
    ],
    techStack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'Supabase', 'Cloudinary', 'REST API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/ihabiba/golden-knot',
  },
  {
    title: 'AIU Smart Feedback System (Applied NLP + LLM Integration)',
    description:
      'An AI-powered full-stack academic feedback platform that transforms large-scale qualitative feedback into structured, actionable insights.',
    highlights: [
      'Designed and implemented a Django + React + PostgreSQL system following full software engineering lifecycle principles',
      'Integrated NLP pipelines and LLM APIs for sentiment analysis, topic extraction, summarization, and content moderation',
      'Built role-based dashboards for students, lecturers, deans, and administrators',
    ],
    techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'NLP', 'Hugging Face Transformers', 'LLM APIs'],
    repoUrl: '',
  },
  {
    title: 'Writer Identification using Deep Learning (CNN from Scratch)',
    description:
      'A geometry-preserving deep learning system for offline handwritten writer identification trained entirely from scratch under strict constraints.',
    highlights: [
      'Designed a patch-based CNN architecture (5 convolutional blocks) trained without pretrained models',
      'Engineered geometry-preserving preprocessing pipeline using OpenCV (Otsu binarization, projection-based line detection)',
      'Achieved 87.14% Top-1 accuracy and 0.99 Macro AUC despite extreme data scarcity (one page per writer)',
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'scikit-learn'],
    repoUrl: 'https://github.com/ihabiba/writer-identification-deep-learning',
  },
  {
    title: 'Breast Cancer Diagnosis with Explainable AI (XAI)',
    description:
      'An interpretable ML classification system combining predictive accuracy with transparent decision explanations.',
    highlights: [
      'Trained a Random Forest classifier achieving 99%+ accuracy on the Wisconsin dataset',
      'Integrated SHAP and LIME for instance-level model interpretability',
      'Deployed an interactive Streamlit application; contributed to a research paper currently under journal review',
    ],
    techStack: ['Python', 'Scikit-learn', 'SHAP', 'LIME', 'Streamlit'],
    repoUrl: 'https://github.com/ihabiba/breast-cancer-xai',
    demoUrl: 'https://breast-cancer-xai-32lzdet2wbbtthdayahi6t.streamlit.app/',
  },
  {
    title: 'Customer Analytics Suite (End-to-End ML System)',
    description:
      'A business-oriented analytics system integrating churn prediction and customer segmentation with deployable dashboards.',
    highlights: [
      'Built supervised churn prediction models with full preprocessing and evaluation pipelines',
      'Performed PCA-based dimensionality reduction and K-Means segmentation analysis',
      'Deployed two interactive Streamlit dashboards for business-facing insights',
    ],
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'SHAP', 'Matplotlib', 'Seaborn', 'Streamlit'],
    repoUrl: 'https://github.com/ihabiba/ML-customer-analysis',
    demoUrl: 'https://ml-customer-analysis-uadd9gemwynm44izglfeax.streamlit.app/',
    demoUrl2: 'https://ml-customer-analysis-abrzs4mxobfcc8cccz9orb.streamlit.app/',
  },
  {
    title: 'Data Mining for Personalized Online Learning',
    description:
      'A multi-method data mining system analyzing behavioral patterns, recommendations, and predictive signals in online learning environments.',
    highlights: [
      'Implemented Market Basket Analysis (Apriori) to extract association rules',
      'Built content-based and collaborative filtering recommendation engines',
      'Applied anomaly detection and time-series forecasting for performance trend analysis',
    ],
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'MLxtend', 'Statsmodels'],
    repoUrl: 'https://github.com/ihabiba/applied-data-mining-systems',
  },
];


// ============================================
// SKILLS
// ============================================
export const skills: Skill[] = [
  {
    category: 'AI & Machine Learning',
    items: [
      'Computer Vision (OpenCV, Object Detection, Instance Segmentation)',
      'Deep Learning & Transfer Learning (PyTorch, TensorFlow, Keras)',
      'NLP & Large Language Models (LLM Integration)',
      'RAG (Retrieval-Augmented Generation)',
      'Edge AI (NVIDIA Jetson)',
      'Machine Learning (Scikit-learn)',
      'Explainable AI (SHAP, LIME)',
      'Feature Engineering & Model Evaluation',
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    items: [
      'Pandas, NumPy, R',
      'EDA & Feature Engineering',
      'Data Visualization (Matplotlib, Seaborn, Tableau)',
      'SQL Querying & Optimization',
      'Database Normalization & Relational Design',
      'ETL Concepts & Structured Data Modeling',
    ],
  },
  {
    category: 'Backend & API Development',
    items: [
      'Django & Django REST Framework',
      'Flask & FastAPI',
      'RESTful API Design',
      'Authentication & Authorization',
      'PostgreSQL / MySQL Integration',
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      'React (JavaScript / TypeScript)',
      'HTML5, CSS3, Tailwind CSS',
      'Bootstrap',
      'Streamlit',
    ],
  },
  {
    category: 'Databases & Cloud',
    items: [
      'PostgreSQL, MySQL, SQLite',
      'Supabase',
      'Google Cloud Platform (GCP)',
      'AWS (ML Foundations, NLP, Generative AI)',
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      'Git & GitHub',
      'Docker',
      'GitHub Actions (CI/CD)',
      'Roboflow',
      'NVIDIA Jetson',
      'Jupyter Notebook / Google Colab',
      'Postman / Thunder Client',
      'Agile / SDLC',
    ],
  },
  {
    category: 'IoT & Embedded Systems',
    items: [
      'Arduino, ESP32',
      'MQTT Protocol',
      'HTTP Integration',
      'Wokwi Simulation',
      'Cloud Integration & Dashboard Development',
    ],
  },
];


// ============================================
// LEADERSHIP & EXTRACURRICULARS
// ============================================
export const experiences: Experience[] = [
  {
    title: 'Vice President',
    organization: 'Somali Students Community, AIU',
    period: 'May 2025 – Present',
    highlights: [
      'Co-led community operations and organized major cultural and academic events to support Somali students and enhance campus engagement',
    ],
  },
  {
    title: 'Head of Education Department',
    organization: 'AFSA Association, AIU',
    period: 'Jan 2025 – Present',
    highlights: [
      'Designed and coordinated academic initiatives including workshops, debates, and IELTS programs improving learning outcomes for African students',
    ],
  },
  {
    title: 'Peer Counselor - Academic Exco',
    organization: 'PEERS Club, AIU',
    period: 'May 2025 – Present',
    highlights: [
      'Supported student well-being through peer counseling and delivered campus activities aimed at improving mental health and student life experience',
    ],
  },
  {
    title: 'Frontend Development Intern',
    organization: 'CodeAlpha',
    period: 'Dec 2024 – Jan 2025',
    highlights: [
      'Built four frontend applications (gallery, music player, calculator, portfolio) using HTML, CSS, and JavaScript while completing all tasks ahead of schedule',
    ],
  },
  {
    title: 'English Language Support Facilitator',
    organization: 'Albukhary International University',
    period: 'Oct 2023 – Nov 2023',
    highlights: [
      'Facilitated group activities and learning sessions for pre-university students to strengthen English readiness for their first academic semester',
    ],
  },
];


// ============================================
// EDUCATION
// ============================================
export const education: Education = {
  institution: 'Albukhary International University (AIU)',
  degree: 'Bachelor of Computer Science (Hons.) - Specialization in Data Science',
  period: '2023 – 2026 (Expected)',
  cgpa: '3.83 / 4.00',
  honors: [
    "Dean's List Recipient (Every semester to date)",
    'Relevant Coursework: Software Engineering, Data Structures & Algorithms, Object Oriented Programming, Database Systems, Cloud Computing, Machine Learning, Deep Learning, NLP, Data Mining and Analytics, Artificial Intelligence, Probability & Statistics, Discrete Mathematics, Internet of Things (IoT)'
  ],
};


// ============================================
// CERTIFICATES
// ============================================
export const certificates: Certificate[] = [
  {
    title: 'AWS Academy Graduate – Machine Learning for Natural Language Processing',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    url: 'https://www.credly.com/badges/f12b8758-383a-4ee1-bb6e-0e8c48238b4b/print',
    skills: ['Natural Language Processing', 'Machine Learning', 'AWS Cloud', 'ML Solution Design']
  },
  {
    title: 'AWS Academy Graduate – Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    url: 'https://www.credly.com/badges/17d1d23a-52fe-4892-ad98-684fd004b36b/print',
    skills: ['Machine Learning Foundations', 'Artificial Intelligence', 'AWS Cloud Computing', 'ML Concepts']
  },
  {
    title: 'AWS Academy: Generative AI Foundations',
    issuer: 'AWS Academy',
    year: '2025',
    url: 'https://www.credly.com/badges/f1a56a83-9af5-4265-ab90-d0391c0d0b8e',
    skills: ['Generative AI', 'AWS Cloud', 'Prompt Engineering']
  },
  {
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google',
    year: '2025',
    url: 'https://www.credly.com/badges/4de6f2e5-b579-446b-834d-a0af122192cf',
    skills: ['Cloud Computing', 'GCP', 'Network Security']
  },
  {
    title: 'Python Pro Bootcamp: 100 Days of Code',
    issuer: 'Udemy',
    year: '2025',
    url: 'https://www.udemy.com/certificate/UC-72ed6f02-8f75-47ae-9fdd-bee5858bb860/',
    skills: ['Python', 'OOP', 'Flask', 'Pandas']
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    year: '2025',
    url: 'https://www.linkedin.com/learning/certificates/9207ff1689bdf43e521659375846b6a1322f41779d41893247f3a1119d249548',
    skills: ['Data Analysis', 'Visualization', 'Power BI']
  },
  {
    title: 'Django REST Bootcamp',
    issuer: 'AIU School of Computing',
    year: '2025',
    url: '/Portfolio/certificates/Django%20REST%20Bootcamp%20CERTIFICATES(Signed)-18.pdf',
    skills: ['Django', 'REST APIs', 'Backend Dev']
  },
  {
    title: 'Applied Data Science with Python',
    issuer: 'Simplilearn',
    year: '2025',
    url: 'https://simpli-web.app.link/e/4CLZs7kcPSb',
    skills: ['Data Science', 'Statistics', 'Matplotlib']
  },
];


// ============================================
// LANGUAGES
// ============================================
export interface Language {
  name: string;
  proficiency: string;
}

export const languages: Language[] = [
  { name: 'Arabic', proficiency: 'Native' },
  { name: 'Somali', proficiency: 'Native' },
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Turkish', proficiency: 'Advanced' },
];


// ============================================
// CONTACT
// ============================================
export const contactData = {
  email: 'itshabibahassan@gmail.com',
  phone: '+601156600820',
  linkedin: 'https://linkedin.com/in/ihabiba',
  github: 'https://github.com/ihabiba',
};


// ============================================
// FOOTER
// ============================================
export const footerData = {
  copyright: `© ${new Date().getFullYear()} Habiba Hassan. All rights reserved.`,
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/ihabiba' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihabiba' },
    { platform: 'Email', url: 'mailto:itshabibahassan@gmail.com' },
  ],
};

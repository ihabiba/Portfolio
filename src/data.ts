
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
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url: string;
  skills: string[]; // Added this for the chip design
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
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
  location: 'Malaysia',
  pitch: 'Building end-to-end intelligent systems — from structured data pipelines to production-ready ML applications.',
  profileImage: '/Portfolio/profile.jfif',
  // FIXED: Use relative path from public folder
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
    "I am a final-year Computer Science (Data Science) student focused on building <strong>applied AI and data-driven systems that solve real operational problems</strong>. My work extends beyond model training — I design complete pipelines, from structured data modeling and preprocessing to model evaluation, deployment, and user-facing applications.",
    "I have worked across <strong>machine learning, deep learning, NLP analytics, and explainable AI</strong>, with strong attention to data integrity, feature engineering, and reproducibility. I approach problems systematically — understanding the business context first, then engineering solutions that are technically sound and practically valuable.",
    "My interest lies in <strong>AI-enabled systems, data infrastructure, and scalable backend architectures</strong> that bridge analytics and real-world applications."
  ],
};


// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    title: 'AIU Smart Feedback System (Applied NLP + LLM Integration)',
    description:
      'An AI-powered full-stack academic feedback platform that transforms large-scale qualitative feedback into structured, actionable insights.',
    highlights: [
      'Designed and implemented a Django + React + PostgreSQL system following full software engineering lifecycle principles (requirements, modular design, iterative development)',
      'Integrated NLP pipelines and LLM APIs (Hugging Face Transformers + external LLM APIs) for sentiment analysis, topic extraction, summarization, and moderation of inappropriate content',
      'Built role-based dashboards for students, lecturers, deans, and administrators to support data-driven academic decisions',
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
      'Engineered geometry-preserving preprocessing pipeline using OpenCV (Otsu binarization, projection-based line detection, fixed patch extraction without resizing)',
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
      'Deployed an interactive Streamlit application for prediction and visual explanation',
      'Contributed experimental results to a research paper on Explainable AI in medical diagnostics (currently under review)',
    ],
    techStack: ['Python', 'Scikit-learn', 'SHAP', 'LIME', 'Streamlit'],
    repoUrl: 'https://github.com/ihabiba/breast-cancer-xai',
    demoUrl:
      'https://breast-cancer-xai-32lzdet2wbbtthdayahi6t.streamlit.app/',
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
    techStack: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'SHAP',
      'Matplotlib',
      'Seaborn',
      'Streamlit',
    ],
    repoUrl: 'https://github.com/ihabiba/ML-customer-analysis',
    demoUrl: 'https://ml-customer-analysis-uadd9gemwynm44izglfeax.streamlit.app/',
    demoUrl2: 'https://ml-customer-analysis-abrzs4mxobfcc8cccz9orb.streamlit.app/',
  },
  {
    title: 'HR & Recruitment Management System (Full Stack Application)',
    description:
      'A production-style full-stack web application replacing manual recruitment and payroll workflows.',
    highlights: [
      'Designed recruitment pipeline (job posting, applicant tracking, role-based access)',
      'Implemented payroll processing with automated PDF generation (ReportLab)',
      'Deployed production instance on Render',
    ],
    techStack: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'PostgreSQL',
      'SQLite',
      'Bootstrap',
      'Render',
    ],
    repoUrl: 'https://github.com/ihabiba/HR-APP',
    demoUrl: 'https://hr-app-2.onrender.com/',
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
    techStack: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'TensorFlow',
      'MLxtend',
      'Statsmodels',
    ],
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
      'Python (Scikit-learn, TensorFlow, PyTorch)',
      'Supervised & Unsupervised Learning',
      'Deep Learning (Neural Networks, Model Tuning)',
      'Natural Language Processing (Text Preprocessing, Sentiment Analysis, Topic Modeling, Summarization, Speech-to-Text)',
      'Large Language Models (LLM API Integration)',
      'Explainable AI (SHAP, LIME)',
      'Feature Engineering & Model Evaluation',
      'Model Deployment (Streamlit, Flask)',
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    items: [
      'Pandas, NumPy',
      'Data Cleaning & Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Data Visualization (Matplotlib, Seaborn, Tableau)',
      'SQL Querying & Optimization',
      'Database Normalization & Relational Design',
      'Joins, Indexing, Entity Relationships',
      'ETL Concepts & Structured Data Modeling',
    ],
  },
  {
    category: 'Backend & API Development',
    items: [
      'Django',
      'Flask',
      'RESTful API Design',
      'Authentication & Authorization',
      'Session Management',
      'ORM (SQLAlchemy)',
      'PostgreSQL / MySQL Integration',
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    category: 'Databases',
    items: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Database Schema Design',
      'Normalization & Constraints',
    ],
  },
  {
    category: 'Tools, Cloud & Infrastructure',
    items: [
      'Git & GitHub',
      'Jupyter Notebook',
      'Streamlit',
      'Render (Deployment)',
      'Postman / Thunder Client (API Testing)',
      'Google Cloud Platform (GCP)',
      'AWS (ML Foundations, NLP)',
      'VS Code',
      'Agile / SDLC Concepts',
    ],
  },
  {
    category: 'IoT & Embedded Systems',
    items: [
      'Arduino',
      'ESP32',
      'MQTT Protocol',
      'HTTP Integration',
      'Wokwi Simulation',
      'Cloud Integration & Dashboard Development',
    ],
  },
];


// ============================================
// EXPERIENCE / VOLUNTEERING
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

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  honors?: string[];
}

export const education: Education = {
  institution: 'Albukhary International University (AIU)',
  degree: 'Bachelor of Computer Science (Hons.) - Specialization in Data Science',
  period: '2023 – 2026 (Expected)',
  cgpa: '3.83 / 4.00',
  honors: [
    'Dean\'s List Recipient (Every semester to date)',
    'Relevant Coursework: Software Engineering, Data Structures & Algorithms, Object Oriented Programming, Database Systems, Cloud Computing, Machine Learning, Deep Learning, NLP, Data Mining and Analytics, Artificial Intelligence, Probability & Statistics, Discrete mathematics, Internet of Things (IoT)'
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
    // REAL Credly Link
    url: 'https://www.credly.com/badges/f1a56a83-9af5-4265-ab90-d0391c0d0b8e',
    skills: ['Generative AI', 'AWS Cloud', 'Prompt Engineering']
  },
  {
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google',
    year: '2025',
    // REAL Credly Link
    url: 'https://www.credly.com/badges/4de6f2e5-b579-446b-834d-a0af122192cf',
    skills: ['Cloud Computing', 'GCP', 'Network Security']
  },
  {
    title: 'Python Pro Bootcamp: 100 Days of Code',
    issuer: 'Udemy',
    year: '2025',
    // REAL Udemy Link
    url: 'https://www.udemy.com/certificate/UC-72ed6f02-8f75-47ae-9fdd-bee5858bb860/',
    skills: ['Python', 'OOP', 'Flask', 'Pandas']
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    year: '2025',
    url: 'https://www.linkedin.com/learning/certificates/9207ff1689bdf43e521659375846b6a1322f41779d41893247f3a1119d249548?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX8Abuns%2BTjWvnMujbeSnEA%3D%3D',
    skills: ['Data Analysis', 'Visualization', 'Power BI']
  },
  {
    title: 'Django REST Bootcamp',
    issuer: 'AIU School of Computing',
    year: '2025',
    // LOCAL FILE LINK (Encoded spaces)
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
  { name: 'Turkish', proficiency: 'Intermediate' },
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
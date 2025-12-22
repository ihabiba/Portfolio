import { BookOpen, Code, Database, Layout, Server, Terminal, Tool, Award } from 'lucide-react';

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
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
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
  title: 'Computer Science (Data Science)',
  location: 'Malaysia',
  pitch: 'Final-year Computer Science (Data Science) student with hands-on experience in machine learning, analytics, and building data-driven applications. Seeking a 6-month internship starting March 2026.',
  // FIXED: Use relative path from public folder
  resumeUrl: '/Portfolio/public/Habiba_Hassan_CV.pdf', 
  email: 'itshabibahassan@gmail.com',
  github: 'https://github.com/ihabiba',
  linkedin: 'https://linkedin.com/in/ihabiba',
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  paragraphs: [
    "I am a final-year Computer Science student specializing in Data Science, with hands-on experience working on machine learning models, analytics workflows, and data-driven applications. My focus is on understanding data properly, making deliberate modeling choices, and presenting results in a way that supports real decision-making.",
    "Through academic and personal projects, I have worked end-to-end on data and machine learning problems — from defining the problem and preparing data to training models, evaluating results, and delivering them through simple applications or dashboards. While I am particularly interested in areas such as explainable machine learning and applied analytics, I am open to working across different domains and problem spaces in an industry internship."
  ],
};


// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    title: 'AIU Smart Feedback System with NLP Analytics (FYP)',
    description:
      'A full-stack course evaluation system that automates feedback processing and provides role-based dashboards.',
    highlights: [
      'Built a Django + React + PostgreSQL system for students, lecturers, deans, and administrators',
      'Added NLP analytics (sentiment, topic modeling, summarization) to extract insights from feedback',
      'Details available upon request (final-year project repository is private)',
    ],
    techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'NLP'],
    repoUrl: '',
  },
  {
    title: 'Breast Cancer Diagnosis with Explainable AI (XAI)',
    description:
      'An explainable breast cancer classification app combining a Random Forest model with SHAP and LIME explanations.',
    highlights: [
      'Trained a Random Forest classifier on the Wisconsin Breast Cancer Diagnostic dataset',
      'Integrated SHAP and LIME to provide instance-level explanations for each prediction',
      'Built and deployed an interactive Streamlit app for predictions and visual explanations',
    ],
    techStack: ['Python', 'Scikit-learn', 'SHAP', 'LIME', 'Streamlit'],
    repoUrl: 'https://github.com/ihabiba/breast-cancer-xai',
    demoUrl:
      'https://breast-cancer-xai-32lzdet2wbbtthdayahi6t.streamlit.app/',
  },
  {
    title: 'Customer Analytics with Machine Learning',
    description:
      'A customer analytics project combining churn prediction and customer segmentation with interactive dashboards.',
    highlights: [
      'Built churn prediction models with end-to-end preprocessing and evaluation (LogReg, SVM, KNN, Trees)',
      'Performed customer segmentation using PCA + K-Means and analyzed segment characteristics',
      'Deployed two Streamlit dashboards for churn prediction and segment exploration',
    ],
    techStack: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Streamlit',
      'SHAP',
      'Matplotlib',
      'Seaborn',
    ],
    repoUrl: 'https://github.com/ihabiba/ML-customer-analysis',
    demoUrl:
      'https://ml-customer-analysis-uadd9gemwynm44izglfeax.streamlit.app/',
  },
  {
    title: 'Bank Marketing Campaign Prediction',
    description:
      'A supervised ML project predicting term-deposit subscription on an imbalanced marketing dataset.',
    highlights: [
      'Handled class imbalance using SMOTE and evaluated models with stratified cross-validation (F1-score)',
      'Trained and compared Decision Tree and Linear SVM models',
      'Used RFE to select features and improve model performance and interpretability',
    ],
    techStack: ['Python', 'Scikit-learn', 'SMOTE', 'Matplotlib', 'Seaborn'],
    repoUrl: 'https://github.com/ihabiba/BankMarketing-ML',
  },
  {
    title: 'Data Mining for Personalized Online Learning',
    description:
      'A multi-method data mining project analyzing student behavior, dropout signals, and recommendations in online learning.',
    highlights: [
      'Implemented Market Basket Analysis with Apriori to extract association rules from engagement patterns',
      'Built content-based + collaborative filtering recommenders for course suggestions',
      'Applied anomaly detection and time-series forecasting to identify outliers and predict performance trends',
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
  {
    title: 'HR & Recruitment Management Web Application',
    description:
      'A full-stack HR system for recruitment, employee records, and payroll, with role-based access and a public job application portal.',
    highlights: [
      'Built recruitment workflows: job postings, open/close status, and applicant submissions (no account required)',
      'Implemented employee management and payroll processing, including PDF payslips generated with ReportLab',
      'Deployed on Render',
    ],
    techStack: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'Flask-Login',
      'Flask-WTF',
      'SQLite',
      'PostgreSQL',
      'Bootstrap',
      'ReportLab',
      'Render',
    ],
    repoUrl: 'https://github.com/ihabiba/HR-APP',
    demoUrl: 'https://hr-app-2.onrender.com/',
  },
];


// ============================================
// SKILLS
// ============================================
export const skills: Skill[] = [
  {
    category: 'Data Science & Machine Learning',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Data Cleaning & Preprocessing',
      'Feature Engineering',
      'Supervised & Unsupervised Learning',
      'Model Evaluation',
      'Explainable AI (SHAP, LIME)',
      'NLP Basics',
    ],
  },
  {
    category: 'Web & Backend Development',
    items: [
      'Flask',
      'Django',
      'REST APIs',
      'Authentication & Authorization',
      'Session Management',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
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
      'ORM (SQLAlchemy)',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Jupyter Notebook',
      'Streamlit',
      'Render',
      'VS Code',
      'Tableau',
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
export const education: Education = {
  institution: 'Albukhary International University (AIU)',
  degree: 'Bachelor of Computer Science (Data Science)',
  period: '2023 – 2026 (Expected)',
  cgpa: '3.83 / 4.00',
};


// ============================================
// CERTIFICATES
// ============================================
export const certificates: Certificate[] = [
  {
    title: 'AWS Academy: Generative AI Foundations',
    issuer: 'AWS Academy',
    year: '2024',
    // REAL Credly Link
    url: 'https://www.credly.com/badges/f1a56a83-9af5-4265-ab90-d0391c0d0b8e',
    skills: ['Generative AI', 'AWS Cloud', 'Prompt Engineering']
  },
  {
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google',
    year: '2024',
    // REAL Credly Link
    url: 'https://www.credly.com/badges/4de6f2e5-b579-446b-834d-a0af122192cf',
    skills: ['Cloud Computing', 'GCP', 'Network Security']
  },
  {
    title: 'Python Pro Bootcamp: 100 Days of Code',
    issuer: 'Udemy',
    year: '2023',
    // REAL Udemy Link
    url: 'https://www.udemy.com/certificate/UC-72ed6f02-8f75-47ae-9fdd-bee5858bb860/',
    skills: ['Python', 'OOP', 'Flask', 'Pandas']
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    year: '2024',
    url: 'https://www.linkedin.com/learning/certificates/9207ff1689bdf43e521659375846b6a1322f41779d41893247f3a1119d249548?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX8Abuns%2BTjWvnMujbeSnEA%3D%3D',
    skills: ['Data Analysis', 'Visualization', 'Power BI']
  },
  {
    title: 'Django REST Bootcamp',
    issuer: 'AIU School of Computing',
    year: '2024',
    // LOCAL FILE LINK (Encoded spaces)
    url: '/Portfolio/certificates/Django%20REST%20Bootcamp%20CERTIFICATES(Signed)-18.pdf',    
    skills: ['Django', 'REST APIs', 'Backend Dev']
  },
  {
    title: 'Applied Data Science with Python',
    issuer: 'Simplilearn',
    year: '2024',
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
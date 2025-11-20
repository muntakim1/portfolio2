import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
    name: "Muntakim",
    role: "Data Scientist & Researcher",
    about: "Over four years of experience delivering full-cycle machine learning products, from value discovery and model design to cloud deployment and post-production monitoring. Developed 15+ AI-driven solutions across energy, geospatial, industrial safety, and customer service domains for global enterprises including MadisonTech, Oxy, Senex Energy, and Motorola Solutions, achieving 30%+ process efficiency gains and 40%+ reduction in manual effort. Skilled at leading cross-functional teams and presenting insights to C-suite stakeholders.",
    image: "/images/muntakim.jpg",
    socials: [
        {
            name: "GitHub",
            href: "https://github.com/muntakim1",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/muntakim1",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/muntakimurr",
            icon: Twitter,
        },
        {
            name: "Email",
            href: "mailto:muntakim.cse@gmail.com",
            icon: Mail,
        },
    ],
};

export const experiences = [
    {
        company: "VedTeq",
        role: "GenAI & LLM Data Scientist (Part-time)",
        period: "Jan 2025 – March 2025",
        description: "Implemented production-grade RAG pipelines reducing latency by 45ms. Developed GPT-4o-mini agents reducing ticket load by 25%. Built university recommendation engine (98% accuracy) and personalized Gemini-powered chatbot.",
    },
    {
        company: "Innova Analytics",
        role: "Senior Data Scientist",
        period: "June 2022 – Jan 2025",
        description: "Re-architected streaming stack (GCP Pub/Sub + PySpark) increasing throughput by 30%. Deployed LLM-powered well-data explorer. Implemented YOLOv8 PPE detection (98% accuracy) and AI-powered railway safety system (>90% accuracy).",
    },
    {
        company: "Leading Engineers Solutions",
        role: "Data Scientist",
        period: "April 2021 – May 2022",
        description: "Developed housing-price prediction API (R² = 0.95) serving 50k+ users. Automated document classification using BERT (31% uplift). Created Dash/Plotly geospatial dashboards halving disaster-response time.",
    },
];

export const education = [
    {
        institution: "Multimedia University, Cyberjaya",
        degree: "Master of Engineering Science (Research), AI in Cyber-Security & Networking",
        year: "2025 – Present",
        description: "Publication: 1 paper accepted.",
    },
    {
        institution: "Bangladesh Army International University of Science & Technology",
        degree: "Bachelor of Science in Computer Science and Engineering",
        year: "2016 – 2020",
        description: "CGPA: 3.74/4.0",
    },
];

export const certifications = [
    {
        name: "DeepLearning.AI TensorFlow Developer",
        issuer: "DeepLearning.AI",
        date: "2024",
        url: "#",
    },
    {
        name: "IBM Spark Level 1",
        issuer: "IBM",
        date: "2023",
        url: "#",
    },
    {
        name: "Generative AI Essentials on AWS",
        issuer: "AWS",
        date: "2025",
        url: "#",
    },
    {
        name: "IBM Data Science Professional",
        issuer: "IBM",
        date: "2023",
        url: "#",
    },
];

export const testimonials = [
    {
        name: "John Doe",
        role: "CTO at Tech Corp",
        content: "Muntakim is an exceptional Data Scientist. His work on AI agents transformed our workflow.",
    },
    {
        name: "Jane Smith",
        role: "Project Manager",
        content: "Highly recommended! Delivered the project on time and exceeded expectations.",
    },
];

export const publications = [
    {
        title: "Advanced AI Agents for Autonomous Systems",
        conference: "International Conference on AI (ICAI)",
        year: "2024",
        url: "#",
        description: "A comprehensive study on the architecture and deployment of autonomous AI agents in complex environments.",
    },
    {
        title: "Optimizing Machine Learning Pipelines",
        conference: "Journal of Data Science",
        year: "2023",
        url: "#",
        description: "Techniques for improving the efficiency and scalability of machine learning workflows.",
    },
];

export const achievements = [
    {
        title: "Cisco AI Innovation Award",
        organization: "Cisco",
        year: "2025",
        description: "Recognized for designing and deploying an AI-powered railway safety system achieving >90% incident detection accuracy.",
    },
    {
        title: "Best Paper Award",
        organization: "International Conference on AI",
        year: "2024",
        description: "Awarded for the paper 'Advanced AI Agents for Autonomous Systems'.",
    },
    {
        title: "Hackathon Winner",
        organization: "Global AI Hackathon",
        year: "2022",
        description: "First place winner for developing an innovative healthcare AI solution.",
    },
];

export const skills = {
    languages: ["Python", "ReactJS", "SQL", "Java", "Node.js", "Rust"],
    frameworks: [
        "FastAPI",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Mapbox",
        "GeoPandas",
        "OpenCV",
        "YOLO",
        "LangChain",
        "OpenAI",
    ],
    mlops: ["Git", "Docker", "Airflow", "MLFlow"],
    cloud: [
        "AWS",
        "GCP",
        "PostgreSQL",
        "BigQuery",
        "Spark",
        "Faiss",
        "ChromaDB",
        "SageMaker",
    ],
    algorithms: [
        "Regression",
        "Gradient Boosting",
        "XGBoost",
        "CatBoost",
        "Decision Tree",
        "Random Forest",
        "K-means",
        "CNNs",
        "Transformers",
        "LSTM",
    ],
};


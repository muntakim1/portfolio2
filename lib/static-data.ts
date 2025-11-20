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
        date: "2020",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2E4Y4V9A4YUR",
    },
    {
        name: "IBM Spark Level 1",
        issuer: "IBM",
        date: "2022",
        url: "https://www.credly.com/badges/bf8b0973-52f2-4d91-9155-def68558b310?source=linked_in_profile",
    },
    {
        name: "Generative AI Essentials on AWS",
        issuer: "AWS",
        date: "2025",
        url: "https://media.licdn.com/dms/image/v2/D4D2DAQHVtkN5b3rY5g/profile-treasury-image-shrink_800_800/B4DZnclbJ7JIAc-/0/1760342422977?e=1764244800&v=beta&t=9qM4wsJO7Kqi9JhSYaSIFJX_Dx3MHSBsyXERE3TqNyQ",
    },
    {
        name: "IBM Data Science Professional",
        issuer: "IBM",
        date: "2020",
        url: "https://www.credly.com/badges/77a6d454-ae9f-4b9b-9710-854362362a89/public_url",
    },
];

export const testimonials = [
    {
        name: "Dr Fahd Saghir",
        role: "CEO at Innova Analytics",
        content: "Muntakim has a proven ability to design and deliver proof-of-concept (PoC) applications, showcasing his capability to translate innovative ideas into practical solutions quickly. His technical proficiency, coupled with his problem-solving mindset, makes him a valuable asset to any team.",
    },
    {
        name: "Roshan Soni",
        role: "CEO at VedTeq/BasiraTech",
        content: "I had the privilege of working with Muntakim for the last two years on multiple projects, and I can confidently say he is one of the most talented professionals I’ve collaborated with. Despite being my junior, Muntakim taught me so much about AI and machine learning, consistently showcasing his deep expertise and innovative approach to problem-solving.",
    },
    {
        name: "Ash Khan",
        role: "National Pre-Sales Consultant - Automation Expert Centre Of Excellence at Schneider Electric",
        content: "I had the pleasure of collaborating with Muntakim on several projects involving data analytics, machine learning, and computer vision. His ability to understand project scope and deliver results on time is nothing short of remarkable.",
    },
];

export const publications = [
    {
        title: "Vision Models for Medical Imaging: A Hybrid Approach for PCOS Detection from Ultrasound Scans",
        conference: "International Conference on Systems Engineering, Technology, and Sustainable Solutions ",
        year: "2025",
        url: "#",
        description: "This research explores how AI-powered hybrid deep learning architectures can support clinicians by automating the detection of Polycystic Ovary Syndrome (PCOS) through ultrasound imaging — advancing diagnostic accuracy and accessibility in women’s healthcare.",
    },
    // {
    //     title: "Optimizing Machine Learning Pipelines",
    //     conference: "Journal of Data Science",
    //     year: "2023",
    //     url: "#",
    //     description: "Techniques for improving the efficiency and scalability of machine learning workflows.",
    // },
];

export const achievements = [
    {
        title: "Cisco AI Innovation Award",
        organization: "Cisco",
        year: "2024",
        description: "Recognized for designing and deploying an AI-powered railway safety system achieving >90% incident detection accuracy.",
    },
    // {
    //     title: "Best Paper Award",
    //     organization: "International Conference on AI",
    //     year: "2024",
    //     description: "Awarded for the paper 'Advanced AI Agents for Autonomous Systems'.",
    // },
    // {
    //     title: "TM LLM LEAGUE",
    //     organization: "Telekom Malaysia",
    //     year: "2025",
    //     description: "Trained and deployed a large language model (LLM) for customer service applications.",
    // },
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


import {
    Github,
    Linkedin,
    Mail,
    Globe,
    Shield,
    KeyRound,
    Network,
    Brain,
    Cpu,
} from "lucide-react";

export const personalInfo = {
    name: "Muntakimur Rahaman",
    shortName: "Muntakim",
    role: "Researcher × Senior Data Scientist",
    tagline:
        "Quantum-Safe Networking · AI for Cybersecurity · Production ML at Scale",
    location: "Cyberjaya, Malaysia",
    email: "muntakim.cse@gmail.com",
    phone: "+60 17-404 9373",
    orcid: "0009-0000-8368-6578",
    orcidUrl: "https://orcid.org/0009-0000-8368-6578",
    about:
        "I sit at the intersection of academic research and production engineering. As a Graduate Research Assistant at Multimedia University's Faculty of AI and Engineering, I design data-efficient learning systems for modern encrypted protocols (TLS 1.3, QUIC, Tor, VPN) and reinforcement-learning controllers for PQC + QKD orchestration in quantum-safe networks — work published in MDPI, accepted at an IEEE symposium, recognised with a Gold Medal at ITEX 2026, and filed as a patent. In parallel, I bring 5+ years of senior-level industry experience shipping 15+ AI products — from RAG pipelines and LLM agents to edge YOLOv8 deployments and predictive maintenance at scale — across energy, geospatial, industrial safety, and fintech. I am equally at home writing peer-reviewed papers and owning a production ML system end-to-end.",
    image: "/images/muntakim.jpg",
    cv: "/Muntakim_CV.pdf",
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
            name: "ORCID",
            href: "https://orcid.org/0009-0000-8368-6578",
            icon: Globe,
        },
        {
            name: "Email",
            href: "mailto:muntakim.cse@gmail.com",
            icon: Mail,
        },
    ],
};

export const profileFit = {
    availability:
        "Available from December 2026 (M.Eng.Sc. thesis submission) for full-time PhD programs or senior data-science roles.",
    tracks: [
        {
            key: "phd",
            label: "PhD Candidate",
            tagline: "Ready for doctoral research in quantum-safe security & AI",
            description:
                "Trained as a research-track M.Eng.Sc. with a published systematic review, a peer-reviewed IEEE paper, and a filed patent. Comfortable across the full research lifecycle — literature synthesis, problem formulation, system design, experimentation, writing, and review.",
            evidence: [
                {
                    label: "Journal paper · MDPI Computers (first author)",
                    detail: "PRISMA 2020 systematic review · 500 → 22 studies",
                },
                {
                    label: "IEEE conference paper (accepted)",
                    detail: "HTTPS traffic classification, packet-burst statistics",
                },
                {
                    label: "Patent application filed",
                    detail: "Episodic Transformer for cross-domain traffic analysis",
                },
                {
                    label: "Gold Medal · ITEX 2026",
                    detail: "Hybrid RL-based PQC + QKD orchestration",
                },
                {
                    label: "Research-track M.Eng.Sc. — MMU FAIE",
                    detail: "Thesis submitted; expected completion Dec 2026",
                },
                {
                    label: "Active areas",
                    detail:
                        "PQC, QKD, encrypted-traffic ML, RL, meta-/few-shot learning, edge security",
                },
            ],
        },
        {
            key: "senior-ds",
            label: "Senior Data Scientist",
            tagline: "5+ years shipping production ML across industries",
            description:
                "Senior-level industry track since 2022 — designed and deployed 15+ AI products for global enterprises (MadisonTech, Oxy, Senex Energy, Motorola Solutions). Strong on cloud-scale data, MLOps, edge deployment, and stakeholder communication.",
            evidence: [
                {
                    label: "5+ years experience · 15+ AI products shipped",
                    detail: "Energy, geospatial, industrial safety, fintech, customer service",
                },
                {
                    label: "Cisco AI Innovation Award · 2025",
                    detail: ">90% incident detection on edge-deployed railway safety system",
                },
                {
                    label: "Production RAG / LLM systems",
                    detail: "Multi-model AI agents · 25% ticket-load reduction · 45 ms latency cut",
                },
                {
                    label: "Edge ML on NVIDIA Jetson",
                    detail: "YOLOv8 PPE detection at 98% accuracy",
                },
                {
                    label: "Streaming + MLOps at scale",
                    detail: "GCP Pub/Sub + PySpark · +30% throughput · MLflow, Airflow, Docker",
                },
                {
                    label: "Senior delivery & leadership",
                    detail: "Led cross-functional teams, presented to C-suite stakeholders",
                },
            ],
        },
    ],
};

export const researchInterests = [
    {
        title: "Post-Quantum Cryptography & Quantum-Safe Networking",
        description:
            "PQC algorithm deployment and QKD orchestration for next-generation communication infrastructure.",
        icon: KeyRound,
    },
    {
        title: "Security of Communication Protocols & Architectures",
        description:
            "Protocol-level security analysis, secure-by-design network architectures.",
        icon: Shield,
    },
    {
        title: "Encrypted-Traffic & Network-Security Analysis",
        description:
            "TLS 1.3, QUIC, Tor and VPN traffic classification under modern, privacy-preserving protocols.",
        icon: Network,
    },
    {
        title: "AI for Cybersecurity",
        description:
            "Data-efficient, adaptive learning (few-shot, meta-learning, RL) for intrusion detection and drift.",
        icon: Brain,
    },
    {
        title: "Resource-Constrained / Edge Security",
        description:
            "On-device inference and security primitives for embedded and edge environments (NVIDIA Jetson).",
        icon: Cpu,
    },
];

export const experiences = [
    {
        company: "Multimedia University (MMU) — Faculty of AI and Engineering",
        role: "Graduate Research Assistant",
        period: "2025 – Present",
        location: "Cyberjaya, Malaysia",
        type: "research",
        highlights: [
            "Designed a hybrid reinforcement-learning controller for joint orchestration of PQC and QKD in quantum-safe networks — awarded Gold Medal at ITEX 2026.",
            "Led a PRISMA 2020 systematic review of data-efficient learning for encrypted-traffic classification under TLS 1.3, QUIC, Tor and VPN — screened 500 studies down to 22; published as first author in Computers (MDPI).",
            "Designed Cognitive Traffic Adaptation, an episodic Transformer framework for cross-domain encrypted-traffic analysis targeting concept drift and zero-day attacks (patent application filed).",
            "Benchmarked deep and ensemble models for HTTPS traffic classification from packet-burst statistics with an emphasis on interpretability (accepted at an IEEE symposium).",
        ],
    },
    {
        company: "VedTeq",
        role: "GenAI & LLM Data Scientist (Part-time)",
        period: "Jan 2025 – Mar 2025",
        location: "Remote · India",
        type: "industry",
        highlights: [
            "Built three production-grade RAG pipelines (LangChain + Faiss), reducing average latency by 45 ms.",
            "Developed GPT-4o-mini agents that cut human ticket load by 25%, plus built production chatbot systems.",
            "Authored a modular RAG framework, reducing new-client onboarding from three weeks to five days.",
        ],
    },
    {
        company: "Innova Analytics",
        role: "Senior Data Scientist",
        period: "Jun 2022 – Jan 2025",
        location: "Remote · Australia",
        type: "industry",
        highlights: [
            "Re-architected the streaming stack (GCP Pub/Sub + PySpark) for a 30% throughput increase.",
            "Deployed an LLM-powered well-data explorer that shortened insight lead-time from hours to minutes.",
            "Extended pump run-life by 12% across 400 assets via predictive-maintenance models.",
            "Implemented YOLOv8 PPE detection (98% accuracy) on Jetson edge devices and an AI-powered railway safety system (>90% incident detection) — Cisco AI Innovation Award (2025).",
        ],
    },
    {
        company: "Leading Engineers Solutions",
        role: "Data Scientist",
        period: "Apr 2021 – May 2022",
        location: "Remote · Australia",
        type: "industry",
        highlights: [
            "Built a housing-price prediction API (R² = 0.95) serving 50,000+ monthly users.",
            "Automated council-document classification using BERT — 31-percentage-point accuracy uplift.",
            "Built Dash/Plotly geospatial dashboards that halved disaster-response map-preparation time.",
        ],
    },
    {
        company: "Famacash",
        role: "Data Science Intern",
        period: "Nov 2020 – Apr 2021",
        location: "Remote",
        type: "industry",
        highlights: [
            "First professional data-science role — six-month internship covering the full ML lifecycle from data wrangling to model evaluation.",
            "Built exploratory analysis pipelines and prototype predictive models on fintech transaction data.",
            "Authored reusable preprocessing utilities and reporting notebooks used by the analytics team.",
        ],
    },
];

export const education = [
    {
        institution: "Multimedia University (MMU)",
        degree: "M.Eng.Sc. (by Research) — Cyber-Security & Networking",
        faculty: "Faculty of Artificial Intelligence and Engineering",
        location: "Cyberjaya, Malaysia",
        year: "2025 – Present",
        description:
            "Graduate Research Assistant. Research on AI-driven, quantum-safe security: data-efficient learning for encrypted-traffic classification, PQC/QKD orchestration, and adaptive intrusion detection. Expected completion: December 2026.",
        highlight: "1 peer-reviewed journal paper · 1 IEEE conference paper (accepted) · 1 patent application filed",
    },
    {
        institution: "Bangladesh Army International University of Science and Technology (BAIUST)",
        degree: "B.Sc. (Hons.) in Computer Science and Engineering",
        faculty: "Faculty of Engineering",
        location: "Comilla, Bangladesh",
        year: "2016 – 2020",
        description:
            "Undergraduate thesis: Bangla Song Genre Classification using Bi-LSTM — deep sequence modelling for audio genre recognition.",
        highlight: "CGPA: 3.74 / 4.00",
    },
];

export const publications = [
    {
        type: "journal",
        title:
            "A Systematic Literature Review on Data-Efficient and Adaptive Learning Techniques for Encrypted Traffic Classification Under Modern Protocols",
        authors:
            "Rahaman, M., Mahmud, A., Abd Aziz, A., Abujawa, O. M. S., & Chin, J.-J.",
        venue: "Computers (MDPI), 15(5), 319",
        year: "2026",
        url: "https://doi.org/10.3390/computers15050319",
        tags: ["PRISMA 2020", "Encrypted Traffic", "TLS 1.3 / QUIC", "First Author"],
        description:
            "A PRISMA-2020 systematic review screening 500 studies down to 22, mapping data-efficient and adaptive learning techniques for encrypted-traffic classification under modern privacy-preserving protocols.",
    },
    {
        type: "conference",
        title:
            "Benchmarking Deep and Ensemble Learning for HTTPS Traffic Classification: The Case for Packet-Burst Statistics and Interpretability",
        authors: "Rahaman, M. et al.",
        venue: "IEEE 10th International Symposium, Penang, Malaysia",
        year: "2026",
        status: "Accepted",
        url: "#",
        tags: ["HTTPS", "Deep Learning", "Interpretability"],
        description:
            "Benchmark of deep and ensemble models for HTTPS traffic classification from packet-burst statistics, with an emphasis on interpretability.",
    },
];

export const patents = [
    {
        title:
            "Cognitive Traffic Adaptation: An Episodic Transformer Framework for Cross-Domain Encrypted Traffic Analysis",
        inventor: "Rahaman, M.",
        year: "2026",
        status: "Patent application filed",
        description:
            "An episodic Transformer framework targeting concept drift and zero-day attacks in cross-domain encrypted-traffic analysis.",
        tags: ["Transformer", "Episodic Learning", "Zero-Day"],
    },
];

export const achievements = [
    {
        title: "Gold Medal — ITEX 2026",
        organization:
            "International Invention, Innovation & Technology Exhibition · Kuala Lumpur, Malaysia",
        year: "2026",
        description:
            "Awarded for \"Hybrid RL-based PQC and QKD Orchestration for Quantum-Safe Networking\" — a reinforcement-learning controller for jointly orchestrating post-quantum cryptography and quantum key distribution.",
    },
    {
        title: "Cisco AI Innovation Award",
        organization: "Cisco",
        year: "2025",
        description:
            "Recognised for an AI-powered railway safety system achieving >90% incident-detection accuracy, deployed on edge hardware.",
    },
];

export const leadership = [
    {
        role: "Volunteer & Event Management",
        organization: "IEEE WCNC 2026",
        venue: "Kuala Lumpur Convention Centre (KLCC)",
        location: "Kuala Lumpur, Malaysia",
        year: "2026",
        description:
            "Volunteer on the organising side of the IEEE Wireless Communications and Networking Conference — one of the flagship IEEE ComSoc conferences.",
    },
];

export const events = [
    {
        slug: "ITEX_2026",
        title: "ITEX 2026 — Gold Medal Win",
        venue: "Kuala Lumpur, Malaysia",
        date: "May 2026",
        summary:
            "Awarded a Gold Medal at the International Invention, Innovation & Technology Exhibition for the Hybrid RL-based PQC/QKD orchestration project.",
        cover: "/eventphotos/ITEX_2026/IMG_0384.JPG",
        photos: [
            "/eventphotos/ITEX_2026/IMG_0384.JPG",
            "/eventphotos/ITEX_2026/IMG_0387.JPG",
            "/eventphotos/ITEX_2026/ebd94244-1a9f-4c07-953e-680a7d27f65a.jpg",
            "/eventphotos/ITEX_2026/WhatsApp Image 2026-05-19 at 22.42.07.jpeg",
            "/eventphotos/ITEX_2026/WhatsApp Image 2026-05-19 at 22.53.22.jpeg",
            "/eventphotos/ITEX_2026/WhatsApp Image 2026-05-21 at 11.46.19.jpeg",
            "/eventphotos/ITEX_2026/WhatsApp Image 2026-05-21 at 11.46.20.jpeg",
        ],
        tag: "Award",
    },
    {
        slug: "WCNC_VOLUNTEER_2026",
        title: "IEEE WCNC 2026 — Volunteer",
        venue: "Kuala Lumpur Convention Centre (KLCC)",
        date: "2026",
        summary:
            "Volunteered on the event-management team for the IEEE Wireless Communications and Networking Conference at KLCC.",
        cover: "/eventphotos/WCNC_VOLUNTEER_2026/IMG_9115.JPG",
        photos: [
            "/eventphotos/WCNC_VOLUNTEER_2026/IMG_9115.JPG",
            "/eventphotos/WCNC_VOLUNTEER_2026/IMG_9240.JPG",
            "/eventphotos/WCNC_VOLUNTEER_2026/IMG_9260.JPG",
            "/eventphotos/WCNC_VOLUNTEER_2026/IMG_0160.jpg",
            "/eventphotos/WCNC_VOLUNTEER_2026/6b7fd180-a16c-44ea-80c8-2d6922e2b6cf.jpg",
            "/eventphotos/WCNC_VOLUNTEER_2026/a120cb98-9c91-495e-ae09-32ceb6df3e08.jpg",
        ],
        tag: "Service",
    },
    {
        slug: "IEEE_10_SYMP_2026_upcoming",
        title: "IEEE 10th International Symposium — Upcoming",
        venue: "Penang, Malaysia",
        date: "2026",
        summary:
            "Presenting accepted conference paper: Benchmarking Deep and Ensemble Learning for HTTPS Traffic Classification.",
        cover: null,
        photos: [],
        tag: "Talk",
    },
    {
        slug: "GDGKL_2025",
        title: "GDG Kuala Lumpur 2025",
        venue: "Kuala Lumpur, Malaysia",
        date: "2025",
        summary:
            "Attended the Google Developer Group Kuala Lumpur meetup — community gathering on emerging developer technologies.",
        cover: "/eventphotos/GDGKL_2025/IMG_7584.JPG",
        photos: [
            "/eventphotos/GDGKL_2025/IMG_7584.JPG",
            "/eventphotos/GDGKL_2025/IMG_7592.JPG",
            "/eventphotos/GDGKL_2025/IMG_7594.JPG",
            "/eventphotos/GDGKL_2025/IMG_7600.JPG",
        ],
        tag: "Community",
    },
    {
        slug: "6G_Talk_2025",
        title: "6G Talk 2025",
        venue: "Malaysia",
        date: "2025",
        summary:
            "Attended a 6G research talk on next-generation wireless and quantum-safe networking directions.",
        cover: "/eventphotos/6G_Talk_2025/IMG_7538.JPG",
        photos: ["/eventphotos/6G_Talk_2025/IMG_7538.JPG"],
        tag: "Talk",
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
        name: "IBM Data Science Professional",
        issuer: "IBM",
        date: "2020",
        url: "https://www.credly.com/badges/77a6d454-ae9f-4b9b-9710-854362362a89/public_url",
    },
    {
        name: "IBM Spark — Level 1",
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
];

export const skills = {
    securityNetworking: [
        "Post-Quantum Cryptography (PQC)",
        "Quantum Key Distribution (QKD)",
        "TLS 1.3",
        "QUIC",
        "VPN / Tor analysis",
        "Intrusion Detection",
        "Protocol Security Analysis",
    ],
    aiml: [
        "Transformers",
        "CNNs",
        "LSTMs",
        "Reinforcement Learning",
        "Few-Shot / Zero-Shot",
        "Meta-Learning",
        "XGBoost",
        "CatBoost",
        "Random Forest",
        "YOLOv8",
        "Prophet",
        "SAX",
    ],
    languages: ["Python", "Rust", "SQL / PostgreSQL", "Java", "ReactJS", "Node.js"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "LangChain", "LangGraph", "FastAPI"],
    edgeMlops: [
        "NVIDIA Jetson",
        "Docker",
        "Git",
        "Airflow",
        "MLflow",
        "DVC",
        "SageMaker",
    ],
    cloudData: [
        "AWS",
        "GCP",
        "BigQuery",
        "Spark / PySpark",
        "Plotly / Dash",
        "Mapbox",
        "GeoPandas",
    ],
    genai: [
        "OpenAI / GPT-4o",
        "RAG",
        "Faiss",
        "ChromaDB",
        "LangChain",
        "LangGraph",
    ],
};

export const testimonials = [
    {
        name: "Dr Fahd Saghir",
        role: "CEO at Innova Analytics",
        content:
            "Muntakim has a proven ability to design and deliver proof-of-concept (PoC) applications, showcasing his capability to translate innovative ideas into practical solutions quickly. His technical proficiency, coupled with his problem-solving mindset, makes him a valuable asset to any team.",
    },
    {
        name: "Roshan Soni",
        role: "CEO at VedTeq / BasiraTech",
        content:
            "I had the privilege of working with Muntakim for the last two years on multiple projects, and I can confidently say he is one of the most talented professionals I've collaborated with. Despite being my junior, Muntakim taught me so much about AI and machine learning, consistently showcasing his deep expertise and innovative approach to problem-solving.",
    },
    {
        name: "Ash Khan",
        role: "National Pre-Sales Consultant, Schneider Electric",
        content:
            "I had the pleasure of collaborating with Muntakim on several projects involving data analytics, machine learning, and computer vision. His ability to understand project scope and deliver results on time is nothing short of remarkable.",
    },
];

// ============================================================
// PROJECT DATA
// ============================================================
const projects = [
    // ── LIVE PROJECTS (Elite Showcase) ──────────────────────
    {
        id: 101, isLive: true, filter: "Healthcare", status: "Completed",
        title: "Curalink — AI Medical Research Assistant",
        category: "Healthcare AI / RAG Agent",
        desc: "A state-of-the-art AI-powered medical assistant that dynamically crawls and queries PubMed, OpenAlex, and ClinicalTrials databases. Employs advanced Retrieval-Augmented Generation (RAG) and custom NLP agents for precise medical literature synthesis.",
        tech: ["React", "Node.js", "Express", "PubMed API", "OpenAlex API", "RAG", "Vector DB"],
        features: ["Direct querying of PubMed and ClinicalTrials databases", "Intelligent context synthesis and text summarization", "Interactive chat interface for literature synthesis", "Automatic citation and reference extraction", "Modern glassmorphic and responsive interface"],
        image: "https://cdn.dribbble.com/userupload/16548002/file/original-81cb1d02cdf0afdf38ddd6cd91beff57.png?resize=752x&vertical=center",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/curalink",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/curalink/#/chat"
    },
    {
        id: 102, isLive: true, filter: "NLP", status: "Completed",
        title: "AI Job Agent — Automated Job Finder",
        category: "NLP / Automation Agent",
        desc: "A production-grade Next.js application that automates real-time job discovery and applications. Features an NLP-powered resume parser that extracts technical skills and matches them against active jobs using cosine similarity scoring.",
        tech: ["Next.js", "React Context", "Vanilla CSS Modules", "NLP Parser", "Cosine Similarity", "Automation"],
        features: ["Scans 6+ leading job platforms in real-time", "Extracts candidate skills from uploaded resumes", "Matches jobs with a strict match score threshold (>=70%)", "Beautiful glassmorphic dark-theme dashboard", "Verifiable real-time application links"],
        image: "images/ai-job-agent.png",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/ai-job-agent",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/ai-job-agent/"
    },
    {
        id: 103, isLive: true, filter: "NLP", status: "Completed",
        title: "Ecommerce RAG — Semantic Catalog Search",
        category: "NLP / Generative AI",
        desc: "An intelligent product discovery system utilizing Retrieval-Augmented Generation (RAG). Employs semantic search and vector database lookups to enable context-aware natural language shopping queries instead of static keyword filtering.",
        tech: ["Python", "LangChain", "FAISS", "OpenAI API", "FastAPI", "React", "Vector Embeddings"],
        features: ["Semantic search across product catalog databases", "Context-aware conversational product advisor", "High-performance vector database querying with FAISS", "Scalable FastAPI backend API endpoints", "Beautiful responsive product visualizer dashboard"],
        image: "https://miro.medium.com/1*gQaUVJYzUHUa-DpEmNVeKA.gif",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/ecommerce-rag",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/ecommerce-rag/"
    },
    {
        id: 104, isLive: true, filter: "Data", status: "Completed",
        title: "Binance Futures Testnet Trading Bot",
        category: "Algorithmic Trading / FinTech",
        desc: "A high-performance automated trading bot integrated with the Binance Futures Testnet. Executes algorithm-driven long and short positions by tracking technical indicators and market order book sentiment in real-time.",
        tech: ["Python", "Binance API", "Pandas", "WebSocket", "Technical Analysis", "Docker"],
        features: ["Real-time WebSocket data stream processing", "Algorithmic decision engines tracking MACD, RSI, and EMAs", "Automated long/short leverage order execution", "Advanced risk mitigation and automated stop-loss", "Comprehensive log tracking and performance audits"],
        image: "images/binance-bot.png",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/binance-futures-testnet-bot",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/binance-futures-testnet-bot/"
    },
    {
        id: 105, isLive: true, filter: "Web", status: "Completed",
        title: "My Cars Store — Premium Showroom",
        category: "Web Application / E-Commerce",
        desc: "An immersive, luxury vehicle e-commerce showroom that sets the standard for modern automotive commerce. Implements sleek layouts, dynamic catalog filtering, interactive vehicle visualizers, and test-drive scheduler integrations.",
        tech: ["HTML5", "CSS3 Modules", "Vanilla JavaScript", "GSAP Animations", "SwiperJS", "Interactive Scheduling"],
        features: ["Ultra-responsive and modern fluid design layout", "Immersive image and specifications visualizer slider", "Dynamic catalog sorting, filtering, and comparison tool", "Mock test-drive reservation scheduler flow", "Optimized image rendering for smooth loading speeds"],
        image: "images/my-cars-store.png",
        duration: "1.5 months",
        github: "https://github.com/ShankarAdari/my-cars-store",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/my-cars-store/#"
    },
    {
        id: 106, isLive: true, filter: "Healthcare", status: "Completed",
        title: "HCP CRM — Medical Sales Dashboard",
        category: "Healthcare AI / Sales CRM",
        desc: "A highly specialized Healthcare Professional Customer Relationship Management (HCP-CRM) system. Built to optimize interactions between medical representatives and practitioners with integrated visit schedulers, analytics, and sales funnels.",
        tech: ["React", "Redux Toolkit", "Chart.js", "Node.js", "Express", "MongoDB", "Auth0"],
        features: ["HCP visit scheduling and interaction tracking", "Dynamic sales analytics dashboard with interactive charts", "Practitioner compliance and profile logs management", "Auto-generated monthly visit efficiency reports", "Secure user role authentication and data integrity logs"],
        image: "images/hcp-crm.png",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/hcp-crm",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/hcp-crm/#/"
    },
    {
        id: 107, isLive: true, filter: "MLOps", status: "Completed",
        title: "FuelRoute AI — Logistics Optimizer",
        category: "Machine Learning / Logistics",
        desc: "An intelligent route planner that minimizes logistics transit times and fuel expenses. Leverages regression algorithms for forecasting consumption and reinforcement learning models to determine highly optimal routes.",
        tech: ["Python", "PyTorch", "Flask", "Docker", "Google Maps API", "Pandas", "Scikit-learn"],
        features: ["Predicts vehicle-specific fuel consumption rates", "Reinforcement learning for calculating efficient transit routes", "Real-time geographical tracking and visualization", "REST API integration for external fleet services", "Containerized deployment and cloud-ready structure"],
        image: "images/fuelroute-ai.png",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/fuelroute-ai",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/fuelroute-ai/"
    },
    {
        id: 108, isLive: true, filter: "MLOps", status: "Completed",
        title: "Retail AI Pipeline — Forecasting Engine",
        category: "MLOps / Supply Chain",
        desc: "A production-grade machine learning operations (MLOps) pipeline designed for demand forecasting and inventory tracking. Orchestrates automated model training and testing cycles with robust monitoring architectures.",
        tech: ["Apache Airflow", "MLflow", "Scikit-learn", "Docker", "AWS S3", "Prometheus", "Grafana"],
        features: ["Automated ingestion and storage pipelines with S3", "Model retraining workflows orchestrated by Airflow", "Model version control and parameter auditing with MLflow", "Demand prediction utilizing Scikit-learn regressors", "System health monitoring dashboards using Grafana"],
        image: "https://zoomchartswebstorage.blob.core.windows.net/template-gallery/20240110-152351-na-retail-supply-chain-and-sales-analysis-sushree-jena.webp",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/retail-ai-pipeline",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "https://shankaradari.github.io/retail-ai-pipeline/"
    },
    {
        id: 109, isLive: true, filter: "Web", status: "Completed",
        title: "Go Auth — Secure Microservice",
        category: "Web Security / Golang",
        desc: "An industrial-grade authentication microservice implemented in Golang. Incorporates best-practice cryptography, stateless session handling via JSON Web Tokens, active rate-limiting structures, and persistent database configurations.",
        tech: ["Golang", "Gin Web Framework", "JSON Web Tokens", "Redis", "Bcrypt Hashing", "SQLite"],
        features: ["Secure password hashing with Bcrypt", "Stateless session authorization via JSON Web Tokens (JWT)", "High-performance access rate limiting powered by Redis", "Structured registration and sign-in REST endpoints", "Relational database persistence configuration with SQLite"],
        image: "images/go-auth.png",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/go-auth-assignment",
        linkedin: "https://www.linkedin.com/in/shivashankaradari/",
        live: "http://shankaradari.github.io/go-auth-assignment/"
    },

    // ── ALL PROJECTS (Filterable Portfolio Dashboard) ────────
    {
        id: 1, filter: "MLOps", status: "Completed",
        title: "End-to-End MLOps Pipeline",
        category: "MLOps / DevOps",
        desc: "A robust end-to-end MLOps pipeline streamlining ML workflows with automated data ingestion, model training, deployment, and real-time monitoring for scalable AI operations.",
        tech: ["Python", "Kubernetes", "Apache Airflow", "MLflow", "Docker", "AWS", "Prometheus", "Grafana"],
        features: ["Automated CI/CD for ML models", "Model versioning & experiment tracking with MLflow", "Scalable deployment on Kubernetes", "Real-time monitoring & alerting via Prometheus/Grafana", "Data pipeline orchestration with Airflow"],
        image: "https://ml-ops.org/img/mlops-loop-en.jpg",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/mlops-pipeline-presentation",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_mlops-machinelearning-aiengineering-activity-7416441470649294848-xGiC"
    },
    {
        id: 2, filter: "MLOps", status: "Completed",
        title: "Predictive Stock & Logistics Optimizer",
        category: "Machine Learning",
        desc: "Innovative predictive system using LSTM for accurate stock forecasting and reinforcement learning for optimized logistics routing, boosting supply chain efficiency.",
        tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Flask", "Docker", "AWS", "MySQL"],
        features: ["LSTM-based stock prediction with high accuracy", "Reinforcement learning for logistics routing", "Real-time data processing & visualization", "REST API endpoints for integration", "Containerized Docker deployment"],
        image: "https://www.gooddata.com/img/blog/_2000xauto/inventory-management-dashboard-gooddata-cloud.png.webp",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/stock-logistics-optimizer",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_logistics-supplychain-mlops-activity-7416458100322275328-6QFZ"
    },
    {
        id: 3, filter: "Healthcare", status: "Completed",
        title: "Intelligent SaaS Health Monitor & Disease Predictor",
        category: "Healthcare AI / SaaS",
        desc: "Cutting-edge SaaS platform for real-time health monitoring and ML-driven disease prediction with intuitive dashboards, secure data handling, and scalable cloud infrastructure.",
        tech: ["Python", "TensorFlow", "FastAPI", "React", "AWS", "MongoDB", "Docker"],
        features: ["Real-time health metric monitoring", "Disease risk prediction using ML algorithms", "User-friendly interactive dashboard", "Secure data storage & privacy compliance", "Scalable cloud deployment on AWS"],
        image: "https://cdn.dribbble.com/userupload/16548002/file/original-81cb1d02cdf0afdf38ddd6cd91beff57.png?resize=752x&vertical=center",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/health-monitor-saas",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_saas-healthtech-aiengineering-activity-7416455012236709889-F-RD"
    },
    {
        id: 4, filter: "NLP", status: "Completed",
        title: "Action-Oriented Agentic RAG System",
        category: "NLP / Generative AI",
        desc: "Advanced action-oriented Agentic RAG system powered by AI agents and RAG technology, enabling seamless document interaction, contextual queries, and task execution.",
        tech: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit", "Pinecone", "FastAPI"],
        features: ["PDF & document processing pipeline", "Contextual querying with semantic search", "Autonomous AI agents for task execution", "Conversation history management", "Web-based Streamlit interface"],
        image: "https://miro.medium.com/1*gQaUVJYzUHUa-DpEmNVeKA.gif",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/agentic-rag-system",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_genai-aiengineer-agenticrag-activity-7416432721402441729-HzgZ"
    },
    {
        id: 5, filter: "Data", status: "Completed",
        title: "Retail Supply Chain Dashboard",
        category: "Data Visualization",
        desc: "Dynamic dashboard for real-time retail supply chain monitoring, offering predictive inventory analytics, interactive visualizations, customizable reports, and ERP integration.",
        tech: ["Python", "Dash", "Plotly", "Pandas", "SQL", "AWS", "Docker"],
        features: ["Real-time supply chain metrics", "Predictive analytics for inventory management", "Interactive charts, maps & KPI indicators", "Customizable exportable reports", "ERP system integration"],
        image: "https://zoomchartswebstorage.blob.core.windows.net/template-gallery/20240110-152351-na-retail-supply-chain-and-sales-analysis-sushree-jena.webp",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/retail-supply-chain-optimizer",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_genai-aiengineer-agenticrag-activity-7416432721402441729-HzgZ"
    },
    {
        id: 6, filter: "Healthcare", status: "Completed",
        title: "Disease Prediction Web App with Medicine Suggestions",
        category: "Healthcare AI / Full Stack",
        desc: "User-friendly web app predicting diseases from symptoms using ML, providing medicine suggestions, SMS/email reminders, and secure profile management.",
        tech: ["Python", "Scikit-learn", "Flask", "JavaScript", "SQLite", "Twilio"],
        features: ["Symptom-based disease prediction ML model", "Medicine recommendation system", "Automated reminders via SMS/email (Twilio)", "User profile management", "HIPAA-compliant health data handling"],
        image: "https://user-images.githubusercontent.com/109678911/204099672-6693a3f3-de0c-4706-bb4b-cc12282866f2.PNG",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/Disease--Prediction-Web-App-with-Medicine-Suggestions-and-Reminders",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_healthtech-fullstackdeveloper-python-activity-7416440899666096128-27D-"
    },
    {
        id: 7, filter: "CV", status: "Completed",
        title: "Object Detection using YOLOv5",
        category: "Computer Vision",
        desc: "High-performance YOLO-based object detection system achieving 98% accuracy with custom training capabilities and real-time video stream integration.",
        tech: ["Python", "YOLOv5", "OpenCV", "TensorFlow", "Docker"],
        features: ["Real-time object detection on video streams", "Custom model training on domain-specific datasets", "15% efficiency improvement over baseline", "98% detection accuracy achieved", "WebRTC integration for live camera feeds"],
        image: "https://pyimagesearch.com/wp-content/uploads/2018/11/yolo_design.jpg",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/yolo-object-detection",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_datascience-opencv-huggingface-activity-7213952413727084545-YgeG"
    },
    {
        id: 8, filter: "NLP", status: "Completed",
        title: "SoftChat — Custom Conversational LLM",
        category: "NLP / Generative AI",
        desc: "Sophisticated custom LLM for engaging conversational AI, fine-tuned for context-aware responses with REST API integration and scalable deployment.",
        tech: ["Python", "Transformers", "PyTorch", "FastAPI", "Docker"],
        features: ["Full conversational AI interface", "Fine-tuned on custom domain datasets", "Context-aware multi-turn responses", "Production-ready REST API", "Horizontally scalable Docker deployment"],
        image: "https://substackcdn.com/image/fetch/$s_!rs5B!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a449b16-e644-4d79-9492-1a1d5b98685b_2800x1900.png",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/soft_llm_chat",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_generativeai-llm-machinelearning-activity-7410008659579301888-dRHC"
    },
    {
        id: 9, filter: "Web", status: "Completed",
        title: "MovieBox — Movie Review & Recommendation App",
        category: "Recommendation System / Full Stack",
        desc: "Immersive app aggregating movie reviews delivering personalized recommendations, with advanced search, user ratings, and real-time updates.",
        tech: ["Python", "Scikit-learn", "Flask", "React", "MongoDB"],
        features: ["Movie review aggregation from multiple APIs", "Collaborative filtering recommendation engine", "Full-text search & category filtering", "User rating & review system", "Real-time update notifications"],
        image: "https://cdn.dribbble.com/userupload/36613516/file/original-a8da327cea7374e65ba4cdc75a999854.jpg?resize=752x&vertical=center",
        duration: "1 month",
        github: "https://github.com/ShankarAdari/-Movie-Review-Hub-A-Full-Stack-Web-Application",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_webdevelopment-react-omdb-share-7430542891279855616-O4WF"
    },
    {
        id: 10, filter: "NLP", status: "Completed",
        title: "AI Language Translator Pro",
        category: "NLP / Multilingual AI",
        desc: "Precise AI translator supporting 100+ languages with context-aware accuracy, batch processing, API integration, and intuitive interface for seamless global communication.",
        tech: ["Python", "Transformers", "Google Translate API", "FastAPI", "Docker"],
        features: ["100+ language support with auto-detection", "Context-aware & idiomatic translations", "Batch document processing", "Enterprise-grade REST API", "Docker containerized microservice"],
        image: "https://assets.solguruz.com/meta/AI-Enabled-Language-Translator-App-Meta-Image.png",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/AI-Translator-Pro",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_python-artificialintelligence-nlp-activity-7414347758037397504-VFHm"
    },
    {
        id: 11, filter: "Web", status: "Completed",
        title: "Indian News Hub — Smart News Aggregator",
        category: "Web Application",
        desc: "Modern news app aggregating content from multiple APIs with category browsing, smart search, bookmarking, and theme modes for personalized experience.",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
        features: ["News aggregation from top Indian news APIs", "Category-based smart browsing", "Full-text search functionality", "Article bookmarking & save feature", "Dark/light mode with persistence"],
        image: "https://miro.medium.com/1*kVi9e8xp6TgwE_0a6kyl0Q.jpeg",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/Indian-NEWS-hub",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_fullstackdeveloper-reactjs-python-activity-7411293546395332608-xlI_"
    },
    {
        id: 12, filter: "CV", status: "Completed",
        title: "Live Hand Gesture Detection",
        category: "Computer Vision / HCI",
        desc: "Responsive real-time hand gesture recognition system supporting multiple gesture types with webcam integration and application control capabilities.",
        tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Flask"],
        features: ["Real-time gesture recognition at 30fps", "20+ distinct gesture types recognized", "Application control integration", "Webcam-based touchless interface", "95%+ recognition accuracy"],
        image: "https://ai.google.dev/static/mediapipe/images/solutions/examples/hand_gesture.png",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/gestureflow",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_aimers-aimersociety-apsche-activity-7213985591095349248-W6ld"
    },
    {
        id: 13, filter: "Data", status: "Completed",
        title: "Data Visualization with Power BI",
        category: "Data Analytics / BI",
        desc: "Interactive Power BI dashboards for insightful data analysis, featuring advanced data modeling, real-time reports, and multi-source data integration.",
        tech: ["Power BI", "SQL", "Excel", "DAX"],
        features: ["Interactive drill-down visualizations", "Advanced DAX data modeling", "Real-time reporting pipelines", "Multi-source data integration", "Executive KPI dashboards"],
        image: "https://learn.microsoft.com/en-us/power-bi/create-reports/media/service-dashboards/power-bi-dashboard2.png",
        duration: "1 month",
        github: null,
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_aimers-aimersociety-apsche-activity-7213957299067867139-WgmA"
    },
    {
        id: 14, filter: "NLP", status: "Completed",
        title: "Text-to-Image Generation (Stable Diffusion)",
        category: "Generative AI",
        desc: "Generative model transforming text prompts into vivid images using Stable Diffusion, with fine-tuning support and GPU acceleration on Google Colab.",
        tech: ["Hugging Face", "Stable Diffusion", "Python", "Google Colab", "PyTorch"],
        features: ["Text prompt-to-image synthesis", "Fine-tuning on custom image datasets", "GPU-accelerated generation on Colab", "Style control & negative prompting", "Multiple resolution output support"],
        image: "https://i.ytimg.com/vi/WlfMl9ghGhs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIqp5zxtRjwYsAcIEBHDe5QQzXNA",
        duration: "2 months",
        github: null,
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_aimers-aimersociety-apsche-activity-7213986984552280065-7v_D"
    },
    {
        id: 15, filter: "Healthcare", status: "Completed",
        title: "Crop Yield Prediction — Sustainable Agriculture AI",
        category: "Agricultural AI / ML",
        desc: "Optimized ML algorithm predicting crop yields with 23%+ higher accuracy, reducing waste by 30%, with pesticide and nutrient recommendations trained on 500+ datasets.",
        tech: ["Python", "YOLO", "TensorFlow", "Scikit-learn", "Pandas"],
        features: [">23% accuracy improvement over baseline", "30% agricultural waste reduction", "Pesticide & nutrient recommendations", "Trained on 500+ real-world datasets", "Direct applicability for farmer profitability"],
        image: "https://www.mdpi.com/agriculture/agriculture-13-00579/article_deploy/html/images/agriculture-13-00579-g001-550.jpg",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/Sustainable-approach-of-reduced-waste-using-Optimised-ml-Algorithm-for-predicting-crop-yields",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_machinelearning-computervision-sustainableagriculture-ugcPost-7430528127501574144-oKbx"
    },
    {
        id: 16, filter: "NLP", status: "Completed",
        title: "Research AI — Automated Academic Assistant",
        category: "AI Research Assistant",
        desc: "Intelligent AI research companion automating literature search, paper summarization, key findings extraction, and citation management to accelerate research workflows.",
        tech: ["Python", "Transformers", "Pinecone", "Streamlit", "Google Scholar API"],
        features: ["Automated academic literature search", "AI-generated paper summaries & insights", "Key finding & data extraction", "Automated citation management", "Collaborative research tools"],
        image: "https://paperguide.ai/content/images/2025/02/image--5---1-.png",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/research_assistant_landing",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_academicresearch-machinelearning-rag-activity-7430633445724409856-aluw"
    },
    {
        id: 17, filter: "NLP", status: "Completed",
        title: "Legal Document Analyzer",
        category: "Legal AI / NLP",
        desc: "Powerful AI legal assistant specialized in analyzing contracts, extracting key clauses, detecting compliance risks, and generating structured summaries with enterprise security.",
        tech: ["Python", "spaCy", "Transformers", "FastAPI", "MongoDB"],
        features: ["Automated clause extraction & analysis", "Compliance risk detection & flagging", "Legal document summarization", "Intelligent search & Q&A on documents", "End-to-end document encryption"],
        image: "https://framerusercontent.com/images/XHEK1Vs5RKaJvapjHKcKXIEE.png",
        duration: "3 months",
        github: "https://github.com/ShankarAdari/legal-document-analyzer",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_legaltech-ai-ocr-activity-7430640810863337472-PV_N"
    },
    {
        id: 18, filter: "NLP", status: "Completed",
        title: "AI Code Optimizer, Explainer & Generator",
        category: "AI Dev Tools",
        desc: "Advanced AI coding assistant that intelligently optimizes code for performance, explains complex logic in plain language, and generates production-ready code from natural language.",
        tech: ["Python", "OpenAI API", "LangChain", "FastAPI", "Docker"],
        features: ["Code optimization for performance", "Step-by-step code explanations", "Natural language to code generation", "Multi-language support (Python, JS, Java...)", "IDE plugin integration support"],
        image: "https://codia.ai/images/docs/getting-started/ai-code-generator/3-steps.png",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/ai-code-explainer",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_ai-softwareengineering-voiceai-activity-7430590172917891072-XHAr"
    },
    {
        id: 19, filter: "NLP", status: "Completed",
        title: "Llama 3.2 Powered Multimodal LLM Bot",
        category: "NLP / Multimodal AI",
        desc: "Sophisticated AI chatbot leveraging Meta's Llama 3.2 with RAG capabilities for document Q&A and multimodal image analysis.",
        tech: ["Python", "Ollama", "Llama 3.2", "LangChain", "python-telegram-bot", "ChromaDB"],
        features: ["Real-time text generation (Llama 3.2 1B/3B)", "Multimodal image analysis & captioning", "Local document RAG with ChromaDB", "Context-aware conversational memory", "Telegram bot interface"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4y6_1ySBnmKJJphkIR0DT8Z6Fn3P8Ze1x0A&s",
        duration: "1 week",
        github: null,
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_chatbot-python-automation-activity-7354868265375969280-ZU0m"
    },
    {
        id: 20, filter: "NLP", status: "Completed",
        title: "New GLM with Sentiment Analysis",
        category: "NLP / Generative AI",
        desc: "Next-generation Generative Language Model enhanced with advanced human sentiment analysis enabling emotionally intelligent, contextually accurate response generation.",
        tech: ["Python", "Transformers", "Hugging Face", "PyTorch"],
        features: ["Emotionally-aware text generation", "Human sentiment classification & integration", "High accuracy output generation", "Fine-tuned on sentiment-labeled data", "Web-based interactive demo"],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*7z6MY6y1VqM4r3oG3AXxZg.png",
        duration: "4 months",
        github: "https://github.com/ShankarAdari/human-glm-app",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_generativeai-nlp-webdevelopment-activity-7430643731092946944-dMSK"
    },
    {
        id: 21, filter: "NLP", status: "Completed",
        title: "AI Telegram ChatBot (Text-to-Video)",
        category: "AI & Cloud Deployment",
        desc: "High-performance Telegram interface for generative AI, handling text-to-video generation with task queuing, real-time progress updates, and direct video delivery.",
        tech: ["Python", "python-telegram-bot", "PyTorch", "Diffusers", "Redis", "Docker"],
        features: ["Text-to-video via Telegram command", "Async task queuing with Redis", "Multi-user concurrent support", "Automated video compression & delivery", "Custom aspect ratio & motion settings"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcE7syc982iQczj8lsXnjxwfogOjYHPgvZA&s",
        duration: "2 days",
        github: null,
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_aimers-aimersociety-apsche-activity-7213975791917838336-r6K3"
    },
    {
        id: 22, filter: "Web", status: "Completed",
        title: "My Habit Tracker",
        category: "Productivity App",
        desc: "Elegant habit tracker with smart reminders, beautiful progress visualizations, streak counters, and detailed analytics to build lasting positive habits.",
        tech: ["JavaScript", "React Native", "Node.js", "MongoDB", "Firebase"],
        features: ["Habit creation & daily tracking", "Smart reminders & push notifications", "Streak counter & achievement system", "Progress charts & analytics", "Cross-device cloud sync with Firebase"],
        image: "https://cdn.dribbble.com/userupload/3486129/file/original-2a17cbbecdd084f10269c25f41bb096c.png?resize=2048x1536&vertical=center",
        duration: "2 months",
        github: "https://github.com/ShankarAdari/my-habit-tracker",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_healthtech-fullstackdeveloper-python-activity-7416440899666096128-27D-"
    },
    {
        id: 23, filter: "Web", status: "Completed",
        title: "Currency Converter Pro",
        category: "FinTech Application",
        desc: "High-performance currency conversion app with real-time exchange rates for 150+ currencies, historical trend charts, and offline mode.",
        tech: ["React Native", "Node.js", "Exchange Rate APIs", "TypeScript"],
        features: ["Real-time exchange rates for 150+ currencies", "Historical data visualization & charts", "Multi-currency conversion dashboard", "Offline mode support", "Clean mobile-first UI"],
        image: "https://cdn.dribbble.com/userupload/36613516/file/original-a8da327cea7374e65ba4cdc75a999854.jpg?resize=752x&vertical=center",
        duration: "1 month",
        github: "https://github.com/ShankarAdari/currency-converter-pro",
        linkedin: "https://www.linkedin.com/posts/shivashankaradari_fintech-softwareengineering-typescript-activity-7430582061129703424-XSgI"
    },
    {
        id: 24, filter: "Data", status: "Ongoing",
        title: "AI-Powered Text-to-Video Generation Platform",
        category: "Generative AI / Video Synthesis",
        desc: "Advanced generative AI platform transforming natural language prompts into high-fidelity video content using latent diffusion models with temporal consistency layers.",
        tech: ["Python", "PyTorch", "Diffusers", "Hugging Face Transformers", "OpenCV", "CUDA"],
        features: ["Text-guided video synthesis via Diffusion Models", "Temporal consistency for smooth motion", "Resolution upscaling & frame interpolation", "Multi-style support (Cinematic, Animation, 3D)", "Batch generation pipeline"],
        image: "https://cdn.7labs.io/wp-content/uploads/2026/01/image-7.png",
        duration: "Ongoing",
        github: null, linkedin: null
    },
    {
        id: 25, filter: "Web", status: "Ongoing",
        title: "MuzicWorld — Spotify-Type Streaming App",
        category: "Music Streaming",
        desc: "Premium music streaming platform with high-quality audio, personalized AI recommendations, collaborative playlists, artist discovery, and social features.",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Spotify API"],
        features: ["High-quality music streaming", "AI-personalized recommendation engine", "Playlist creation & collaborative sharing", "Artist & album discovery", "Social listening features"],
        image: "https://s3-alpha.figma.com/hub/file/5876844909/a35cca96-04ea-4ab2-aa8e-e5f3a5c56dff-cover.png",
        duration: "Ongoing",
        github: "https://github.com/ShankarAdari/music_streaming_app",
        linkedin: null
    },
    {
        id: 26, filter: "Data", status: "Ongoing",
        title: "Duplicate Removal Application",
        category: "Data Cleansing Utility",
        desc: "Robust data-cleansing utility identifying and eliminating redundant records using fuzzy matching and exact-match algorithms with interactive preview dashboard.",
        tech: ["Python", "Pandas", "Streamlit", "NumPy", "OpenPyXL"],
        features: ["Automated CSV/Excel duplicate detection", "Customizable fuzzy matching thresholds", "Side-by-side duplicate comparison", "One-click cleaned data export", "Batch processing for large datasets"],
        image: "https://cdn.aptoide.com/imgs/2/7/f/27f9f5bc05b68f50462d9eb47b2e2ce9_fgraphic.png",
        duration: "Ongoing",
        github: null, linkedin: null
    }
];

// ============================================================
// EXPERIENCE DATA
// ============================================================
const experiences = [
    {
        company: "SmartInternz",
        role: "Data Analytics — Tableau Intern",
        period: "Dec 2025 – Present · 2 months",
        desc: "Building interactive Tableau dashboards, creating BI reports, and generating actionable insights from complex datasets.",
        tags: ["Tableau", "Data Visualization", "BI", "Analytics"]
    },
    {
        company: "SkillDzire",
        role: "Web Dev & Cloud Integration Intern",
        period: "Oct 2025 – Present · 4 months",
        desc: "Developing scalable web applications with cloud deployment on AWS, implementing modern frameworks and microservice architectures.",
        tags: ["AWS", "React", "Node.js", "Cloud", "Docker"]
    },
    {
        company: "DEXTERITY",
        role: "Artificial Intelligence Intern",
        period: "Feb 2025 – Mar 2025 · 2 months",
        desc: "Worked on AI-based automation tools, analyzed datasets for insights, and participated in AI model training pipelines.",
        tags: ["AI", "Automation", "Python", "Data Analysis"]
    },
    {
        company: "AIMER Society",
        role: "Machine Learning Intern",
        period: "May 2024 – Jul 2025 · 3 months",
        desc: "Data preprocessing, feature engineering, ML model development for medical AI applications, and model evaluation.",
        tags: ["ML", "Healthcare AI", "Python", "Scikit-learn"]
    },
    {
        company: "Internz Learn",
        role: "Python Development Intern",
        period: "May 2025 – Jun 2025 · 2 months",
        desc: "Python programming, OOP design patterns, data science workflows, and web development with Flask.",
        tags: ["Python", "Flask", "OOP", "Data Science"]
    },
    {
        company: "Skill Dzire",
        role: "Machine Learning Intern",
        period: "Jun 2024 – Aug 2024 · 3 months",
        desc: "Developed ML models for predictive analytics, optimized algorithms, and collaborated on data pipeline development.",
        tags: ["ML", "Predictive Analytics", "Python", "Pipelines"]
    },
    {
        company: "AIMER Society",
        role: "Artificial Intelligence Intern",
        period: "Jun 2024 – Aug 2024 · 3 months",
        desc: "Implemented AI solutions for real-world problems, conducted deep learning research, and assisted in AI project deployments.",
        tags: ["Deep Learning", "AI", "Research", "TensorFlow"]
    }
];

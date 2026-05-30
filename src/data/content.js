export const about = {
  paragraph:
    "I'm a CS and Economics student at UW–Madison, interested in software engineering, data engineering, and data analytics.",
};

export const skills = [
  {
    label: "Languages",
    items: ["Python", "Java", "SQL", "C", "R", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "FastAPI", "Flask", "Vite", "Pandas", "NumPy", "Matplotlib", "OpenCV"],
  },
  {
    label: "AI / ML",
    items: ["Groq API", "Groq Vision", "Deepgram API", "YOLOv8"],
  },
  {
    label: "Data & Cloud",
    items: ["Airflow", "dbt", "TimescaleDB", "AWS (S3)", "Docker", "Supabase", "Git", "Tableau"],
  },
];

export const experience = [
  {
    title: "Data Engineer Intern",
    org: "Allocore",
    date: "May 2026 – August 2026",
    location: "Mechanicsburg, PA",
  },
  {
    title: "Data Analyst Intern",
    org: "United Nations: DESA",
    date: "May 2025 – August 2025",
    location: "New York, NY",
  },
  {
    title: "B.S. Computer Science, Economics with Math Emphasis",
    org: "University of Wisconsin–Madison",
    date: "2024 – 2027 (expected)",
    location: "Madison, WI",
  },
  {
    title: "Senior Engineer",
    org: "Peddie Robotics",
    date: "September 2021 – May 2024",
    location: "Hightstown, NJ",
  },
  {
    title: "Event Day Judge & Logistics Team Lead",
    org: "PeddieHacks",
    date: "September 2020 – August 2025",
    location: "Hightstown, NJ",
  },
];

export const projects = [
  {
    title: "Pulse",
    date: "March 2026 – Present",
    description:
      "An end-to-end financial data pipeline using Airflow to ingest daily OHLCV data for 15 tickers (300+ rows) into an AWS S3 landing zone and TimescaleDB hypertable across 30 days of history. dbt transforms raw data into moving averages, daily returns, z-score anomaly detection flagging 40+ unusual events, and a cross-ticker correlation matrix. Served transformed data via FastAPI to a React dashboard with candlestick charts, anomaly markers, correlation heatmap, and inline sparklines; automated dbt data quality tests run after each DAG to validate schema and detect missing trading days.",
    tech: ["Python", "Apache Airflow", "TimescaleDB", "dbt", "FastAPI", "React", "AWS (S3)", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/FinMarketPipeline" },
    ],
  },
  {
    title: "Lotus",
    date: "February 2026 – Present",
    description:
      "Collaborated with a team to build a healthcare cost projection platform using Deepgram speech-to-text and a two-layer detection system (regex + Groq LLM) to map symptoms to 40+ ICD-10 conditions. Features a simulation engine using odds ratios from 1.5M+ MEPS patient records, interactive Cytoscape.js disease progression visualization, and side-by-side CMS marketplace insurance plan comparison with Supabase Google OAuth authentication.",
    tech: ["Python", "React", "FastAPI", "Groq LLM", "Deepgram", "Cytoscape.js", "Supabase", "Vite"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/Lotus" },
    ],
  },
  {
    title: "Voxal",
    date: "December 2025 – Present",
    description:
      "A voice-powered personal assistant for expense tracking, pantry management, and meal planning using Deepgram STT and Groq LLM for multi-intent classification. Features Groq Vision OCR receipt scanning, AI spending insights, budget alerts, a drag-and-drop pantry with expiration tracking, and AI meal recommendations. Built with async FastAPI backend, Supabase Auth, PostgreSQL real-time subscriptions, and shared shopping lists.",
    tech: ["Python", "React", "FastAPI", "Groq LLM", "Groq Vision", "Deepgram", "Supabase", "PostgreSQL"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/VoiceP_App" },
      { label: "Live App", url: "https://voxal.vercel.app/" },
    ],
  },
  {
    title: "Redline",
    date: "November 2025 – Present",
    description:
      "A full-stack web app using YOLOv8 to detect and classify vehicle damage from 3000+ images with automated cost estimation. Built Flask REST API and React frontend with real-time damage visualization and Groq LLM chatbot for support. Trained YOLOv8 model with OpenCV preprocessing, classifying damage severity across multiple vehicle components.",
    tech: ["Python", "React", "YOLOv8", "Groq LLM", "Flask", "OpenCV"],
    links: [
      { label: "GitHub", url: "https://github.com/UniqueRed/badger-buildhacks" },
      { label: "Video Demo", url: "https://youtu.be/6G34sUlco60" },
    ],
  },
  {
    title: "Shadows & Suits",
    date: "October 2025",
    description:
      "Medieval twist on poker Texas Hold'em with a rustic UI where players are able to experience poker in a completely new way.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/PokerGame" },
      { label: "Live Demo", url: "https://poker-game-iota.vercel.app/" },
    ],
  },
  {
    title: "Risk Dashboard Analyzer",
    date: "Coming Soon",
    description:
      "A full-stack analytics tool that pulls historical market data, stores it in a PostgreSQL database, and calculates key risk metrics used by financial institutions. Users can build custom portfolios and visualize how their holdings might perform under different market conditions.",
    tech: ["Python", "PostgreSQL", "SQL", "Pandas", "Streamlit"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/Risk-Dashboard-Analyzer" },
    ],
  },
];

export const contact = {
  prompt: "Reach out. I'm always up for a conversation.",
  links: [
    { label: "Email", value: "pbachu@wisc.edu", url: "mailto:pbachu@wisc.edu" },
    { label: "Gmail", value: "pradyun.bachu@gmail.com", url: "mailto:pradyun.bachu@gmail.com" },
    { label: "GitHub", value: "github.com/pradyunbachu", url: "https://github.com/pradyunbachu" },
    { label: "LinkedIn", value: "linkedin.com/in/pradyun-bachu", url: "https://www.linkedin.com/in/pradyun-bachu/" },
  ],
};

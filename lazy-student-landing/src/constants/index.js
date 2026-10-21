export const GITHUB_LINK = "https://github.com/shan2003034/lazy-student-ai-summarizer"; 
export const DOWNLOAD_LINK = "#download"; 

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export const FEATURES = [
  {
    id: 1,
    title: "Multi-Format Support",
    description: "Easily upload PDF documents, Audio (MP3), or Video (MP4) lectures. We handle the text extraction for you."
  },
  {
    id: 2,
    title: "Smart AI Summaries",
    description: "Powered by Gemma:2b, get highly accurate bullet-point summaries and interactive flashcards instantly."
  },
  {
    id: 3,
    title: "100% Offline & Private",
    description: "Runs entirely on your local machine using Ollama and Whisper. No internet required. Your data stays yours."
  }
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Upload Your Lecture",
    description: "Simply drag and drop your PDF document, or upload an MP3/MP4 file of your lecture."
  },
  {
    id: 2,
    title: "Let AI Do the Heavy Lifting",
    description: "Grab a coffee while our local AI models (Gemma & Whisper) safely process your file offline."
  },
  {
    id: 3,
    title: "Study & Ace Your Exams",
    description: "Review the generated bullet-point summaries and flip through interactive flashcards to memorize key concepts."
  }
];

export const INSTALLATION_STEPS = [
  {
    id: 1,
    title: "1. Install Lazy Student AI",
    description: "Download the setup file using the download button above. Run the .exe file and follow the standard installation wizard.",
    code: null 
  },
  {
    id: 2,
    title: "2. Install Ollama & Gemma AI",
    description: "To process text locally, download Ollama from ollama.com. Once installed, open your Command Prompt (CMD) and download the Gemma 2B model:",
    code: "ollama run gemma:2b"
  },
  {
    id: 3,
    title: "3. Setup Audio & Video Processing (Whisper)",
    description: "To summarize MP3/MP4 files, you need Python and FFmpeg. Open Command Prompt as Administrator and run the following commands sequentially:",
    code: "winget install ffmpeg\npip install -U openai-whisper"
  }
];

export const TECH_STACK = [
  {
    category: "Frontend",
    technologies: ["React 18", "Vite", "Tailwind CSS v4", "Framer Motion"]
  },
  {
    category: "Backend",
    technologies: ["Spring Boot 3", "Java 17", "SQLite", "Apache PDFBox"]
  },
  {
    category: "AI & Processing",
    technologies: ["Ollama (Gemma:2b)", "OpenAI Whisper", "FFmpeg"]
  }
];
import { c } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  akribiz,
  threejs,
  journIQ,
  bitlink,
  atithi,
  crowd_control,
  bluestock,
  plaksha,
  chessGame,
  matchMate,
  jira,
  Heart,
  Typo,
  Assess,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Community Leader",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Software Development Intern",
    company_name: "BlueStock FinTech",
    icon: bluestock,
    iconBg: "#383E56",
    date: "April 2025 - May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " Data Analyst Intern",
    company_name: "Akribiz pvt ltd",
    icon: akribiz,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Developed automated data processing pipelines in Python, handling datasets with 50k+ records",
      "Implemented data visualization using Matplotlib to streamline reporting.",
      "Reduced manual reporting time by 60% through automation."
    ],
  },
  {
    title: "Young Technology Scholar (Summer Programme)",
    company_name: "Plaskha University",
    icon: plaksha,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Selected for Plaksha University’s Young Technology Scholars programme on full financial aid, recognizing academic merit and potential",
      "Built a 2D game using Python and Pygame, implementing gameplay mechanics such as event handling, collision detection, and scoring logic",
      "Gained hands-on experience through collaborative workshops in programming, game design, and computational problem-solving",

    ],
  },

];

const community = [
  {
    title: "Technical Team Member",
    company_name: "Google Developer Group (GDG) SRM",
    icon: creator, // You can change this to a GDG-specific icon if you have one
    iconBg: "#4285F4", // Google Blue
    date: "2025 – Present",
    points: [
      "Collaborate with a 10+ member core team to organize technical workshops and hackathons for 500+ students.",
      "Support event planning, technical execution, and community engagement initiatives.",
      "Facilitate knowledge sharing sessions on modern web technologies and Google Cloud Platform.",
    ],
  },
  {
    title: "Associate Member (Web Development)",
    company_name: "Next Tech Lab — Norman Lab",
    icon: creator, // You can change this to a lab-specific icon if you have one
    iconBg: "#9333EA", // Purple for tech/innovation
    date: "2024 – Present",
    points: [
      "Contribute to web development projects within a QS-ranked, student-led R&D lab.",
      "Collaborate on frontend and full-stack solutions while gaining hands-on experience with modern web technologies.",
      "Participate in code reviews and technical discussions to improve development practices.",
    ],
  },
];

const projects = [
  {
    name: "JournIQ- Unified Study Platform",
    description:
      "While studying and researching online, I noticed how fragmented the learning experience had become—YouTube for lectures, separate apps for notes, news, and search, and constant context switching that broke focus—so I built an all-in-one learning platform that unified videos, news feeds, search, and note-taking into a single workflow. The platform reduced app-switching by 70% for 200+ active users, and by integrating AI-powered semantic search using the Gemini API, cut content retrieval time by 50% through contextual discovery of notes and resources. To enable collaborative learning, I implemented real-time shared notes, chat, and voice calling using Socket.io and WebRTC, allowing users to study together seamlessly within the platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      }
    ],
    image: journIQ,
    source_code_link: "https://github.com/anshshukla2533/Journ_iq",
    live_demo_link: "https://journ-iq-93xs.vercel.app/",
  },
  {
    name: "Multiplayer Chess Game",
    description: "I built a real-time multiplayer chess application using Next.js, Node.js, Express, and Socket.IO, enabling seamless live gameplay with instant move synchronization for over 100 users. The application enforces complete chess logic, including legal move validation, check and checkmate detection, and also features a single-player mode with an AI opponent powered by algorithmic decision-making. I designed a responsive and interactive user interface with dynamic board rendering and real-time updates, reducing move latency by 40% and significantly enhancing the overall user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      }
    ],
    image: chessGame,
    source_code_link: "https://github.com/anshshukla2533/multiplayer_chess_game",
    live_demo_link: "https://multiplayer-chess-game-nu.vercel.app/",

  },

  {
    name: "Assess.Ai",
    description: "I developed Assess.ai, an AI-powered mock interview platform that simulates real-world technical interviews through conversational AI, voice interaction, and personalized candidate assessment. Built using React, FastAPI, Redis, and Google Gemini, the system analyzes candidate resumes to extract GitHub and LeetCode profiles, leveraging this data to generate context-aware, adaptive interview questions tailored to the user’s experience and skill level. The platform conducts structured interview rounds covering introductions, core computer science concepts, and algorithmic problem-solving, dynamically adjusting difficulty based on responses. I integrated speech-to-text and text-to-speech capabilities for a realistic interview experience, along with Redis-based session management to maintain chat history and state. This project demonstrates my ability to design intelligent, multi-component systems that combine AI, backend architecture, and real-time interaction to solve practical problems in technical hiring and candidate preparation.",
    tags: [],
    image: Assess,
    source_code_link: "https://github.com/anshshukla2533/Asses.ai"
  },
  
  {
    name: "Jira Ticket Evaluator",
    description: "I developed an AI-powered Jira Ticket Evaluator, a multi-agent system that autonomously verifies whether a GitHub Pull Request satisfies the acceptance criteria of a Jira ticket. Built using Python, FastAPI, Google Gemini, and integrated with the Atlassian Jira and GitHub APIs, the system analyzes both the ticket and code changes to generate a structured PASS, PARTIAL, or FAIL verdict with detailed reasoning and code-level evidence. The architecture leverages four specialized AI agents for requirements parsing, PR analysis, test generation, and verdict synthesis, enabling precise mapping between requirements and implementation. I also designed an interactive web dashboard that provides real-time evaluation results, including per-requirement breakdowns with confidence scores and file-level references, significantly streamlining the code review and validation process.",
    tags: [
      {
        name: "Fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      }
    ],
    image: jira,
    source_code_link: "https://github.com/anshshukla2533/Jira_Ticket_Evaluator",
  },
  {
    name: "MatchMate",
    description: "I developed MatchMate (LoveMate), a high-aesthetic, full-stack matchmaking platform designed to foster meaningful connections through personality alignment and shared experiences. Built using Next.js (App Router), Prisma, and NextAuth.js, the platform leverages a deeply integrated trait-based system to enable “vibrational matching,” pairing users based on core personality attributes and preferences. I implemented features such as real-time chat (Heart Stream), shared quests to build intimacy through collaborative tasks, and a persistent “Friends Sanctuary” for ongoing interactions and connections. The system enforces strict validation rules to ensure safe and structured matchmaking, while bcrypt-based authentication and API-level security provide robust data protection. With a focus on clean design and fluid user experience using Tailwind CSS, the platform delivers an immersive and engaging environment for users to connect, interact, and build lasting relationships.",
    tags: [
      {
        name: "frontend",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "webapp",
        color: "pink-text-gradient",
      }
    ],
    image: matchMate,
    source_code_link: "https://github.com/anshshukla2533/love_mate",
    live_demo_link: "https://soule-mate-nine.vercel.app/",
  },
  {
    name: "Heart Disease Prediction Model",
    description: "I developed a machine learning-based Heart Disease Prediction web application that estimates the likelihood of heart disease using patient health data. The project covers an end-to-end ML workflow, starting with exploratory data analysis to uncover patterns and feature relationships, followed by preprocessing steps such as handling missing values, encoding features, and scaling inputs. I trained a K-Nearest Neighbors classification model and integrated it into an interactive Streamlit interface so users can enter medical parameters and receive instant risk predictions. The model is deployed with Joblib for efficient inference, demonstrating a complete pipeline from data analysis to a production-ready application.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: Heart,
    source_code_link: "https://github.com/anshshukla2533/Heart_disease_prediction_model",
    live_demo_link: "https://heartdiseasebyanshshukla.streamlit.app/",
  },
  {
    name: "Typo racer",
    description: "I built TypeRacer, a full-stack typing speed test application that enables users to measure and improve their typing performance through timed tests and real-time feedback. Developed using React, Node.js, Express, and PostgreSQL, the platform includes secure JWT-based authentication, allowing users to register, log in, and track their progress. The application features live character-by-character validation with visual feedback, along with accurate calculation of words per minute (WPM) and typing accuracy. I implemented a global leaderboard that ranks the top 50 users, with persistent storage of user data and scores using a serverless PostgreSQL database. The system is designed with a responsive and interactive UI, ensuring smooth user experience while efficiently handling real-time interactions and data updates.",
    tags: [],
    image: Typo,
    source_code_link: "https://github.com/anshshukla2533/Typoracer"
  },
  {
    name: "Atithi Setu — Tourist Safety Platform",
    description:
      "To improve tourist safety, I developed a platform that allows trip registration, encrypted emergency contacts, and automated check-ins, reducing vulnerability during travel. The platform enhances situational awareness by 60% through real-time friend tracking with Mapbox geofencing and risk zone overlays. Additionally, it enables zero-network communication via peer-to-peer SOS messaging using Websocket and libp2p mesh networking, ensuring help is available even without cellular coverage.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql"
        , color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",

      },


    ],
    image: atithi,
    source_code_link: "https://github.com/anshshukla2533/atithi_setu",
    live_demo_link: "https://atithi-setu-nine.vercel.app/",
  },
  {
    name: "Smart Crowd-Control System",
    description:
      "built a computer-vision–based crowd monitoring system for event handling to proactively prevent long queues and safety risks by detecting high-density areas in real time using a custom YOLOv8 model with 92% accuracy. The system scaled to 10+ concurrent video streams using a Flask backend with Python multithreading and optimized frame processing, and triggered automated WhatsApp alerts when crowd density crossed thresholds, enabling organizers to redirect attendees and reducing response time by 40%.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "yolov8",
        color: "pink-text-gradient",
      },
    ],
    image: crowd_control,
    source_code_link: "https://github.com/anshshukla2533/crowd_mangement",
  },
  



];

export { services, technologies, experiences, community, projects };

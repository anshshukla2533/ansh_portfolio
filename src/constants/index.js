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
        name:"mysql"
        ,color:"blue-text-gradient",
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
    name: "Url Shortener Microservice",
    description:
      "To improve tourist safety, I developed a platform that allows trip registration, encrypted emergency contacts, and automated check-ins, reducing vulnerability during travel. The platform enhances situational awareness by 60% through real-time friend tracking with Mapbox geofencing and risk zone overlays. Additionally, it enables zero-network communication via peer-to-peer SOS messaging using Websocket and libp2p mesh networking, ensuring help is available even without cellular coverage.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name:"mongodb"
        ,color:"blue-text-gradient",
      },
      
     
      
    ],
    image: bitlink,
    source_code_link: "https://github.com/anshshukla2533/anshbitlink",
    live_demo_link: "https://anshbitlink.vercel.app/",
  },
];

export { services, technologies, experiences,  community, projects };

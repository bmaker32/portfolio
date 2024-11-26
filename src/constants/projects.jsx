import img2 from '../assets/avatar.jpg'
import financetracker from '../assets/finance-tracker.jpg'
import socialmediadashboard from "../assets/socialmediadashboard.jpg"
import eccomerce from "../assets/eccomerce.jpg"
import aichatbot from '../assets/aichatbot.jpg'
import learning from "../assets/learning.jpg"
import realestate from '../assets/realestate.jpg'
import fooddelivery from '../assets/fooddelivery.jpg'
import taskmangement from '../assets/taskmangement.jpg'
import portfolio from '../assets/portfolio.jpg'

const PROJECTS = [
    {
      title: "E-Commerce Platform",
      description:
        "Developed a fully responsive e-commerce platform for online shopping. The platform includes features like product listing, user authentication, payment gateway integration, and admin dashboards for inventory management.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      img:eccomerce, // Replace with the actual image path
    },
    {
      title: "Social Media Marketing Dashboard",
      description:
        "Created a web application for social media marketers to manage campaigns, track analytics, and schedule posts across multiple platforms. The app provides real-time insights and automated reporting.",
      technologies: ["React.js", "Redux", "Chart.js", "Express.js", "PostgreSQL"],
      img: socialmediadashboard, // Replace with the actual image path
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Built a finance tracker application that allows users to monitor expenses, set budgets, and generate financial reports. It features a user-friendly interface and secure data storage.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "D3.js"],
      img: financetracker, // Replace with the actual image path
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Developed an AI chatbot for customer support that uses natural language processing to understand and respond to user queries. The chatbot is integrated into a website and mobile app.",
      technologies: ["Python", "Flask", "TensorFlow", "React Native", "MongoDB"],
      img: aichatbot, // Replace with the actual image path
    },
    {
      title: "Online Learning Platform",
      description:
        "Designed and implemented an online learning platform where users can take courses, participate in quizzes, and earn certificates. The platform supports video streaming and real-time discussions.",
      technologies: ["React.js", "Node.js", "GraphQL", "AWS S3", "PostgreSQL"],
      img: learning, // Replace with the actual image path
    },
    {
      title: "Real Estate Listing Website",
      description:
        "Developed a modern real estate platform where users can browse property listings, save favorites, and contact agents. The platform features advanced search filters and location-based recommendations.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Google Maps API"],
      img: realestate, // Replace with the actual image path
    },
    {
      title: "Food Delivery App",
      description:
        "Built a cross-platform food delivery application with real-time order tracking, multiple payment options, and restaurant reviews. The app features a clean UI and seamless UX.",
      technologies: ["React Native", "Firebase", "Stripe API", "Node.js"],
      img:fooddelivery, // Replace with the actual image path
    },
    {
      title: "Portfolio Website",
      description:
        "Created a personal portfolio website showcasing projects, skills, and experiences. It features a sleek design, animations, and contact form integration.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Netlify"],
      img: portfolio, // Replace with the actual image path
    },
    {
      title: "Task Management Tool",
      description:
        "Developed a collaborative task management tool for teams to track project progress, assign tasks, and communicate in real time. It includes notifications and deadline reminders.",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "WebSockets"],
      img: taskmangement, // Replace with the actual image path
    },
    
  ];
  
  export default PROJECTS;
  
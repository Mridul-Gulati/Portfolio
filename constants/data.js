import React from "react";
import SentimentAnalyser from "@/assets/images/sentiment.png";
import AIATS from "@/assets/images/AI-ATS.png";
import DDD from "@/assets/images/DDD.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { Html } from "next/document";

export const links = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export const ProjectsData = [
  {
    name: "AI Applicant Tracking System",
    description:
      "Engineered an AI-enabled Applicant Tracking System with Python and Google Gemini Pro Vision for over 1.5 million students. Added functionality of percentage resume match with job description and missing keywords",
    image: AIATS,
    tags: [
      "Python",
      "Generative AI",
      "Streamlit",
      "Langchain",
    ],
    link: "https://ai-ats-8dgsbh86czq3z9dribp5c2.streamlit.app/",
  },
  {
    name: "Driver Drowsiness Detection",
    description:
      "Created a driver drowsiness detection system to prevent more than 1.2 million road accidents annually.",
    image: DDD,
    tags: [
      "Python",
      "OpenCV",
      "Streamlit-webrtc",
    ],
    link: "https://github.com/Mridul-Gulati/Drowsy-detector",
  },
  {
    name: "Sentiment Analyzer Webapp",
    description:
      "Programmed a Sentiment Analyzer Webapp using the NLTK library to analyze sentiments of text, achieving an accuracy rate of 85% on a test dataset of 1000 entries.",
    image: SentimentAnalyser,
    tags: [
      "Python",
      "Streamlit",
      "NLTK",
    ],
    link: "https://sentiment-analysis-mg.streamlit.app/",
  },
];

export const SkillsData = [
  "Python",
  "C++",
  "R",
  "Flask",
  "Django",
  "Docker",
  "Kubernetes",
  "AWS",
  "Statistical Modeling", "Data Analysis & Visualization", "Algorithm Design", "Machine Learning", "Deep Learning", "NLP", "Generative AI",
  "Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Operating System", "Computer Networks", "Software Development Lifecycle"
];

export const experiencesData = [
  {
    title: "Python Developer Intern",
    location: "DecisionAlgo",
    description:
      "• Designed the DB scheme and Matching Algorithm for 20000+ Doctors and 300+ Hospitals.",
    icon: React.createElement(FaLaravel),
    date: "Nov 2023 - Present",
  },
  {
    title: "Data Science Intern",
    location: "DecisionAlgo",
    description:
      "Launched an automated system using Python and machine learning for detecting malicious activity in cryptocurrency transactions with 98% accuracy.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - Nov 2023",
  }
];

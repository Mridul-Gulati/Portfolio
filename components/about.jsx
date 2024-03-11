"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const { ref } = useActiveSectionHook({
    sectionName: "About",
    threshold: 0.4,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.7], [100, 0]);

  return (
    <div id="About" ref={targetRef} className="scroll-mt-28">
      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        style={{ opacity, y }}
        transition={{ delay: 2 }}
        ref={ref}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 capitalize">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I am a pre-final year B.Tech(CSE - minor specialisation in AI/ML) student currently serving as a
          Data Scientist Intern at DecisionAlgo, where I am working on <br></br><span className="font-bold">"Fraud Detection in Crypto Wallets using Machine learning“</span><br></br>
          In this role, I've developed my skills in Python libraries such as Numpy and Pandas for data preparation/manipulation
          which includes assessing data accurately, identifying anomalies and conducting custom analysis to derive valuable
          insights from the data. Additionally I have exposure to MySQL for database management.
          I am well versed with Git for version control, branching and pull requests.
        </p>
      </motion.section>
    </div >
  );
};

export default About;

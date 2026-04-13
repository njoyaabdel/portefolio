// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";

// export default function About() {
//   const { ref } = useSectionInView("About");
//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About me</SectionHeading>
//       <p className="mb-3">
//         After graduating with a degree in{" "}
//         <span className="font-medium">Accounting</span>, I decided to pursue my
//         passion for programming. I enrolled in a coding bootcamp and learned{" "}
//         <span className="font-medium">full-stack web development</span>.{" "}
//         <span className="italic">My favorite part of programming</span> is the
//         problem-solving aspect. I <span className="underline">love</span> the
//         feeling of finally figuring out a solution to a problem. My core stack
//         is{" "}
//         <span className="font-medium">
//           React, Next.js, Node.js, and MongoDB
//         </span>
//         . I am also familiar with TypeScript and Prisma. I am always looking to
//         learn new technologies. I am currently looking for a{" "}
//         <span className="font-medium">full-time position</span> as a software
//         developer.
//       </p>

//       <p>
//         <span className="italic">When I'm not coding</span>, I enjoy playing
//         video games, watching movies, and playing with my dog. I also enjoy{" "}
//         <span className="font-medium">learning new things</span>. I am currently
//         learning about{" "}
//         <span className="font-medium">history and philosophy</span>. I'm also
//         learning how to play the guitar.
//       </p>
//     </motion.section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I hold a degree in{" "}
        <span className="font-medium">Software Engineering & Databases</span>{" "}
        from IUSTE, and have been working professionally as a{" "}
        <span className="font-medium">Python / JavaScript backend developer</span>{" "}
        since 2023. My core stack is{" "}
        <span className="font-medium">
          FastAPI, PostgreSQL, React, and Next.js
        </span>
        , with solid experience in clean architecture, DDD, and async systems.{" "}
        <span className="italic">My favorite part of engineering</span> is
        designing robust, scalable APIs and solving complex architectural
        challenges. I <span className="underline">love</span> building systems
        that are both reliable and maintainable — from authentication flows and
        real-time features to AI integrations and payment solutions.
      </p>

      <p>
        I'm currently building{" "}
        <span className="font-medium">Dape</span>, a digital real estate
        management and booking platform aimed at bringing transparency and
        reliability to property search and rental. I also integrate{" "}
        <span className="font-medium">AI tools</span> (ChatGPT, Gemini, Hugging
        Face) into my daily workflow to boost productivity.{" "}
        <span className="italic">When I'm not coding</span>, I enjoy exploring
        new technologies and deepening my knowledge of{" "}
        <span className="font-medium">software architecture</span> and{" "}
        <span className="font-medium">system design</span>.
      </p>
    </motion.section>
  );
}
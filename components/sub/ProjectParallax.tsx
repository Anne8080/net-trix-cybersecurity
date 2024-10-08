"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { ParallaxLayer } from "@react-spring/parallax";

const ProjectParallax = () => {
  return (
    <div className="w-full">
        <ParallaxLayer
          sticky={{ start: 1.5, end: 2.3 }}
          style={{ zIndex: 5 }}
          className="w-full "
        >
          <ProjectCard
            src="/os.png"
            title="Data Encryption"
            description=" Protecting your data in transit and at rest using advanced encryption techniques."
            cls="overflow-hidden rounded-lg shadow-lg w-full md:w-[30.6vw] md:ml-[2vw]"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.9, end: 2.3 }}
          style={{ zIndex: 5 }}
          className="w-full"
        >
          <ProjectCard
            src="/folder.png"
            title="Data Backup and Recovery"
            description="Implementing reliable backup solutions to ensure data availability and integrity in case of hardware failures or cyber incidents."
            cls="overflow-hidden rounded-lg shadow-lg w-full md:w-[30.6vw] md:ml-[34.6vw]"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.25, end: 2.3 }}
          style={{ zIndex: 5 }}
          className="w-full"
        >
          <ProjectCard
            src="/analyzer.png"
            title="Data Loss Prevention (DLP)"
            description="Identifying and preventing potential data breaches by monitoring and controlling data transfers across your network."
            cls="overflow-hidden rounded-lg shadow-lg w-full md:w-[30.6vw] md:ml-[67.2vw]"
          />
        </ParallaxLayer>
      </div>
  );
};

export default ProjectParallax;

import { useEffect, useState, useRef  } from 'react';
import React from "react";
import { Project, projects } from "../const";



const ProjectCard: React.FC<Project> = ({title, type, description, link, skills}) => {
    const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
    return (
        <div ref={cardRef} className={`project-card p-5 pr-0 min-w-[400px] lg:min-w-[450px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
        <h1 className="text-4xl lg:text-6xl mt-auto">{title}</h1>
            <h2 className="text-sm text-black dark:text-[#AAAAAA]">{type}</h2>
            <p className="text-md lg:text-lg">{description}</p>
            <div className="flex flex-row ml-auto items-center gap-2" >
            {skills.map((skill, index) => (
          <span className="flex items-center gap-2 text-lg" key={index}>
            <i
              className={`text-3xl lg:text-4xl devicon-${
                skill.icon === "express" ||
                skill.icon === "emacs" ||
                skill.icon === "influxdb"
                  ? `${skill.icon}-original`
                  : `${skill.icon}-plain colored`
              } icon-color`}
            ></i>
          </span>
        ))}
        <button onClick={() => window.open(link)} className="view-button text-md lg:text-lg p-2 w-[125px] ml-auto">View</button>
        </div>
    </div> 
    )
}

export const Projects = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const projectsContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);

    useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaY) > 0) {
          e.preventDefault();
          if (projectsContainerRef.current) {
            projectsContainerRef.current.scrollLeft += e.deltaY;
          }
        }
      };
  
      const container = projectsContainerRef.current;
      if (container) {
        container.addEventListener('wheel', handleWheel);
      }
  
      return () => {
        if (container) {
          container.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);

    return (
        <div  className={`text-right w-full h-full ml-auto text-sm md:text-lg ${fadeIn ? 'fade-in' : 'hidden'}`}>         
            <h1 className="font-barcode text-4xl md:text-5xl lg:text-6xl mt-auto ml-auto">Projects</h1>
            <div id="projects-container" className="projects-container flex" ref={projectsContainerRef}> 
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
            
        </div>
    );
}
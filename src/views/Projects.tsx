import { useEffect, useState, useRef  } from 'react';
import React from "react";
interface Skill {
icon: string;
}

interface Project {
title: string;
type: string;
description: string;
link: string;
skills: Skill[];
}

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
        threshold: 0.7 
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
            <h2 className="text-sm text-[#AAAAAA]">{type}</h2>
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

    const projects: Project[] = [
        {
            title: "Vitametrics",
            type: "Open-source Web Application & Docker Program",
            description: "Target for researchers--Vitametrics captures data from Fitbit trackers for researchers to export and analyze.",
            link: "https://vitametrics.org/",
            skills: [
                {icon: "react"},
                {icon: "nodejs"},
                {icon: "mongodb"},
                {icon: "docker"},
                {icon: "express"},
                {icon: "typescript"},
            ]
        },{
            title: "Miso",
            type: "Web Application",
            description: "Invite your friends to study in your room--sanctioned for boosting your productivity and creativity.",
            link: "https://github.com/brandontranle/miso",
            skills: [
                {icon: "react"},
                {icon: "mongodb"},
                {icon: "nodejs"},
                {icon: "express"},
                {icon: "typescript"},

            ]
        },
        {
            title: "MSUB",
            type: "Static Web Application",
            description: "Designed to showcase Math-Science Upward Bound to hundreds of High School Students every year.",
            link: "https://github.com/brandontranle/msub",
            skills: [
                {icon: "react"},
                {icon: "sass"},
                {icon: "typescript"},
            ]
        },
        {
            title: "notzsh",
            type: "Terminal Application",
            description: "A mimic of shell command piping, such that the output of each command becomes the input for the next.",
            link: "https://github.com/brandontranle/notzsh",
            skills: [
                {icon: "c"},
                {icon: "python"},
            ]
        },
        {
            title: "Thriftopia",
            type: "Web Application (Work in progress)",
            description: "A thrift store for students! Desgined to help students sell or exchange goods to other students at nearby campuses!",
            link: "https://github.com/brandontranle/thriftopia",
            skills: [
                {icon: "react"},
                {icon: "typescript"},
                {icon: "java"},
                {icon: "mysql"},
            ]
        },
        {
            title: "Tug-o-Word",
            type: "Web Application",
            description: "Imagine tug-o-war but with your keyboard! Battle in an intense team fight or 1v1 with your typing speed.",
            link: "https://github.com/brandontranle/tug-o-word",
            skills: [
                {icon: "laravel"},
                {icon: "php"},
                {icon: "mysql"},
            ]
        },
        {
            title: "Peach Party",
            type: "Game",
            description: "Peach and Yoshi battle around an obstacle course to collect the most coins while avoiding Bowser and Boo",
            link: "https://github.com/brandontranle/peach-party",
            skills: [
                {icon: "cplusplus"},
                {icon: "opengl"},
            ]
        }
        ]

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`text-right w-full h-full ml-auto ${fadeIn ? 'fade-in' : 'hidden'}`}>         
            <h1 className="font-barcode text-5xl lg:text-6xl mt-auto ml-auto">Projects</h1>
            <div className="projects-container flex max-w-[1497px]">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
            
        </div>
    );
}
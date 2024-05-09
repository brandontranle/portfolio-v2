import { useEffect, useState } from 'react';
export const About = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const skills = [
        { icon: "react" },
        { icon: "typescript" },
        { icon: "python" },
        { icon: "csharp" },
        { icon: "nodejs" },
        { icon: "javascript" },
    ];

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-right w-[450px] mt-auto lg:mt-0 ml-auto ${fadeIn ? 'fade-in' : ''}`}>         
            <h1 className="font-barcode text-5xl lg:text-6xl mt-auto mb-4">About</h1>
            <p className="mb-3">I am a Computer Science student at <span className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5] hover:cursor-pointer" onClick={() => window.open("https://www.ucla.edu/")}> UCLA </span> and primarily program in TypeScript or associated JavaScript frameworks (React is my #1).</p>
            
            <p className="mb-3">I have <span className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5]"> 2 years of software development experience </span> from start-ups to instituions like Monterey Peninsula College (MPC) & Iowa State.  <span className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5]"> Fun Fact: </span> I graduated from MPC in high school </p>
            <p className="mb-3"> I am always looking to better myself in this field--aspired to turn ideas into technological realities!</p>
           
            <span className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5]">My Favorite Technologies: </span>
            <div className="flex ml-auto gap-2">
            {skills.map((skill, index) => (
          <span className="flex items-center gap-2 text-lg" key={index}>
            <i
              className={`text-2xl devicon-${
                skill.icon === "express" ||
                skill.icon === "emacs" ||
                skill.icon === "influxdb"
                  ? `${skill.icon}-original`
                  : `${skill.icon}-plain colored`
              } icon-color`}
            ></i>
          </span>
        ))}
        </div>

        </div>
    );
}

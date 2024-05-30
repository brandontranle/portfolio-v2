import { useEffect, useState } from 'react';
export const About = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const skills = [
        { icon: "react" },
        { icon: "typescript" },
        { icon: "javascript" },
        { icon: "python" },
        { icon: "csharp" },
        { icon: "nodejs" },
    ];

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-sm md:text-lg text-right w-[450px] mt-auto lg:mt-0 ml-auto ${fadeIn ? 'fade-in' : ''}`}>         
            <h1 className="font-barcode text-4xl md:text-5xl lg:text-6xl mt-auto md:mb-4">About</h1>
            <p className=" mb-3">I am a Computer Science student at <span className="text-black  dark:text-white font-bold hover:cursor-pointer italic" onClick={() => window.open("https://www.ucla.edu/")}> UCLA </span> and primarily program in TypeScript or JavaScript frameworks.</p>
            <span className="mb-3">
              <p>I have <span className="text-black dark:text-white font-bold"> 2 years of software development experience </span> from start-ups to academic instituions to founding a non-profit </p>
              <p> <span className="text-black font-bold dark:text-white "> Fun Fact: </span> I graduated from <span className="italic hover:cursor-pointer" onClick={() => window.open("https://www.mpusd.net/apps/pages/index.jsp?uREC_ID=1424772&type=d&pREC_ID=2310303")}> Monterey Peninsula College </span> at age 17 </p>
            </span>
            <p className="mb-3"> I am always looking to better myself in this field--aspired to turn product ideas into technological realities!</p>
           
            <span className="text-black dark:text-white font-bold">My Favorite Technologies: </span>
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

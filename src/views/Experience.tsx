import {useState, useEffect, useRef} from "react";


interface Experience {
    title: string;
    role: string;
    description: string[];
    link: string;
    skills: {icon: string}[];
}


const ExperienceCard: React.FC<Experience> = ({title, role, description, skills}) => {
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
            threshold: 0.7 // Adjust this value based on when you want the card to fade in or out
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
        <div ref={cardRef} className={`project-card p-5 pr-0 max-w-[500px] ml-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
        <h1 className="text-4xl mt-auto">{title}</h1>
            <h2 className="text-md">{role}</h2>
            <ul style={{ listStyleType: 'disc' }}>
            {description.map((desc, index) => (
                <li className="text-lg text-left" key={index}>{desc}</li>
            ))}
            </ul>
            <div className="flex flex-row ml-auto items-center gap-2" >
            {skills.map((skill, index) => (
          <span className="flex items-center gap-2 text-lg" key={index}>
            <i
              className={`text-4xl devicon-${
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
        
    )

}


export const Experience = () => {
    const [fadeIn, setFadeIn] = useState(false);

   

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`text-right w-full ml-auto ${fadeIn ? 'fade-in' : 'hidden'} xl:max-h-[365px] flex justify-end`}>     
            <h1 className="font-barcode text-6xl mb-5 mt-auto ml-auto"> Experience</h1>
            <div className="overflow-y-auto experience-container overflow-x-hidden"  >
                <ExperienceCard title="Vitametrics" role="Founder, Software Developer - Jan. 2024 to Present" description={["Associated with 2 Academic Institutions for Beta Testing", "Led the Frontend Development"]} link="https://vitametrics.org/" skills={[{icon: "react"}, {icon: "nodejs"}, {icon: "mongodb"}, {icon: "docker"}, {icon: "express"}, {icon: "typescript"}]}/>
                <ExperienceCard title="Vitametrics" role="Software Developer" description={["Target for researchers--Vitametrics captures data from Fitbit trackers for researchers to export and analyze."]} link="https://vitametrics.org/" skills={[{icon: "react"}, {icon: "nodejs"}, {icon: "mongodb"}, {icon: "docker"}, {icon: "express"}, {icon: "typescript"}]}/>
                <ExperienceCard title="Vitametrics" role="Software Developer" description={["Target for researchers--Vitametrics captures data from Fitbit trackers for researchers to export and analyze."]} link="https://vitametrics.org/" skills={[{icon: "react"}, {icon: "nodejs"}, {icon: "mongodb"}, {icon: "docker"}, {icon: "express"}, {icon: "typescript"}]}/>
            </div>
        </div>
    )
}

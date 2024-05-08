import {useState, useEffect, useRef} from "react";


interface Experience {
    title: string;
    role: string;
    description: string[];
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
        <div ref={cardRef} className={`project-card pr-0 max-w-[500px] ml-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
        <h1 className="text-2xl md:text-4xl">{title}</h1>
            <h3 className="text-md">{role}</h3>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside'}}>
            {description.map((desc, index) => (
                <li className="text-sm md:text-md text-right mb-1" key={index}><span className="relative"> {desc}</span></li>
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
            <h1 className="font-barcode text-5xl lg:text-6xl mb-5 mt-auto ml-auto">Experience</h1>
            <div className="overflow-y-auto experience-container overflow-x-hidden"  >
                <ExperienceCard title="Vitametrics" role="Founder, Software Developer - Jan. 2024 to Present" description={["Associated with 2 academic institutions for product beta testing", "Spearheading the frontend in Typescript where universities can connect Fitbit technology using Fitbit’s Intraday API", "Completed thorough QA testing with Google Lightouse scoring at least a 99 on performance among most pages."]} skills={[{icon: "react"}, {icon: "nodejs"}, {icon: "mongodb"}, {icon: "docker"}, {icon: "express"}, {icon: "typescript"}]}/>
                <ExperienceCard title="Intern Guys" role="Software Engineer Intern - Jan. 2024 to Mar.2024" description={["Optimized C# job search algorithm to 50% faster search time and 75% in job matching accuracy.", "Directed full-stack solutions for a blog and writing interface for the CEO to streamline advice and promote start-ups to users."]} skills={[{icon: "react"}, {icon: "csharp"}, {icon: "mysql"}, {icon: "javascript"}]}/>
                <ExperienceCard title="Monterey Peninsula College" role="Software Developer Intern - June 2023 to Dec.2023" description={["Created PHP and Bootstrap production solutions on a peer-grading website, handling 300 student submissions every semester in SQLite.", "Implemented an optimized algorithm in Python to sort and handle 300 students’ input data and perform the disbursement of 3 project links to each user for peer grading and collecting submissions."]} skills={[{icon: "php"}, {icon: "sqlite"}, {icon: "html5"}, {icon: "css3"}]}/>
                <ExperienceCard title="Hexfork" role="Lead Software Developer Intern - June 2023 to Dec.2023" description={["Managed and led the production of a static React application with 5 interns", "Created an automated Python bot that tracks employee metrics and grades them based on company performance"]} skills={[{icon: "react"}, {icon: "mongodb"}, {icon: "python"}, {icon: "typescript"}]}/>
            </div>
        </div>
    )
}

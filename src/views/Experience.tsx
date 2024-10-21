import {useState, useEffect, useRef} from "react";
import {experiences} from "../const";


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
        <div ref={cardRef} className={`experience-card pr-0 max-w-[500px] ml-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
        <h1 className="text-2xl md:text-3xl">{title}</h1>
            <h3 className="text-md">{role}</h3>
            <ul className="list-disc list-inside lg:list-outside">
            {description.map((desc, index) => (
                <li className="text-xs md:text-md mb-1 text-left" key={index}><span className="relative"> {desc}</span></li>
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
        setFadeIn(true); 
        return () => setFadeIn(false); 
    }, []);
    return (
        <div className={`text-right text-sm md:text-lg w-full ml-auto ${fadeIn ? 'fade-in' : 'hidden'} flex justify-end h-full`}>     
            <h1 className="font-barcode text-4xl md:text-5xl lg:text-6xl md:mb-5 mt-auto ml-auto">Experience</h1>
            <div className="overflow-y-auto experience-container overflow-x-hidden"  >
                {experiences.map((e) => (
                    <ExperienceCard title={e.title} role={e.role} description={e.description} skills={e.skills} />
                ))}
            </div>
        </div>
    )
}

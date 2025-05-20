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
        <div ref={cardRef} className={`experience-card p-5 pr-0  min-w-[400px] lg:min-w-[500px] max-w-[550px] ml-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
        <h1 className="text-2xl md:text-3xl">{title}</h1>
            <h3 className="text-md">{role}</h3>
            <ul className="list-disc list-outside">
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
export const Experience2 = () => {
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
            <h1 className="font-barcode text-4xl md:text-5xl lg:text-6xl mt-auto ml-auto">Experience</h1>
            <div id="projects-container" className="projects-container flex" ref={projectsContainerRef}> 
            {experiences.map((e, index) => (
                <ExperienceCard key={index} {...e} />
            ))}
            </div>
            
        </div>
    );
}
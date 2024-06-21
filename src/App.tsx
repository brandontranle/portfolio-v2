
import {Home} from "./views/Home";
import {About} from "./views/About";
import {Projects} from "./views/Projects";
import {Experience} from "./views/Experience";
import {useState, useEffect} from "react";
import FlowField from "./components/FlowField";
import { setItemWithEvent } from './hooks/localStorageEvents'; // Assuming this is where the enhanced setItem function is exported


import {
  Routes,
  Route,
  Link, useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    console.log("starting theme is", localStorage.getItem('theme') || 'dark');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    toggleTheme(savedTheme);
    applyTheme(savedTheme);

    const handleThemeChange = (event: CustomEvent) => {
      if (event.detail.key === 'theme') {
        const newTheme = event.detail.value;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    window.addEventListener('localStorageChanged', handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('localStorageChanged', handleThemeChange as EventListener);
    };
  }, []);

  const toggleTheme = (newTheme: string) => {
    localStorage.setItem('darkMode', newTheme === 'dark' ? 'true' : newTheme === 'color' ? 'true' : 'false');
    setItemWithEvent('theme', newTheme);
  };

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'dark' || newTheme === 'color') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  return (
    <div id="background" className="bg-secondary dark:bg-darkPrimary h-screen overflow-y-hidden flex-row flex  font-bigCalson w-screen text-black dark:text-primary">
    <FlowField />
      <div id="inner-content" className={`flex-col bg-transparent h-full w-full px-0 py-0 md:p-5 xl:pt-8  xl:px-20 2xl:py-10  inner-content`}>
      <div id="parent" className="flex h-full"> 
      <div id="options" className="hidden xl:flex h-full flex-col rotate-[-180deg] gap-5 mb-5 font-neuzeitRegular w-[25px]">
        <div onClick={() => toggleTheme("light")} className="flex flip-vertical hover:cursor-pointer gap-1 items-center"> Light <div className={`circle ${theme === "light" ? "selected-circle" : ""}`}/> </div>
        <div onClick={() => toggleTheme("dark")} className="flip-vertical hover:cursor-pointer flex gap-1 items-center"> Dark <div className={`circle ${theme === "dark" ? "selected-circle" : ""}`}/>  </div>
        <div onClick={() => toggleTheme("color")} className="flip-vertical hover:cursor-pointer flex gap-1 items-center"> Color <div className={`circle ${theme === "color" ? "selected-circle" : ""}`}/>  </div>

      </div>
        <div className="content-area p-5 md:p-8 lg:p-10 relative z-10 md:pb-2 h-full w-full flex flex-col before:hidden md:before:block font-neuzeitRegular flex-shrink-0">
          <h1 id="name" className="text-3xl mb-0 md:text-5xl xl:text-7xl md:mb-5 font-neuzeitBold">Brandon Le</h1>
          <h2 id="title" className="text-xs mb-0 md:text-2xl xl:text-4xl md:mb-3">S O F T W A R E &nbsp; E N G I N E E R</h2>
          {/*<p className="hidden md:text-lg md:block md:mb-1"> Listened to Enchanted, by Taylor Swift, 8 hours ago. </p>*/}
          <nav className="flex flex-col gap-2 md:gap-0 max-w-[100px] mt-4 md:mt-0">
            <Link className={`redirect-item text-sm md:text-lg ${location.pathname === '/' ? 'selected' : ''}`} to="/">Home</Link>
            <Link className={`redirect-item text-sm md:text-lg ${location.pathname === '/about' ? 'selected' : ''}`} to="/about">About</Link>
            <Link className={`redirect-item text-sm md:text-lg ${location.pathname === '/projects' ? 'selected' : ''}`} to="/projects">Projects</Link>
            <Link className={`redirect-item text-sm md:text-lg ${location.pathname === '/experience' ? 'selected' : ''}`} to="/experience">Experience</Link>
          </nav>
          <div id="page-content" className="h-full flex mb-5 md:mb-0 overflow-y-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/*" element={<Home />} />
              <Route path="/resume" element={<a href="https://brandonle.dev/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>} />
          </Routes>
        </div>
        <span className="text-xs mt-auto md:text-sm xl:hidden flex flex-row">
        <span className="mr-auto"> 
         © 2024 Brandon Le 
         </span>
        <div className="flex flex-row gap-3 ml-auto font-neuzeitRegular">
        <div onClick={() => toggleTheme("light")} className="flex hover:cursor-pointer gap-1 items-center font-neuzeitRegular"> Light <div className={`circle ${theme === "light" ? "selected-circle" : ""}`}/> </div>
        <div onClick={() => toggleTheme("dark")} className="hover:cursor-pointer flex gap-1 items-center font-neuzeitRegular"> Dark <div className={`circle ${theme === "dark" ? "selected-circle" : ""}`}/>  </div>
        <div onClick={() => toggleTheme("color")} className="hover:cursor-pointer flex gap-1 items-center font-neuzeitRegular"> Color <div className={`circle ${theme === "color" ? "selected-circle" : ""}`}/>  </div>
        </div>
      </span>

        </div>
        

        </div>
        <span className="hidden xl:block font-neuzeitRegular ml-5" >
         © 2024 Brandon Le | All Rights Reserved
        </span>
      </div>
      
 
    </div>
  )
}

export default App

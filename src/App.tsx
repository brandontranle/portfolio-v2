
import {Home} from "./views/Home";
import {About} from "./views/About";
import {Projects} from "./views/Projects";
import {Experience} from "./views/Experience";
import {useState, useEffect} from "react";
import FlowField from "./components/FlowField";
import { setItemWithEvent } from './hooks/localStorageEvents';


import {
  Routes,
  Route,
  Link, useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [colorMode, setColorMode] = useState(localStorage.getItem('colorMode') === 'true' ? true : false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColorMode = localStorage.getItem('colorMode') === 'true' ? true : false;
    setTheme(savedTheme);
    toggleTheme(savedTheme);
    applyTheme(savedTheme);
    setColorMode(savedColorMode);

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
    localStorage.setItem('darkMode', newTheme === 'dark' ? 'true' : 'false');
    setItemWithEvent('theme', newTheme);
  };

  const toggleColorMode = () => {
    localStorage.setItem('colorMode', colorMode ? 'false' : 'true');
    setItemWithEvent('colorMode', colorMode ? 'false' : 'true');
    setColorMode(!colorMode);
  }

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'dark') {
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
        <div onClick={() => toggleTheme("light")} className="flex flip-vertical hover:cursor-pointer gap-1 items-center mode-option"> Light <div className={`circle ${theme === "light" ? "selected-circle" : ""}`}/> </div>
        <div onClick={() => toggleTheme("dark")} className="mode-option flip-vertical hover:cursor-pointer flex gap-1 items-center"> Dark <div className={`circle ${theme === "dark" ? "selected-circle" : ""}`}/>  </div>
        <div onClick={() => toggleColorMode()} className="mode-option flip-vertical hover:cursor-pointer flex gap-1 items-center"> Color <div className={`circle ${colorMode ? "color-selected" : "color-unselected"}`}/>  </div>
      </div>
        <div className="content-area p-5 md:p-8 lg:p-10 relative z-10 md:pb-2 h-full w-full flex flex-col before:hidden md:before:block font-neuzeitRegular flex-shrink-0">
          <h1 id="name" className="text-3xl mb-0 md:text-5xl xl:text-7xl md:mb-3 font-neuzeitBold"> <a href="/"> Brandon Le</a> </h1>
          <h2 id="title" className="text-xs mb-0 md:text-2xl xl:text-4xl md:mb-3">S E C U R I T Y &nbsp; E N G I N E E R</h2>
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
        <div onClick={() => toggleColorMode()} className="hover:cursor-pointer flex gap-1 items-center font-neuzeitRegular"> Color <div className={`circle ${colorMode === true ? "color-selected" : "color-unselected"}`}/>  </div>
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


import {Home} from "./views/Home";
import {About} from "./views/About";
import {Projects} from "./views/Projects";
import {Experience} from "./views/Experience";
import {useState, useEffect} from "react";

import {
  Routes,
  Route,
  Link, useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('darkMode', newTheme === 'dark' ? 'true' : 'false')
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  return (
    <div id="background" className="bg-secondary dark:bg-darkPrimary h-screen overflow-y-hidden flex-row flex text-primary font-bigCalson w-screen">
    <svg
    className="hidden lg:mx-20 lg:block"
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={860}
    fill="none"
    >
    <path stroke="#807A76" strokeWidth={5} d="M3 0v1080M46 0v1080" />
  </svg>
      <div id="inner-content" className={`flex flex-col ${theme === "dark" ? "bg-noise" : "light-bg-noise"} h-full w-full px-0 py-0 md:p-5 xl:pt-8  xl:px-32 2xl:pt-10 2xl:px-40 inner-content md:shadow-custom`}>
      <div className="flex-row flex h-full"> 
      <div id="options" className="hidden xl:flex h-full flex-col rotate-[-180deg] gap-5 mb-5">
        <div onClick={() => toggleTheme("light")} className="flex flip-vertical hover:cursor-pointer gap-1 items-center"> Light <div className={`circle ${theme === "light" ? "selected-circle" : ""}`}/> </div>
        <div onClick={() => toggleTheme("dark")} className="flip-vertical hover:cursor-pointer flex gap-1 items-center"> Dark <div className={`circle ${theme === "dark" ? "selected-circle" : ""}`}/>  </div>
      </div>
        <div className="content-area p-5 md:p-8 lg:p-10 relative z-10 md:pb-2 h-full w-full flex flex-col before:hidden md:before:block">
          <h1 id="name" className=" text-5xl mb-3 xl:text-7xl md:mb-5">Brandon Le</h1>
          <h2 id="title" className="text-lg mb-3 md:text-2xl xl:text-4xl md:mb-3">S O F T W A R E &nbsp; E N G I N E E R</h2>
          <p className="text-md md:text-lg mb-3"> Listened to Enchanted, by Taylor Swift, 8 hours ago. </p>
          <nav className="flex flex-col">
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/' ? 'selected' : ''}`} to="/">Home</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/about' ? 'selected' : ''}`} to="/about">About</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/projects' ? 'selected' : ''}`} to="/projects">Projects</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/experience' ? 'selected' : ''}`} to="/experience">Experience</Link>
          </nav>
          <div id="page-content" className="h-full flex mb-5 md:mb-0 overflow-y-hidden max-w-[880px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience/>} />
              
          </Routes>
        </div>
        <span className="text-sm mt-auto xl:hidden flex flex-row">
        <span className="mr-auto"> 
         © 2023 Brandon Le | All Rights Reserved 
         </span>
        <div className="flex flex-row gap-3 ml-auto">
        <div onClick={() => toggleTheme("light")} className="flex hover:cursor-pointer gap-1 items-center text-sm"> Light <div className={`circle ${theme === "light" ? "selected-circle" : ""}`}/> </div>
        <div onClick={() => toggleTheme("dark")} className="hover:cursor-pointer flex gap-1 items-center text-sm"> Dark <div className={`circle ${theme === "dark" ? "selected-circle" : ""}`}/>  </div>
        </div>
      </span>

        </div>
        

        </div>
        <span className="hidden xl:block md:mt-5">
         © 2023 Brandon Le | All Rights Reserved
        </span>
      </div>
      
  <svg
    className="hidden lg:mx-20 lg:block"
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={860}
    fill="none"
    >
    <path stroke="#807A76" strokeWidth={5} d="M3 0v1080M46 0v1080" />
</svg>
    </div>
  )
}

export default App

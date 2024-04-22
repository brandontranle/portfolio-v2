

import {Home} from "./views/Home";
import {About} from "./views/About";
import {Projects} from "./views/Projects";
import {Info} from "./views/Info";


import {
  Routes,
  Route,
  Link, useLocation
} from 'react-router-dom';



function App() {
  const location = useLocation();
  return (
    <div id="background" className="bg-primary h-screen overflow-y-hidden flex-row flex text-primary font-bigCalson">
    <svg
    className="mx-20"
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={860}
    fill="none"
    >
    <path stroke="#807A76" strokeWidth={5} d="M3 0v1080M46 0v1080" />
  </svg>
      <div id="inner-content" className="flex flex-col bg-secondary h-full w-full py-10 px-40 inner-content">
        <div className="content-area p-10 relative z-10 h-full flex flex-col ">
          <h1 id="name" className="text-7xl mb-5">Brandon Le</h1>
          <h2 id="title" className="text-4xl mb-5">S O F T W A R E &nbsp; E N G I N E E R</h2>
          <p className="text-lg"> Listened to Enchanted, by Taylor Swift, 8 hours ago. </p>
          <nav className="flex flex-col">
            <Link className={`redirect-item text-lg ${location.pathname === '/' ? 'selected' : ''}`} to="/">Home</Link>
            <Link className={`redirect-item text-lg ${location.pathname === '/about' ? 'selected' : ''}`} to="/about">About</Link>
            <Link className={`redirect-item text-lg ${location.pathname === '/projects' ? 'selected' : ''}`} to="/projects">Projects</Link>
            <Link className={`redirect-item text-lg ${location.pathname === '/info' ? 'selected' : ''}`} to="/info">Info</Link>
          </nav>
          <div id="page-content" className=" ml-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/info" element={<Info />} />
          </Routes>
        </div>
        </div>
      </div>
  <svg
    className="mx-20"
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

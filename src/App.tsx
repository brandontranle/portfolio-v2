import {lazy, Suspense} from 'react';

const Home = lazy(() => import('./views/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./views/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./views/Projects').then(module => ({ default: module.Projects })));
const Info = lazy(() => import('./views/Info').then(module => ({ default: module.Info })));
import {
  Routes,
  Route,
  Link, useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div id="background" className="bg-primary h-screen overflow-y-hidden flex-row flex text-primary font-bigCalson w-screen">
    <svg
    className="hidden lg:mx-20 lg:block"
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={860}
    fill="none"
    >
    <path stroke="#807A76" strokeWidth={5} d="M3 0v1080M46 0v1080" />
  </svg>
  
      <div id="inner-content" className="flex flex-col bg-noise h-full w-full px-0 py-0 md:p-5 xl:pt-8  xl:px-32 2xl:pt-10 2xl:px-40 inner-content md:shadow-custom">
        <div className="content-area p-5 md:p-8 lg:p-10 relative z-10 md:pb-2 h-full flex flex-col before:hidden md:before:block">
          <h1 id="name" className=" text-5xl mb-3 xl:text-7xl md:mb-5">Brandon Le</h1>
          <h2 id="title" className="text-lg mb-3 md:text-2xl xl:text-4xl md:mb-5">S O F T W A R E &nbsp; E N G I N E E R</h2>
          <p className="text-md md:text-lg mb-3"> Listened to Enchanted, by Taylor Swift, 8 hours ago. </p>
          <nav className="flex flex-col">
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/' ? 'selected' : ''}`} to="/">Home</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/about' ? 'selected' : ''}`} to="/about">About</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/projects' ? 'selected' : ''}`} to="/projects">Projects</Link>
            <Link className={`redirect-item text-md md:text-lg ${location.pathname === '/info' ? 'selected' : ''}`} to="/info">Info</Link>
          </nav>
          <div id="page-content" className="h-full flex mb-10 md:mb-0 ">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/info" element={<Info />} />
          </Routes>
          </Suspense>
        </div>
        <span className="text-sm mt-auto xl:hidden block">
         © 2023 Brandon Le | All Rights Reserved
        </span>
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

import { useEffect, useState } from 'react';

export const Home = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); 
        return () => setFadeIn(false); 
    }, []);
    return (
        <div className={`text-right w-[450px] ml-auto text-sm md:text-lg  mt-auto lg:mt-0 ${fadeIn ? 'fade-in' : ''}`}>            
        <h1 className="font-barcode text-4xl md:text-5xl lg:text-6xl md:mb-5 mt-auto ml-auto"> Home</h1>
            <p className="mb-3"> <span className="dot"></span> <span className="text-black  dark:text-white  font-bold"> Status: </span> <a href="https://vitametrics.org"> Operating Vitametrics for alpha testing!  </a> </p>
            <p className="mb-3"> <span className="font-bold text-black  dark:text-white"> Outside of Work: </span> Runner, Pianist, Tech Enthusiast, Gamer.</p>
            <p className="mb-3"> <span className="font-bold text-black  dark:text-white "> A Quote To Describe Me: </span> "Run fast, still last." </p>
                <span onClick={() => window.open("https://www.linkedin.com/in/brandon-tran-le/")} className="url-link">LinkedIn</span>
                <span onClick={() => window.open("https://github.com/brandontranle")} className="url-link">GitHub</span>
                <span onClick={() => window.open("https://brandon-le-resume.tiiny.site/")}  className="url-link">Resume</span>
                <a href="mailto:brandonle831@gmail.com"  className="url-link">Email </a>

        </div>
    );
}
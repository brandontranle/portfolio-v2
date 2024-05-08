import { useEffect, useState } from 'react';

export const Home = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); 
        return () => setFadeIn(false); 
    }, []);
    return (
        <div className={`text-right w-[400px] ml-auto ${fadeIn ? 'fade-in' : ''}`}>            
        <h1 className="font-barcode text-6xl mb-5 mt-auto ml-auto"> Home</h1>
            <p> <a className="dot"></a> <a className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5]"> Status: </a> <a href="https://vitametrics.org"> Operating Vitametrics for beta testing  </a> </p>
            <br/>
            <p>Runner by day, Software Developer by night, Swiftie 24/7.</p>
            <br/>
            <p> <a className="text-[#302B27] opacity-[0.8] dark:text-white dark:opacity-[0.5]"> A Quote To Describe Me: </a> "Run fast, still last" </p>

            <br/>
            <a href="https://www.linkedin.com/in/brandon-tran-le/" className="url-link">LinkedIn</a>
                <a href="https://github.com/brandontranle" className="url-link">GitHub</a>
                <a href="https://resume.brandonle.dev" className="url-link">Resume</a>
                <a href="mailto:brandonle831@gmail.com"  className="url-link">Email </a>

        </div>
    );
}
import { useEffect, useState } from 'react';
export const Info = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-right w-[200px]  ml-auto  ${fadeIn ? 'fade-in' : ''}`}>         
            <h1 className="font-barcode text-6xl mb-5 mt-auto">Info</h1>
            
            <a href="https://www.linkedin.com/in/brandon-tran-le/" className="redirect-item">LinkedIn</a>
                <br/>
                <a href="https://github.com/brandontranle" className="redirect-item">GitHub</a>
                <br/>
                <a href="https://resume.brandonle.dev" className="redirect-item">Resume</a>
                <br/>
                <a href="mailto:brandonle831@gmail.com"  className="redirect-item">Email </a>
                <br/>

                
                
        </div>
    );
}
import { useEffect, useState } from 'react';
export const About = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-right w-[400px]  ml-auto ${fadeIn ? 'fade-in' : ''}`}>         
            <h1 className="font-barcode text-6xl mb-5 mt-auto">About</h1>
            <p>I am a Computer Science student at UCLA and primarily program in TypeScript or associated JavaScript frameworks.</p>
            <br/>
            <p>I have roughly 2 years of software development experience, starting from start-ups to highly-renowed colleges such as Monterey Peninsula College. <br/>(Fun Fact: I graduated from here in high school) </p>
            <br/>
            
            <p> I am always looking to better myself in this field--making aspiring contributions to what could be the next application you will use!</p>

        </div>
    );
}

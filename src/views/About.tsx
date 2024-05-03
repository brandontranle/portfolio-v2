import { useEffect, useState } from 'react';
export const About = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-right w-[200px]  ml-auto ${fadeIn ? 'fade-in' : ''}`}>         
            <h1 className="font-barcode text-6xl mb-5 mt-auto">About</h1>
            <p>This is a simple example of a React app built with Vite.</p>
        </div>
    );
}

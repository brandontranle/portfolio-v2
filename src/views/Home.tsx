import { useEffect, useState } from 'react';

export const Home = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect when the component mounts
        return () => setFadeIn(false); // Clean up the state when the component unmounts
    }, []);
    return (
        <div className={`hidden text-right w-[200px] ${fadeIn ? 'fade-in' : ''}`}>            
        <h1 className="font-barcode text-6xl mb-5 mt-auto"> Home</h1>
            <p>Runner by day, Software Developer by night, Swiftie 24/7. 
                <br/>
                <br/>

                I believe every interaction in Software should be a meaningful experience. 
                <br/>
                <br/>

                I express my thoughts through my digital creations, with always the intention of making the digital world better. </p>
        </div>
    );
}
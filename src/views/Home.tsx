import { useEffect, useState } from 'react';

export const Home = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); 
        return () => setFadeIn(false); 
    }, []);
    return (
        <div className={`text-right w-[200px] ml-auto ${fadeIn ? 'fade-in' : ''}`}>            
        <h1 className="font-barcode text-6xl mb-5 mt-auto ml-auto"> Home</h1>
            <p>Runner by day, Software Developer by night, Swiftie 24/7. 
                <br/>
                <br/>
                I express my thoughts through my digital creations, with always the intention of making the digital world better. </p>
        </div>
    );
}
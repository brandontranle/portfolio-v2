import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import FlowFieldSketch from './FlowFieldSketch';

const FlowFieldComponent: React.FC = () => {
    const sketchRef = useRef<HTMLDivElement>(null);
    const sketchInstance = useRef<p5 | null>(null); // This ref will hold the sketch instance

    useEffect(() => {
        if (sketchRef.current && !sketchInstance.current) {
            // Only initialize if there's not already an instance
            console.log("instance does not exist");
            sketchInstance.current = new p5(FlowFieldSketch, sketchRef.current);
        }

        return () => {
            // Cleanup the sketch on component unmount
            if (sketchInstance.current) {
                sketchInstance.current.remove();
                sketchInstance.current = null;
            }
        };
    }, []);

    return <div className="absolute overflow-y-hidden" ref={sketchRef} />;
};

export default FlowFieldComponent;
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import FlowFieldSketch from './FlowFieldSketch';

const FlowFieldComponent: React.FC = () => {
    const sketchRef = useRef<HTMLDivElement>(null);
    const sketchInstance = useRef<p5 | null>(null); // This ref will hold the sketch instance

    useEffect(() => {
        if (sketchRef.current && !sketchInstance.current) {
            sketchInstance.current = new p5(FlowFieldSketch, sketchRef.current);
        }

        return () => {
            if (sketchInstance.current) {
                sketchInstance.current.remove();
                sketchInstance.current = null;
                console.log("Sketch removed!");
            }
        };
    }, []);

    return <div id="flow-field" className="absolute overflow-y-hidden md:h-screen md:w-screen" ref={sketchRef} />;
};

export default FlowFieldComponent;
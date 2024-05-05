import { useState, useEffect } from "react";

export const Circle = ({ color, number, x, y }) => {
    const [isDarkModeActivated, setDarkModeActivated] = useState(false);
    useEffect(() => {
        let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(isDarkMode){
            setDarkModeActivated(true);
        }else{
            setDarkModeActivated(false);
        }
    }, [])

    return <>
        <div style={{ backgroundColor: color, height: '100px', width: '100px', borderRadius: '100%', position: 'absolute', left: `${x - 50}px`, top: `${y - 50}px`, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: isDarkModeActivated ? 'white' : 'black' }}>
            {number}
        </div>
    </>
}
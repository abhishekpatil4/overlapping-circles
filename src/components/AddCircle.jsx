import { useState, useEffect } from "react"

export const AddCircle = () => {
    const [cord, setCord] = useState({ x: 0, y: 0 });
    const handleClick = ({ clientX, clientY }) => {
        setCord({ x: clientX, y: clientY });
    }
    return <>
        <div style={{ border:"2px solid white" ,height: '95vh', width: "98vw", marginLeft:'1vw' }} onClick={(event) => handleClick(event)}>
            Click Anywhere!
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <span>x: {cord.x}</span>
                <span>y: {cord.y}</span>
            </div>
        </div>
    </>
}
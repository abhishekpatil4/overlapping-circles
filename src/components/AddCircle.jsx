import { useState, useEffect } from "react"
import { Circle } from "./Circle";

export const AddCircle = () => {
    const [cords, setCords] = useState([]);
    const handleClick = ({ clientX, clientY }) => {
        setCords([...cords, { x: clientX, y: clientY }]);
        console.log("cords: ", cords);
    }
    return <>
        <div style={{ height: '100vh', width: "100vw" }} onClick={(event) => handleClick(event)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    cords?.map((cord, idx) =>
                        <Circle color={'red'} number={4} x={cord.x} y={cord.y} />
                    )
                }
            </div>
        </div>
    </>
}
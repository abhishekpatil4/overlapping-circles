import { useState, useEffect } from "react"
import { Circle } from "./Circle";

const colorFor = ['lightskyblue', 'limegreen', 'lightgoldenrodyellow', 'tomato', 'plum', 'mistyrose', 'silver', 'chocolate', 'honeydew', 'lightpink'];

function distanceBetweenCircles(x1, y1, r1, x2, y2, r2) {
    const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return d - (r1 + r2);
}

export const AddCircle = () => {
    const [cords, setCords] = useState([]);

    const updateCircles = (cords) => {
        //need to check if new circle overlaps with exiting ones, if so increase the overlapping count and change its color
        let tempCords = [...cords]; //changes are made in this tempCords variable and the update to main
        let latestCords = tempCords[tempCords.length - 1] //last element -> ie the latest element 
        for (let i = 0; i < cords.length - 1; i++) {
            if (!tempCords[i].overlappedWith.includes(latestCords.id) && distanceBetweenCircles(latestCords.x, latestCords.y, 50, tempCords[i].x, tempCords[i].y, 50) < 0) {
                tempCords[i].num++;
                tempCords[i].overlappedWith.push(latestCords.id); //adding the id of new circle 
                latestCords.num++; //incrementing the overlapped circles count
            }
        }
        setCords(tempCords);
    }

    const handleClick = ({ clientX, clientY }) => {
        let newCircle = {
            id: cords.length + 1,
            x: clientX,
            y: clientY,
            num: 0,
            overlappedWith: [],
        };
        // Passing a callback function to setCords to ensure we're working with the updated state
        setCords((prevCords) => {
            const updatedCords = [...prevCords, newCircle];
            if (updatedCords.length > 1) {
                updateCircles(updatedCords);
            }
            if (updatedCords.length > 10) {
                setCords([]);
            }
            return updatedCords;
        });
    };
    return <>
        <div style={{ height: '100vh', width: "100vw" }} onClick={(event) => handleClick(event)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>Tap anywhere!</h1>
                {
                    cords && cords.map((cord, idx) =>
                        <Circle key={idx} color={colorFor[cord.num]} number={cord.num} x={cord.x} y={cord.y} />
                    )
                }
            </div>
        </div>
    </>
}
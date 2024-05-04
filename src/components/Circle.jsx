export const Circle = ({ color, number, x, y }) => {
    return <>
        <div style={{ backgroundColor: color, height: '100px', width: '100px', borderRadius: '100%', position:'absolute', left:`${x-50}px`, top:`${y-50}px`, display:'flex', justifyContent:'center', alignItems:'center'}}>
            {number}
        </div>
    </>
}
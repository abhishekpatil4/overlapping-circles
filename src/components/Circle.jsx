export const Circle = ({ color, number }) => {
    return <>
        <div style={{ backgroundColor: color, height: '100px', width: '100px', borderRadius: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            {number}
        </div>
    </>
}
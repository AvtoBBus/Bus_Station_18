

const Wall = (props) => {
    return <>
        <svg width="10" height={props.height} viewBox={`0 0 10 ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" rx="6" fill="#D0D0D0" fillOpacity="0.6" />
        </svg>
    </>
}

export default Wall;
import CardBackground from "./CardBackground"


import style from "../style/Card.css"


const Card = ({ children, style }) => {
    return <>
        <div className="card" style={{ ...style }}>
            <CardBackground style={style} />
            {children}
        </div>
    </>
}

export default Card;
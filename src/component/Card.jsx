import CardBackground from "./CardBackground"


import style from "../style/Card.css"


const Card = ({ children, className, bgName }) => {
    return <>
        <div className={className} style={{ ...style }}>
            <CardBackground className={bgName} style={style} />
            {children}
        </div>
    </>
}

export default Card;
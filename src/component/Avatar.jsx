import avatar from "../data/avatar.jpg"
import paperClip from "../data/paperСlip.png"

import "../style/Avatar.css"

const Avatar = () => {
    return <>
        <div className="imgContainer">
            <img src={avatar} className="avatarImg" />
        </div>
        <img src={paperClip} className="paperClip" />

        <ul className="underImgInfo">
            <li>&#128161; 20 лет </li>
            <li>&#127968; г. Самара</li>
        </ul>
    </>
}

export default Avatar;
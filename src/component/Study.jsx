import SkillsListElem from "./SkillsListElem";
import complete from "../data/complete.png"

import "../style/Study.css"

const Study = () => {
    return <>
        <SkillsListElem
            skill="Самарский национальный исследовательский университет имени академика С.П. Королёва"
            complete={complete}
            style={{
                position: "absolute",
                top: "25vh",
                left: "-17.9vw",
                width: "14.5vw",
                fontSize: "calc((1.25vh + 1.25vw) / 2)"
            }}
        />
        <p className="directionOfStudy">
            <b>Направление:</b> Информационная безопасность автоматизированных систем (2021 - 2026 гг.)
        </p>
    </>
}


export default Study;
import SkillsListElem from "./SkillsListElem";
import complete from "../data/complete.png"

import "../style/Study.css"

const Study = () => {
    return <>
        <div className="study">
            <SkillsListElem
                skill="Самарский национальный исследовательский университет имени академика С.П. Королёва"
                complete={complete}
            />
            <p className="directionOfStudy">
                <b>Направление:</b> Информационная безопасность автоматизированных систем (2021 - 2026 гг.)
            </p>
        </div>
    </>
}


export default Study;
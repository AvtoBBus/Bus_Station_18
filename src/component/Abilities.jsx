import SkillsListElem from "./SkillsListElem";
import complete from "../data/complete.png"

import "../style/Abilities.css"
import "../style/SkillsListElem.css"


const Abilities = () => {

    const abils = [
        { id: 0, str: "Ответственность" },
        { id: 1, str: "Тайм-менеджмент" },
        { id: 2, str: "Коммуникабельность" },
        { id: 3, str: "Быстрая обучаемость" },
        { id: 4, str: "Упорство" },
        { id: 5, str: "Работа в команде" },
    ];


    return <>
        <div className="abilityList">
            <ul>
                {abils.map((abil) => {
                    return <li>
                        <SkillsListElem key={abil.id} skill={abil.str} complete={complete} />
                    </li>
                })}
            </ul>
        </div>
    </>
}

export default Abilities;
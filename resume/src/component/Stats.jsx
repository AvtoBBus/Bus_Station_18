import "../style/Stats.css"
import SkillsListElem from "./SkillsListElem";

import complete from "../data/complete.png"
import qr from "../data/qr.jpg"

const Stats = () => {

    const skills = [
        { id: 0, str: "HTML:5, CSS3" },
        { id: 1, str: "JavaScript" },
        { id: 2, str: "React" },
        { id: 3, str: "MyProjects:" },
    ];

    return <>
        <div className="statsList">Профессиональные <br /> навыки:
            <ul>
                {skills.map((skill) => {
                    return <li>
                        <SkillsListElem key={skill.id} skill={skill.str} complete={complete} />
                    </li>
                })}
            </ul>
            <ul>
                <li><SkillsListElem key={0} skill={<a href="https://github.com/AvtoBBus/Bus_Station_18">&#128187;thisResume</a>} style={{ marginTop: "-10px", marginLeft: "45px" }} /></li>
                <li><SkillsListElem key={1} skill={<a href="https://github.com/AvtoBBus/Bus_Station_16">&#128187;Expenses</a>} style={{ marginLeft: "45px" }} /></li>
            </ul>

            <SkillsListElem skill="GitHub:" complete={complete} style={{ position: "relative", top: "-17.5vh", left: "12vw" }} children={<a href="https://github.com/AvtoBBus">AvtoBBus</a>} />
            <img src={qr} style={{ position: "relative", top: "-15vh", left: "14vw", maxWidth: "130px", maxHeight: "130px", boxShadow: "5px 5px 20px black" }} />
        </div></>
}


export default Stats;
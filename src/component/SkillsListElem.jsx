import "../style/SkillsListElem.css"

const SkillsListElem = (props) => {
    return <>
        <div className="skillsListElem" style={{ ...props.style }}>
            {props.complete && <img src={props.complete} />}
            <div style={{ backgroundColor: "#ffffff00", }}>{props.skill}</div>
            {props.children}
        </div >
    </>
}

export default SkillsListElem;
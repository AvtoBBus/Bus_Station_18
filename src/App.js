import Card from './component/Card';
import Wall from "./component/Wall";
import Lines from "./component/Lines";
import Stats from "./component/Stats";
import Avatar from "./component/Avatar";
import Study from './component/Study';
import Abilities from './component/Abilities';
import FooterStr from './component/FooterStr';

import './style/App.css';
import "./style/CardAbout.css";

import paperClip2 from "./data/paperClip2.png"


function App() {

  return <>
    <div className='main'>
      <div className="centerContainer">
        <Card className="card" bgName="background">
          <div className="cardHead">
            <span className="name">Землянов Владимир</span>
          </div>
          <div className="cardBody">
            <div className="job">
              <div className="left">Front-end<br />Developer</div>
              <Wall height={100} />
              <div className="right">React<br />Developer</div>
            </div>
          </div>

          <div className='linesContainer' >
            <Lines style={{ position: "absolute", top: "13.5vh", left: "5px", backgroundColor: "#ffffff00" }} />
          </div>
          <Stats />
          <Avatar />
        </Card>


        <Card className="cardAbout" bgName="backgroundAbout">
          <div className="cardHeadAbout" >
            <span className="nameAbout">О себе</span>
          </div>
          <div className="cardBodyAbout">
            <div className="about">
              <div className="left">Образование</div>
              <Wall height="27vh" />
              <div className="right">Гибкие навыки</div>
            </div>
          </div>

          <div className='linesContainerAbout' >
            <Lines style={{ position: "absolute", top: "13.5vh", left: "-380px", backgroundColor: "#ffffff00" }} />
          </div>
          <Study />
          <Abilities />
          <FooterStr />
          <img src={paperClip2} className="paperClip2" />
        </Card>


      </div>
    </div >
  </>
}

export default App;

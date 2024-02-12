import Card from './component/Card';
import Wall from "./component/Wall";
import Lines from "./component/Lines";
import Stats from "./component/Stats";
import Avatar from "./component/Avatar";
import Study from './component/Study';
import Abilities from './component/Abilities';
import FooterStr from './component/FooterStr';

import './style/App.css';

import paperClip2 from "./data/paperClip2.png"


function App() {
  return <>
    <div className='main'>
      <div className="centerContainer">
        <Card>
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


          <Lines style={{ position: "absolute", top: "13.5vh", left: "5px", backgroundColor: "#ffffff00" }} />
          <Stats />
          <Avatar />
        </Card>


        <Card style={{ position: "absolute", top: "55vh", left: "20vw" }}>
          <div className="cardHead" >
            <span className="name" style={{ margin: "0 5vw" }}>О себе</span>
          </div>
          <div className="cardBody">
            <div className="about">
              <div className="left">Образование</div>
              <Wall height="27vh" />
              <div className="right">Гибкие навыки</div>
            </div>
          </div>


          <Lines style={{ position: "absolute", top: "13.5vh", left: "-380px", backgroundColor: "#ffffff00" }} />
          <Study />
          <Abilities />
          <FooterStr />
          <img src={paperClip2} className="paperClip2" />
        </Card>


      </div>
    </div>
  </>
}

export default App;

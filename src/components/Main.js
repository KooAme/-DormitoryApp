import React from 'react';
import './Css/Main.css';
import ManagerPage from './Main/ManagerPage';
import AsRequest from './Main/AsRequest';
import GymReser from './Main/GymReser';
import OverNight from './Main/OverNight';
import ShuttleManager from './Main/ShuttleManager';
import ShuttleBus from './Main/ShuttleBus';
import MenuPlanner from './Main/MenuPlanner';
import DayOff from './Main/DayOff';
import UserManager from './Main/UserManager';


function Main(props) {
  let mode = props.mode;

  const modes = {
    ManagerPage: <ManagerPage />,
    AsRequest: <AsRequest />,
    GymReser: <GymReser />,
    OverNight: <OverNight />,
    ShuttleManager: <ShuttleManager />,
    MenuPlanner: <MenuPlanner />,
    ShuttleBus: <ShuttleBus />,
    DayOff: <DayOff />,
    UserManager: <UserManager />,
  };
  const  text= {
    ManagerPage: "관리자", 
    AsRequest: "A/S",
    GymReser: "헬스",
    OverNight: "외박",
    ShuttleManager: "셔틀버스",
    MenuPlanner: "식단표",
    ShuttleBus:"셔틀버스",
    DayOff: "휴일",
    UserManager: "사용자관리",
  };

  return (
    <div >
      { <span className='mainN'style={{
          color: 'white',
          display: 'flex',
          fontSize: '4vh',
          textAlign:"center",
          textIndent:'2vh',
          verticalAlign: 'middle',
        }}>
        {text[mode]}
      </span> }
      {modes[mode]}
    </div>
  );
}

export default Main;

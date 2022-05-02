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

  return (
    <div className='main' className='mainOver'>
      {modes[mode]}
    </div>
  );
}

export default Main;

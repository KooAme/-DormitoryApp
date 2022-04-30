import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Tail from './components/Tail';
import Login from './components/Login';
import Header from './components/Header';
import ManagerPage from './components/Main/ManagerPage';
import AsRequest from './components/Main/AsRequest';
import Gym from './components/Main/GymReser';
import OverNight from './components/Main/OverNight';
import ShuttleManager from './components/Main/ShuttleManager';
import ShuttleBus from './components/Main/ShuttleBus';
import MenuPlanner from './components/Main/MenuPlanner';
import DayOff from './components/Main/DayOff';
import UserManager from './components/Main/UserManager';

function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [mode, setMode] = useState('Login');
  const [menu, setMenu] = useState(0);
  const menus = [
    'A/S',
    'Gym',
    'OverNight',
    'busReservation',
    'MenuPlanner',
    'ShuttleBus',
    'DayOff',
    'User',
  ];
  function clickButton(e) {
    setIsLogin(true);
    setMode('FirstDp');
  }
  function clickMenu2(e) {
    setMode(menus[menu]);
  }

  if (!isLogin) {
    return (
      <>
        <Header mode={mode}></Header>
        <Login button={clickButton}></Login>
        <Tail></Tail>
      </>
    );
  } else {
    return (
      <div>
        <Header mode={mode}></Header>
        <Menu menu={clickMenu2}></Menu>
        {/* <ManagerPage></ManagerPage> */}
        {/* <AsRequest></AsRequest> */}
        {/* <Gym></Gym> */}
        {/* <OverNight></OverNight> */}
        {/* <ShuttleManager></ShuttleManager> */}
        {/* <ShuttleBus></ShuttleBus> */}
        {/* <MenuPlanner></MenuPlanner> */}
        {/* <DayOff></DayOff> */}
        <UserManager></UserManager>
        <Tail></Tail>
      </div>
    );
  }
}

export default App;

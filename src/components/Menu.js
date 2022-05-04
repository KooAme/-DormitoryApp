import React, { useState } from 'react';
import './Css/Menu.css';

function Menu(props) {
  const ms = {
    ManagerPage: 'Menu',
    AsRequest: 'A/S',
    GymReser: '헬스',
    OverNight: '외박',
    ShuttleManager: '셔틀 버스',
    MenuPlanner: '식단표',
    ShuttleBus: '버스 시간표',
    DayOff: '휴일',
    UserManager: '사용자',
  };
  const [B1, setB1] = useState('▶ 예약관리');
  const [B2, setB2] = useState('▶ 생활관관리');

  function ClickMenu() {
    const qs =
      document.getElementsByClassName('MenuDisappear');
    if (qs[0].style.display === 'none') {
      qs[0].style.display = 'block';
      //qq.style.slideToggle
      setB1('▼ 예약관리');
    } else {
      qs[0].style.display = 'none';
      setB1('▶ 예약관리');
    }
  }

  function ClickMenu1() {
    const qz = document.getElementsByClassName(
      'MenuDisappear1'
    );
    console.log(qz[0].style.display);
    if (qz[0].style.display === 'none') {
      qz[0].style.display = 'block';
      setB2('▼ 생활관관리');
    } else {
      qz[0].style.display = 'none';
      setB2('▶ 생활관관리');
    }
  }

  return (
    <div className="menu">
      <p
        className="MenuMenu"
        onClick={() =>
          props.onChangeMode(Object.keys(ms)[0])
        }
      >
        <strong>{ms['ManagerPage']}</strong>
      </p>
      <p className="MenuName" onClick={ClickMenu}>
        {B1}
      </p>
      <p className="MenuDisappear">
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[1])
          }
        >
          {ms['AsRequest']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[2])
          }
        >
          {ms['GymReser']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[3])
          }
        >
          {ms['OverNight']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[4])
          }
        >
          {ms['ShuttleManager']}
        </li>
      </p>
      <p className="MenuName1" onClick={ClickMenu1}>
        {B2}
      </p>
      <p className="MenuDisappear1">
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[5])
          }
        >
          {ms['MenuPlanner']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[6])
          }
        >
          {ms['ShuttleBus']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[7])
          }
        >
          {ms['DayOff']}
        </li>
        <li
          className="MenuText"
          onClick={() =>
            props.onChangeMode(Object.keys(ms)[8])
          }
        >
          {ms['UserManager']}
        </li>
      </p>
    </div>
  );
}
export default Menu;

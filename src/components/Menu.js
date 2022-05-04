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
  let test = document.querySelector('body');

  function ClickMenu() {
    const dis = document.querySelector(".MenuDisappear");
    if(dis.style.maxHeight===test.clientHeight/10+"vh"){
        dis.style.maxHeight="0px"
    }
    else{
        dis.style.maxHeight=test.clientHeight/10+"vh";
    }
  }

  function ClickMenu1() {
    const dis=document.querySelector(".MenuDisappear1");
    if(dis.style.maxHeight===test.clientHeight/10+"vh"){
        dis.style.maxHeight="0px"
    }
    else{
        dis.style.maxHeight=test.clientHeight/10+"vh";
    }
  }

  return (
    <div className='menu'>
      <p
        className='MenuMenu'
        onClick={() => props.onChangeMode(Object.keys(ms)[0])}
      >
        <strong>{ms['ManagerPage']}</strong>
      </p>
      <p className='MenuName' onClick={ClickMenu}>
        {B1}
      </p>
      <ul className='MenuDisappear'>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[1])}
        >
          {ms['AsRequest']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[2])}
        >
          {ms['GymReser']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[3])}
        >
          {ms['OverNight']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[4])}
        >
          {ms['ShuttleManager']}
        </li>
      </ul>
      <p className='MenuName1' onClick={ClickMenu1}>
        {B2}
      </p>
      <ul className='MenuDisappear1'>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[5])}
        >
          {ms['MenuPlanner']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[6])}
        >
          {ms['ShuttleBus']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[7])}
        >
          {ms['DayOff']}
        </li>
        <li
          className='MenuText'
          onClick={() => props.onChangeMode(Object.keys(ms)[8])}
        >
          {ms['UserManager']}
        </li>
      </ul>
    </div>
  );
}
export default Menu;

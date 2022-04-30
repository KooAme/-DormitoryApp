import React from 'react';
import './Header.css';

function Header(props) {
    let mode = props.mode;
  if(props.mode === "Login"){   // 로그인정보 화면 
    mode = "로그인 화면"
  }
  if(props.mode === "FirstDp"){ // 로그인 후 초기화면
    mode = "초기 화면" 
  }
  if(props.mode === "A/S"){ // 예약관리>A/S
    mode = "A/S 신청자 관리" 
  }
  if(props.mode === "Gym"){ // 예약관리>헬스
    mode = "헬스 예약자 관리" 
  }
  if(props.mode === "OverNight"){ //예약관리>외박
    mode = "외박 관리" 
  }
  if(props.mode === "busReservation"){ //예약>버스
    mode = "셔틀 버스 예약자 관리" 
  }
  if(props.mode === "MenuPlanner"){ //생활관 관리>식단표
    mode = "식단표 관리" 
  }
  if(props.mode === "ShuttleBus"){  //생활관 관리>버스
    mode = "셔틀 버스 관리" 
  }
  if(props.mode === "DayOff"){  //생활관 관리>휴일
    mode = "휴일 관리" 
  }
  if(props.mode === "User"){  //생활관 관리>사용자
    mode = "사용자 관리" 
  }
    return(
            <div className="header"><h1>{mode}</h1></div>
    );
}

export default Header;
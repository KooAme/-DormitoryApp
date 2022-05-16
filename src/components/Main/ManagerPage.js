import React from 'react';
import '../Css/Main.css';

function Main() {
  return (
    <div className='mainBody'>
      
      <div
        style={{
          display: 'flex',
          width: "auto",
          height: 500, 
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        관리자 페이지에 접속하였습니다.
      </div>
    </div>
  );
}

export default Main;

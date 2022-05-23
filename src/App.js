import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Login from './components/Login';
import Header from './components/JHeader';
import Main from './components/Main';
import Calendar from './components/Calender';


function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [mode, setMode] = useState('Login');

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  function clickButton(e) {
    // 로그인 버튼 클릭
    e.preventDefault();
    setIsLogin(true);
    setMode('ManagerPage');
  }

  const onChangeMode = (mode) => {
    // 메뉴 항목 클릭
    setMode(mode);
  };

  if (!isLogin) {
    return (
      <div className='containerL'>
        <Login button={clickButton} />
      </div>
    );
  } else { 
    return (
      <div className='containerM'>
        <Header mode={mode} />
        <Menu onChangeMode={onChangeMode}></Menu>
        <Main mode={mode} />

      </div>
    );
  }
}

export default App;

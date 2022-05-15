import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SetBulletin from './SetBulletin';

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

  const onChangeMode = mode => {
    // 메뉴 항목 클릭
    setMode(mode);
  };

  if (!isLogin) {
    return (
      <>
        <Header mode={'Login'} />
        <Login button={clickButton} />
      </>
    );
  } else {
    return (
      <div>
        <Header mode={mode} />
        <Menu onChangeMode={onChangeMode}></Menu>
        <Main mode={mode} />
      </div>
    );
  }
}

export default App;

/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Header from './components/JHeader';
import Main from './components/Main';

function App(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [mode, setMode] = useState('Login');

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  const onChangeMode = mode => {
    // 메뉴 항목 클릭
    setMode(mode);
  };

  return (
    <div className="containerM">
      <Header mode={mode} />
      <Menu onChangeMode={onChangeMode}></Menu>
      <Main mode={mode} />
    </div>
  );
}

export default App;

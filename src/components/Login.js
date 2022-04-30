import React from 'react';
import "./Login.css";
import img from './Symbol.png';
function Login(props) {
    const b = props.button;
    return(
            <div className="login">
                <div className="loginOver">
                    <img className="symbolImg" src={img} alt=""/>
                    <div className="loginOverFont"><strong>YEUNGJIN GLOBAL UNIVERSITY</strong></div>
                </div>
                <div className="loginUnder">
                    <div className="input">
                        <h2>관리자 로그인</h2>
                        <br />
                        <strong className="loginText">아이디</strong>
                        <input className="loginInput" placeholder='ID'></input><br/>
                        <strong className="loginText">비밀번호</strong>
                        <input className="loginInput" placeholder='PW'></input><br /><br />
                        <button onClick={b} className="loginButton">Login</button>
                    </div>
                </div>
            </div>
    );
};

export default Login;
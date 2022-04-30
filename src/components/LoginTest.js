import React from 'react';
import style from "./style.css";
import img from './Symbol.png';

function LoginTest() {
    return(
        <div>
            <link rel="stylesheet" href={style} />
            <body>
                <div id="container">
                    <div id="header">
                        <h1>HEADER</h1>
                    </div>
                    <div id="loginOver">
                        <img id="symbolImg" src={img} alt=""/>
                        <div id="loginOverFont"><strong>YEUNGJIN GLOBAL UNIVERSITY</strong></div>
                    </div>
                        <div id="loginUnder">
                            <p>
                                <h2>관리자 로그인</h2>
                                <br />
                                <strong id="loginText">아이디</strong>
                                <input id="loginInput" placeholder='ID'></input><br/>
                                <strong id="loginText">비밀번호</strong>
                                <input id="loginInput" placeholder='PW'></input><br /><br />
                                <button id="loginButton">Login</button>
                            </p>
                        </div>
                    <div id="footer">
                        <h1>FOOTER</h1>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default LoginTest;
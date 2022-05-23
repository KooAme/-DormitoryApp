import React from "react";
import "./Css/kLogin.css";
import img from "./Symbol2.png";
import imgs from "./school.png";
import BIMG from "./backi.jpg";
function Login(props) {
  const b = props.button;
  return (
    <>
      <img className="backgroundIMG" src={BIMG} alt=""/>
      <div className="loginBody">
        <div className="loginMain">
        <div className="loginHead">
        <img className="HeadImg" src={img} alt="  " />
        <div className="HeadText">YEUNGJIN GLOBAL UNIVERSITY</div>
        </div>
          <h2 className="loginText">관리자 로그인</h2>
          <div> 
            <strong className="textBox">아이디</strong>
            <input type="id" name="" id="" placeholder="id"></input>
          </div>
          <div>
          <strong className="textBox">비밀번호</strong>
            <input type="password" name="" id="" placeholder="Password"></input>
          </div>
          <div style={{margin: "auto" }}>
          <button onClick={b} className='btnLogin'>
            Login
          </button></div>
        </div>


        {/* <div className="loginImgBox"> 로그인 오른쪽 이미지, 사용 시 LoginCss에서 활성화 시켜주기
          <img className="loginImg" src={imgs} alt=" " />
        </div> */}
        </div>

    </>
  );
}

export default Login;

/* <div className="loginMain">
      <div className="login">
        <div className="loginText">관리자 페이지 로그인</div>
        <div class="login_id">
              <h4>ID</h4>
              <input type="id" name="" id="" placeholder="id"></input>
          </div>
          <div class="login_pw">
              <h4>Password</h4>
              <input type="password" name="" id="" placeholder="Password"></input>
          </div>
      </div>
    </div>
    <div className="loginImgBox">

    </div> */

/* <div className='login'>
      <div className='loginOver'>
        <img className='symbolImg' src={img} alt='' />
        <div className='loginOverFont'>
          <strong>YEUNGJIN GLOBAL UNIVERSITY</strong>
        </div>
      </div>
      <div className='loginUnder'>
        <div className='input'>
          <h2>관리자 로그인</h2>
          <br />
          <strong className='loginText'>아이디</strong>
          <input className='loginInput' placeholder='ID'></input>
          <br />
          <strong className='loginText'>비밀번호</strong>
          <input className='loginInput' placeholder='PW' type={"password"}></input>
          <br />
          <br />
          <button onClick={b} className='loginButton'>
            Login
          </button>
        </div>
      </div>
    </div> */

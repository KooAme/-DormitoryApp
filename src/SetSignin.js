import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
  const [std_id, setStd_id] = useState();
  const [std_name, setStd_Name] = useState();
  const [password, setPassword] = useState();
  const [ph_num, setPh_Num] = useState();
  const [room_num, setRoom_Num] = useState();
  const [e_mail, setE_Mail] = useState();
  const hash = Math.floor(Math.random()*899999+100000);

  const SignIn = e => {
    e.preventDefault();
    console.log(
      std_id,
      std_name,
      password,
      ph_num,
      room_num,
      e_mail,
      hash
    );
    if (
      std_id === undefined ||
      std_name === undefined ||
      password === undefined ||
      ph_num === undefined ||
      room_num === undefined ||
      e_mail === undefined
    ) {
      alert('형 다시 입력해요..');
    } else {
      axios.post('http://localhost:3001/signin', {
        std_id,
        std_name,
        password,
        ph_num,
        room_num,
        e_mail,
        hash,
      });
    }
  };
  return (
    <>
      <h1>회원가입</h1>
      <form
        className="createUser"
        onSubmit={e => {
          SignIn(e);
        }}
      >
        <div className="std_id">
          <label for="std_id" className="form-label">
            학번
          </label>
          <input
            type="text"
            className="form-control"
            id="std_id"
            onChange={e => {
              setStd_id(e.target.value);
            }}
          />
        </div>
        <div className="std_name">
          <label for="std_id" className="form-label">
            이름
          </label>
          <input
            type="text"
            className="form-control"
            id="std_name"
            onChange={e => {
              setStd_Name(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <label for="password" className="form-label">
            비밀번호
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="ph_num">
          <label for="ph_num" className="form-label">
            전화번호
          </label>
          <input
            type="text"
            className="form-control"
            id="ph_num"
            onChange={e => {
              setPh_Num(e.target.value);
            }}
          />
        </div>
        <div className="room_num">
          <label for="room_num" className="form-label">
            방 번호
          </label>
          <input
            type="text"
            className="form-control"
            id="room_num"
            onChange={e => {
              setRoom_Num(e.target.value);
            }}
          />
        </div>
        <div className="e_mail">
          <label for="e_mail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="e_mail"
            onChange={e => {
              setE_Mail(e.target.value);
            }}
          />
        </div>
        <div className="signin">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default App;

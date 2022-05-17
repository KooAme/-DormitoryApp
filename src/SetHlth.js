import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SetHlth(props) {
  const [date, setDate] = useState(undefined);
  const [sTime, setSTime] = useState(undefined);
  const [eTime, setETime] = useState(undefined);

  function confirm(e) {
    e.preventDefault();
    console.log(date, sTime, eTime);
    if (
      date === undefined ||
      sTime === undefined ||
      eTime === undefined
    ) {
      alert('날짜, 시간이 입력되지 않았습니다.');
    } else {
      if (eTime < sTime) {
        alert('종료시간이 시작시간보다 빠릅니다.');
      } else {
        axios.post('http://localhost:3001/hlth/request', {
          date,
          sTime,
          eTime,
        });
      }
    }
  }

  return (
    <>
      <h1>헬스</h1>
      <form
        className=""
        onSubmit={e => {
          confirm(e);
        }}
      >
        <div className="date">
          <label for="date" className="form-label">
            날짜
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="sTime">
          <label for="sTime" className="form-label">
            시작시간
          </label>
          <select
            className="form-contorol"
            id="sTime"
            onChange={e => {
              setSTime(e.target.value);
            }}
          >
            <option value="06:00:00">06:00</option>
            <option value="07:00:00">07:00</option>
            <option value="08:00:00">08:00</option>
            <option value="09:00:00">09:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="12:00:00">12:00</option>
            <option value="13:00:00">13:00</option>
            <option value="14:00:00">14:00</option>
            <option value="15:00:00">15:00</option>
            <option value="16:00:00">16:00</option>
            <option value="17:00:00">17:00</option>
            <option value="18:00:00">18:00</option>
            <option value="19:00:00">19:00</option>
            <option value="20:00:00">20:00</option>
            <option value="21:00:00">21:00</option>
          </select>
        </div>
        <div className="eTime">
          <label for="eTime" className="form-label">
            종료시간
          </label>
          <select
            className="form-contorol"
            id="eTime"
            onChange={e => {
              setETime(e.target.value);
            }}
          >
            <option value="07:00:00">07:00</option>
            <option value="08:00:00">08:00</option>
            <option value="09:00:00">09:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="12:00:00">12:00</option>
            <option value="13:00:00">13:00</option>
            <option value="14:00:00">14:00</option>
            <option value="15:00:00">15:00</option>
            <option value="16:00:00">16:00</option>
            <option value="17:00:00">17:00</option>
            <option value="18:00:00">18:00</option>
            <option value="19:00:00">19:00</option>
            <option value="20:00:00">20:00</option>
            <option value="21:00:00">21:00</option>
            <option value="22:00:00">22:00</option>
          </select>
        </div>
        <div className="confirm">
          <button type="submit" className="btn btn-primary">
            제출
          </button>
        </div>
      </form>
    </>
  );
}

export default SetHlth;

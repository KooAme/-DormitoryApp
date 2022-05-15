import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SetHlth(props) {
  const [sDate, setSDate] = useState();
  const [eDate, setEDate] = useState();
  const setToday = date => date.toISOString().slice(0, 10);
  const today = setToday(new Date());

  function confirm(e) {
    e.preventDefault();
    console.log(sDate, eDate);
    if (sDate > eDate || sDate < today) {
      alert('올바르지 않은 날짜입니다.');
    } else {
      axios.post('http://localhost:3001/stayout/request', {
        sDate,
        eDate,
      });
    }
  }

  return (
    <>
      <h1>외박 신청</h1>
      <form
        className=""
        onSubmit={e => {
          confirm(e);
        }}
      >
        <div className="sDate">
          <label for="sDate" className="form-label">
            출발날짜
          </label>
          <input
            type="date"
            className="form-control"
            id="sDate"
            onChange={e => {
              setSDate(e.target.value);
            }}
          />
        </div>
        <div className="eDate">
          <label for="eDate" className="form-label">
            도착날짜
          </label>
          <input
            type="date"
            className="form-control"
            id="eDate"
            onChange={e => {
              setEDate(e.target.value);
            }}
          />
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

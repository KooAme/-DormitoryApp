import axios from 'axios';
import React, { useEffect, useState }from 'react';

function SetHlth(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  function confirm(e) {
    e.preventDefault();
    console.log(
      date, time
    );
    if(date === undefined || time === undefined) {
      alert('날짜와 시간을 입력하세요');
    } else {
      axios.post('http://localhost:3001/hlth/request', {
        date, time
      });
    }
  };

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
            value={new Date().toISOString().slice(0,7)}
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="time">
          <label for="time" className="form-label">
            시간
          </label>
          <input
            type="day"
            className="form-control"
            id="hour"
            onChange={e => {
              setTime(e.target.value);
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
  )

};

export default SetHlth;
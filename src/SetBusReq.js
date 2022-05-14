import axios from 'axios';
import React, { useEffect, useState }from 'react';

function App(props) {
  const [date, setDate] = useState();
  const [way, setWay] = useState();
  const [ride, setRide] = useState();
  const [time, setTime] = useState();
  function confirmR(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/bus/ride', {
      date, way, ride, time
    })
    console.log(
      date, way, time, ride
    );
  };
  function confirmD(e) {
    e.preventDefault();
    axios.porst('http://localhost:3001/bus/time', {
      date, way
    })
    console.log(
      date, way
    );
  };
  return(
    <>
      <h1>버스 신청</h1>
      <form
        className=""
        onSubmit={e => {
          confirm(e);
        }}
      >
        <div className="title">
          <label for="title" className="form-label">
            제목
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="content">
          <label for="content" className="form-label">
            내용
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            onChange={e => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="visitAllow">
          <label for="visitAllow" className="form-label">
            부재시 방문여부
          </label>
          <input
            type="checkbox"
            className="visitAllow"
            id="visitAllow"
            onChange={e => {
              checkClick(e);  
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

export default App;
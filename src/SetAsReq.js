import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [allow, setAllow] = useState(false);
  const [data, setData] = useState();
  function confirm(e) {
    e.preventDefault();
    console.log(
      title, content, allow
    );
    if(title === undefined || content === undefined) {
      alert('제목, 내용을 입력하세요');
    } else {
      axios.post('http://localhost:3001/as/request', {
        title, content, allow
      });
    }
  };

  function checkClick(e) {
    if(allow) {
      setAllow(false);
    } else {
      setAllow(true);
    }
    console.log(allow);
  }

  return (
    <>
      <h1>AS신청</h1>
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
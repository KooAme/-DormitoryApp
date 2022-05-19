import axios from 'axios';
import React, { useEffect, useState }from 'react';

function App(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  function confirm(e) {
    e.preventDefault();
    console.log(
      title, content
    );
    if(title === undefined || content === undefined) {
      alert('제목, 내용을 입력하세요');
    } else {
      axios.post('http://localhost:3001/bulletin/create', {
        title, content,
      });
    }
  };
  
  return (
    <>
      <h1>게시판</h1>
      <form
        className="bulletin"
        onSubmit={e => {
          confirm(e);
        }}
      >
        <div className="std_id">
          <label for="std_id" className="form-label">
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
        <div className="std_name">
          <label for="std_id" className="form-label">
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
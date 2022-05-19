import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const SignIn = e => {
    e.preventDefault();
    console.log(imgBase64.length);
    axios.post('http://localhost:3001/image', {
      imgBase64
    });
  };

  return (
    <>
      <h1>이미지 입력</h1>
      <form
        className="img"
        onSubmit={e => {
          SignIn(e);
        }}
      >
        <div className="img">
          <label for="img" className="form-label">
            이미지 입력
          </label>
          <input
            type="file"
            id="img"
            onChange={e => {
              setImgFile(e.target.files);
              setImgBase64([]);
              for (let i = 0; i < e.target.files.length; i++){
                if (e.target.files[i]) {
                  let reader = new FileReader();
                  reader.readAsDataURL(e.target.files[i]);
                  reader.onloadend = () => {
                    const base64 = reader.result;
                    setImgBase64(base64);
                  }
                }
              }
            }}
          />
        </div>
        <img id='base64image' src={imgBase64} />
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(props) {
  const [hash, setHash] = useState();

  const SignIn = e => {
    e.preventDefault();
    console.log(
      hash
    );
      axios.post('http://localhost:3001/signin/hash', {
        hash
      });
  };
  return (
    <>
      <h1>해시입력</h1>
      <form
        className="createUser"
        onSubmit={e => {
          SignIn(e);
        }}
      >
        <div className="hash">
          <label for="hash" className="form-label">
            해시 입력
          </label>
          <input
            type="text"
            className="form-control"
            id="hash"
            onChange={e => {
              setHash(e.target.value);
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

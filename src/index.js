import React from "react";
import ReactDOM from "react-dom/client";
// import App from './SetBulletin';
// import App from './SetHlth';
// import App from './SetAsReq';
// import App from './SetStayoutReq';
// import App from './SetAsSearch';
// import App from './SetSignin';
// import App from './HashInput';
// import App from './SetAsDelete';
import App from "./SetBulletin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

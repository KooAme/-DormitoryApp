/* import '../Css/Main.css'; */
import "../Css/JMain.css";
import { DatePicker } from "react-datepicker";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";

function AsRequest() {
  const [firstday, setFirstday] = useState();
  const [secondday, setSecondday] = useState();
   console.log(firstday);
  console.log(secondday); 
  /* console.log((document.getElementById('dateF').value)); */
  return (
    <div className="mainBody">
        <fieldset className="field">
          <legend>검색</legend>
          <input
          className="inputA"
            type="date"
            name="dateF"
            id="dateF"
            onChange={(e) => setFirstday(e.target.value)}
          />
          ~
          <input
          className="inputA"
            type="date"
            name="dateS"
            onChange={(e) => setSecondday(e.target.value)}
          />
          <button
            className="buttonStyle"
            type="submit" 
          >
            조회
          </button>
          <div style={{ margin: 10 }}>
            <label>학번 : </label>
            <input className="inputB" type="text" style={{ width: 60 }} />
            <label> 이름 : </label>
            <input className="inputB" type="text" style={{ width: 60 }} />
            <label> 상태 : </label>
            <input className="inputB" type="text" style={{ width: 60 }} />
            <button
            className="buttonStyle"
            type="submit"
            
          >
            조회
          </button>
          </div>
        </fieldset>
      <div className="tableBox">
        <table className="tableH">
      <thead>
    <tr className="trStyle">
      <th>번호</th>
      <th>학번</th>
      <th>이름</th>
      <th>호실</th>
      <th>내용</th>
      <th>전화번호</th>
      <th>신청날짜</th>
      <th>상태</th>
      <th>확인</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
      <td>1</td>
      <td>2101032</td>
      <td>김동구</td>
      <td>704</td>
      <td>보일러 고장</td>
      <td>010-4773-4114</td>
      <td>2022.05.02</td>
      <td>미확인</td>
    </tr>
  </tbody>
  </table>
  </div>
    </div>
  );
}

export default AsRequest;

/* <form style={{ display: 'flex', justifyContent: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ margin: 10 }}>
    <label>기간 : </label>
    <input type='text' style={{ width: 60 }} />
    <label> 년 </label>
    <input type='text' style={{ width: 30 }} />
    <label> 월 </label>
    <input type='text' style={{ width: 30 }} />
    <label> 일 ~ </label>
    <input type='text' style={{ width: 60 }} />
    <label> 년 </label>
    <input type='text' style={{ width: 30 }} />
    <label> 월 </label>
    <input type='text' style={{ width: 30 }} />
    <label> 일 </label>
  </div>
  <div style={{ margin: 10 }}>
    <label>학번 : </label>
    <input type='text' style={{ width: 60 }} />
    <label> 이름 : </label>
    <input type='text' style={{ width: 60 }} />
    <label> 상태 : </label>
    <input type='text' style={{ width: 60 }} />
  </div>
</div>
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>
  <button
    style={{
      backgroundColor: 'orange',
      color: 'white',
      borderStyle: 'none',
      borderRadius: '5px',
      paddingBlock: '3px',
      paddingInline: '10px',
      marginLeft: '15px',
      marginTop:  '53px',
    }}
  >
    조회
  </button>
</div>
</form>
<form>
<table
  className='tableSet'
  style={{
    borderCollapse: 'collapse',
    width: '100%',
    textAlign:'center'
  }}
>
  <thead>
    <tr
      style={{
        color: 'white',
        backgroundColor: '#21429c',
        height: '4vh',
      }}
    >
      <td>번호</td>
      <td>학번</td>
      <td>이름</td>
      <td>호실</td>
      <td>내용</td>
      <td>전화번호</td>
      <td>신청날짜</td>
      <td>상태</td>
      <td>확인</td>
    </tr>
  </thead>
  <tbody>
    <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
      <td>1</td>
      <td>2101032</td>
      <td>김동구</td>
      <td>704</td>
      <td>보일러 고장</td>
      <td>010-4773-4114</td>
      <td>2022.05.02</td>
      <td>미확인</td>
      <td>
        <input type='checkbox' />
      </td>
    </tr>
  </tbody>
</table>
<button
  style={{
    float: 'right',
    width: 130,
    backgroundColor: 'orange',
    color: 'white',
    borderStyle: 'none',
    borderRadius: '5px',

    paddingBlock: '3px',
    paddingInline: '10px',
    margin: 5,
  }}
>
  적용
</button>
</form> */

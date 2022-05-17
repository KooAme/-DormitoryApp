import axios from 'axios';
import React, { useEffect, useState }from 'react';
import SetDataList from './SetDataList';

function App(props) {
  const [id, setId] = useState();
  const confirm = (e) => {
    e.preventDefault();
    console.log(
      id
    );
    axios.post('http://localhost:3001/as/delete', {
      id
    })
  };
  return (
    <>
      <span
        style={{
          color: 'white',
          display: 'flex',
          fontSize: '20px',
          padding: 5,
          paddingLeft: '15px',
        }}
      >
        A/S
      </span>
      <form
        onSubmit={e => {
          confirm(e);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ margin: 10 }}>
            <label>기간 : </label>
            <input type="text" style={{ width: 60 }} />
            <label> 년 </label>
            <input type="text" style={{ width: 30 }} />
            <label> 월 </label>
            <input type="text" style={{ width: 30 }} />
            <label> 일 ~ </label>
            <input type="text" style={{ width: 60 }} />
            <label> 년 </label>
            <input type="text" style={{ width: 30 }} />
            <label> 월 </label>
            <input type="text" style={{ width: 30 }} />
            <label> 일 </label>
          </div>
          <div style={{ margin: 5 }}>
            <label>학번 : </label>
            <input
              id="id"
              type="text"
              className="id"
              style={{ width: 60 }}
              onChange={e => {
                setId(e.target.value);
              }}
            />
            <label> 이름 : </label>
            <input type="text" style={{ width: 60 }} />
            <label> 상태 : </label>
            <input type="text" style={{ width: 60 }} />
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
              marginLeft: 15,
            }}
          >
            조회
          </button>
        </div>
      </form>
      <form>
        <table
          className="tableSet"
          style={{
            borderCollapse: 'collapse',
            width: '85%',
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
          }} type="submit"
        >
          적용
        </button>
      </form>
    </>
  )

};

export default App;
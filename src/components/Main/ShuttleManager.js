import React from 'react';
import '../Css/Main.css';

function ShuttleManager() {
  return (
    <div className='main' className='mainOver'>
      <span
        style={{
          color: 'white',
          display: 'flex',
          fontSize: '20px',
          padding: 5,
          paddingLeft: '15px',
        }}
      >
        셔틀 버스 예약자 관리
      </span>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
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
          <div style={{ margin: 5 }}>
            <label> 학번 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 이름 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 정류소 : </label>
            <input type='text' style={{ width: 100 }} />
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
          className='tableSet'
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
              <td>시간</td>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                height: '4vh',
                backgroundColor: '#e9e9e9',
              }}
            >
              <td>1</td>
              <td>2101032</td>
              <td>김동구</td>
              <td>글로벌 생활관</td>
            </tr>
          </tbody>
        </table>
        <p style={{ float: 'right', marginRight: 15 }}>합계 : 1 명</p>
      </form>
    </div>
  );
}

export default ShuttleManager;

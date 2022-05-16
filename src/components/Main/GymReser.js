import React from 'react';
import '../Css/Main.css';

function GymReser() {
  return (
    <div className='mainBody'>
     
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
          <div style={{ margin: 10  }}>
            <label> 학번 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 이름 : </label>
            <input type='text' style={{ width: 60, marginRight: 10 }} />
            <label> 시간 : </label>
            <input type='text' style={{ width: 50 }} />
            <label> 시 ~ </label>
            <input type='text' style={{ width: 50 }} />
            <label> 시</label>
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
              marginTop:'53px',
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
              <td>날짜</td>
              <td>시간</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>1</td>
              <td>2101032</td>
              <td>김동구</td>
              <td>2022.05.02</td>
              <td>18:00시 ~ 19:00시</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default GymReser;

import React from 'react';
import '../Css/Main.css';

function DayOff() {
  return (
    <div className='mainBody'>
      
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ margin: 25 }}>
            <label> 이름 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 날짜 : </label>
            <input type='text' style={{ width: 40 }} />
            <label> 년 </label>
            <input type='text' style={{ width: 30 }} />
            <label> 월 </label>
            <input type='text' style={{ width: 30 }} />
            <label> 일 </label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 15,
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
              marginRight: 5,
            }}
          >
            조회
          </button>
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
            추가
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
              <td>이름</td>
              <td>날짜</td>
              <td>제거</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>1</td>
              <td>어린이날</td>
              <td>2022.05.05</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>2</td>
              <td>현충일</td>
              <td>2022.06.06</td>
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
      </form>
    </div>
  );
}

export default DayOff;

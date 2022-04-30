import React from 'react';
import '../Css/Main.css';

function ShuttleBus() {
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
        셔틀 버스 관리
      </span>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ margin: 10 }}>
            <label> 구분 : </label>
            <input type='text' style={{ width: 40 }} />
            <label> 방향 : </label>
            <input type='text' style={{ width: 120 }} />
          </div>
          <div style={{ margin: 5 }}>
            <label> 시간: </label>
            <input type='text' style={{ width: 40 }} />
            <label style={{ marginRight: 15 }}> 시 </label>
            <label> 정류소 : </label>
            <input type='text' style={{ width: 160 }} />
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
              <td>구분</td>
              <td>방향</td>
              <td>정류소</td>
              <td>시간</td>
              <td>제거</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>1</td>
              <td>평일</td>
              <td>글로벌 생활관</td>
              <td>복현동 캠퍼스 방향</td>
              <td>18:08</td>
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

export default ShuttleBus;

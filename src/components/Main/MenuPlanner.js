import React from 'react';
import '../Css/Main.css';

function MenuPlanner() {
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
        식단표
      </span>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ margin: 10 }}>
            <label> 날짜 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 년 </label>
            <input type='text' style={{ width: 40 }} />
            <label> 월 </label>
            <input type='text' style={{ width: 40 }} />
            <label> 일</label>
          </div>
          <div style={{ margin: 5 }}>
            <label> 조식 : </label>
            <input type='text' style={{ width: 100 }} />
            <label> 중식 : </label>
            <input type='text' style={{ width: 100 }} />
            <label> 석식 : </label>
            <input type='text' style={{ width: 100 }} />
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
              <td>날짜</td>
              <td>조식</td>
              <td>중식</td>
              <td>석식</td>
              <td>제거</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>1</td>
              <td>2022.05.02</td>
              <td>백미, 제육볶음, 계란장조림, 미역국, 배추김치</td>
              <td>흑미, 닭고기카레, 닭다리구이, 야채볶음, 배추김치</td>
              <td>백미, 소불고기, 오이소박이, 김치찌개, 배추김치</td>
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

export default MenuPlanner;

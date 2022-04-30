import React from 'react';
import '../Css/Main.css';

function UserManager() {
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
        헬스
      </span>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ margin: 25 }}>
            <label> 학번 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 이름 : </label>
            <input type='text' style={{ width: 60 }} />
            <label> 호실 : </label>
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
              <td>호실</td>
              <td>이메일</td>
              <td>전화번호</td>
              <td>상태</td>
              <td>승인</td>
              <td>제거</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>1</td>
              <td>2101032</td>
              <td>김동구</td>
              <td>704</td>
              <td>dg.changeworld@gmail.com</td>
              <td>010-4773-4114</td>
              <td>승인</td>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr style={{ height: '4vh', backgroundColor: '#e9e9e9' }}>
              <td>2</td>
              <td>2101033</td>
              <td>홍길동</td>
              <td>703</td>
              <td>hong@gmail.com</td>
              <td>010-1234-5678</td>
              <td>미승인</td>
              <td>
                <input type='checkbox' />
              </td>
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

export default UserManager;

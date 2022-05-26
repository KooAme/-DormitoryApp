/*eslint-disable*/
/* import '../Css/Main.css'; */
import '../Css/JMain.css';
import { DatePicker } from 'react-datepicker';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios';
import { useEffect, useState } from 'react';

function AsRequest() {
  const [data, setData] = useState('');
  const [stdId, setStdId] = useState('');
  const [stdName, setStdName] = useState('');
  const [vstCheck, setVstCheck] = useState('');
  const [confirm, setConfirm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const callBack = () => {
    vstCheck === '동의' ? true : false;
    axios
      .post('http://localhost:3001/admin/as', {
        std_id: stdId,
        std_name: stdName,
        start_date: startDate,
        end_date: endDate,
        vst_check: vstCheck,
        confirm: confirm,
      })
      .then(res => {
        console.log(res.data);
        console.log('성공');
        setData(res.data);
      })
      .catch(err => {
        console.log('정보 없는데요');
      });
  };

  useEffect(() => {
    callBack();
  }, []);
  return (
    <div className="mainBody">
      <fieldset className="field">
        <legend>검색</legend>
        <input
          className="inputA"
          type="date"
          name="dateF"
          id="dateF"
          onChange={e => setStartDate(e.target.value)}
        />
        ~
        <input
          className="inputA"
          type="date"
          name="dateS"
          onChange={e => setEndDate(e.target.value)}
        />
        <button
          onClick={() => {
            callBack();
          }}
          className="buttonStyle"
          type="submit"
        >
          조회
        </button>
        <div style={{ margin: 10 }}>
          <label>학번 : </label>
          <input
            onChange={e => {
              setStdId(e.target.value);
            }}
            className="inputB"
            type="text"
            style={{ width: 60 }}
          />
          <label> 이름 : </label>
          <input
            onChange={e => {
              setStdName(e.target.value);
            }}
            className="inputB"
            type="text"
            style={{ width: 60 }}
          />
          <label> 부재시방문 : </label>
          <input
            onChange={e => {
              setVstCheck(e.target.value);
            }}
            className="inputB"
            type="text"
            style={{ width: 60 }}
          />
          <label> 상태 : </label>
          <input
            onChange={e => {
              setConfirm(e.target.value);
            }}
            className="inputB"
            type="text"
            style={{ width: 60 }}
          />
          <button
            onClick={() => {
              callBack();
            }}
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
              <th>부재시방문</th>
              <th>확인</th>
            </tr>
          </thead>
          <tbody>
            {data != false
              ? data.map(function (data, i) {
                  return (
                    <Table key={i} data={data} i={i} />
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Table({ i, data }) {
  return (
    <>
      <tr
        key={i}
        style={{
          height: '4vh',
          backgroundColor: '#e9e9e9',
        }}
      >
        <td>{data.as_id}</td>
        <td>{data.std_id}</td>
        <td>{data.StdInfo.std_name}</td>
        <td>{data.StdInfo.room_num}</td>
        <td>{data.title}</td>
        <td>{data.StdInfo.ph_num}</td>
        <td>{data.request_date}</td>
        <td>{data.vst_check === true ? '동의' : '거부'}</td>
        <td>
          {data.confirm === true ? '처리완료' : '미처리'}
        </td>
      </tr>
    </>
  );
}
export default AsRequest;

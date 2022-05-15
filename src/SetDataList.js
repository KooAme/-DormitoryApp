import React from 'react';

const SetDataList = props => {
  console.log(props.data);
  const renderData = props.data.map((data, index = 1) => {
    let confirm = data.confirm;
    confirm = confirm ? 'cc' : '처리';
    return (
      <tr
        key={index++}
        style={{
          height: '4vh',
          backgroundColor: '#e9e9e9',
        }}
      >
        <td>
          <input value={data.as_id}></input>
        </td>
        <td>
          <input value={data.StdInfo.std_id}></input>
        </td>
        <td>
          <input value={data.StdInfo.std_name}></input>
        </td>
        <td>
          <input value={data.StdInfo.room_num}></input>
        </td>
        <td>
          <input value={data.title}></input>
        </td>
        <td>
          <input onfocus={data.StdInfo.ph_num}></input>
        </td>
        <td>{data.request_date}</td>
        <td>{confirm}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  });
  return <tbody>{renderData}</tbody>;
};

export default SetDataList;

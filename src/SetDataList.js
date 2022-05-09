import React from 'react';

const SetDataList = props => {
  console.log(props.data);
  const renderData = props.data.map((data, index = 1) => {
    return (
      <tr
        key={index++}
        style={{
          height: '4vh',
          backgroundColor: '#e9e9e9',
        }}
      >
        <td>{data.as_id}</td>
        <td>{data.StdInfo.std_id}</td>
        <td>{data.StdInfo.std_name}</td>
        <td>{data.StdInfo.room_num}</td>
        <td>{data.title}</td>
        <td>{data.StdInfo.ph_num}</td>
        <td>{data.createdAt}</td>
        <td>{data.confirm}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  });
  return <tbody>{renderData}</tbody>;
};

export default SetDataList;

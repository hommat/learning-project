import React from 'react';

export default function DataDisplay({ title, dataArray }) {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {dataArray.map(({ id, data }) => (
          <li key={id}>{data}</li>
        ))}
      </ul>
    </>
  );
}

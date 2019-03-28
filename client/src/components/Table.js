import React from 'react';

const Table = ({ data }) => {
  const {a, b, c, d, e} = data
  return (
  <div className='card col-md-6'>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Category </th>
      <th scope="col"> -4 {'<'} x {'<'} 8 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A: EBIT/Total Assets</td>
      <td>{a}</td>
    </tr>
    <tr>
      <td>B: Net Sales/Total Assets</td>
      <td>{b}</td>
    </tr>
    <tr>
      <td>C: Book Value/Total Liabilities</td>
      <td>{c}</td>
    </tr>
    <tr>
      <td>D: Working Capital / Total Assets</td>
      <td>{d}</td>
    </tr>
    <tr>
      <td>E: Retained Earnings / Total Assets </td>
      <td>{e}</td>
    </tr>
  </tbody>
</table>
</div>
  );
}
export default Table;
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ name, seriesData }) => {

  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: name, //Add in company name
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: seriesData  //provide data for graph as array
      }
    ]
  };
  const options = {
    legend: {
      display: false
    }
  }

  
  return (
    <div className='card col-md-6'>
      <div className='card-body'>
      <Bar data={data} options={options}/></div>
    </div>
  )
}
export default BarChart;
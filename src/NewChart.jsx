import React from 'react';
import Mdata from './data/data.json'
import Chart from 'chart.js/auto';
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

function NewChart() {

  const data = {
    labels: Mdata.map(i=>i.day),
    datasets: [
      {
        data: Mdata.map(i=>i.amount),
        backgroundColor: "hsl(10, 79%, 65%)"
      }
    ]
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,

          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: false
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  };



  let max = 0
  Mdata.map((mdata)=>{
    if(mdata.amount >= max){max = mdata.amount}
  })

  return (
    <div className='container'>
      <Bar width="1000" height="200" data={data} options={options} />
    </div>
  );
}

export default NewChart;

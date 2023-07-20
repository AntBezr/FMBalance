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
        backgroundColor: "hsl(10, 79%, 65%)",
        borderRadius: 10,
      }
    ],
    plugins: {
      legend: {
          display: false,
      }
    }
  };

  const options = {
    responsive: false,
    plugins:{
      legend:{
        display: false,
      }
    },
    scales: {
      x: {
          beginAtZero: true,
          grid:{
            display:false,
          },
          border:{
            display:false
          }
        }
      ,
      y: {
        grid: {
          drawBorder:false,
          display:false
        },
        ticks: {
          display: false
        },
        border:{
          display:false
        }
       
      }
    }
  };



  let max = 0
  Mdata.map((mdata)=>{
    if(mdata.amount >= max){max = mdata.amount}
  })

  return (
    <div className='container'>
      <Bar width="1000" height="150" data={data} options={options} />
    </div>
  );
}

export default NewChart;

import React from 'react';
import Mdata from './data/data.json'
import Chart from 'chart.js/auto';
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

function NewChart() {

  const d = new Date();
  let dayNumber = [d.getDay()]-1 === -1 ?6:[d.getDay()]-1;
  

  const data = {
    labels: Mdata.map(i=>i.day),
    datasets: [{
        data: Mdata.map(i=>i.amount),
        backgroundColor: color => {
          let colors = color.dataIndex === dayNumber ? 'hsl(186, 34%, 60%)':'hsl(10, 79%, 65%)'
          return colors
        },
        borderRadius: 10,
      }],
    plugins: {
      legend: {display: false}
    }
  };

const titleTooltip =(tooltipItems)=>{
  return ''
}

  const options = {
    responsive: false,
    plugins:{
      tooltip:{
        backgroundColor:'hsl(25, 47%, 15%)',
        yAlign: 'bottom',
        displayColors: false,
        callbacks:{ 
          title:titleTooltip,
          label: function(context) {
          let label = context.dataset.label || '';

          if (label) {
              label += ': ';
          }
          if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
          }
          return label;
         },
         labelTextColor: function(context) {
          return 'hsl(33, 100%, 98%)';
      }
    }
      
      },
      legend:{
        display: false,
        labels:{
          font:{
            weight: 900,
            
          }
        }
      }
    },
    scales: {
      x: {
          beginAtZero: true,
          grid:{display:false},
          border:{display:false}
        },
      y: {
        grid: {
          drawBorder:false,
          display:false
        },
        ticks: {display: false},
        border:{display:false}
      }
    }
  };


  return (
    <div className='container'>
      <Bar width="1000" height="150" data={data} options={options} />
      
    </div>
  );
}

export default NewChart;

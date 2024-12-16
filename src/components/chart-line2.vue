<template>
    <div style="width: 100%; min-height: 228px; max-height: 228px;">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  );
  
  export default {
    components: {
      Line,
    },
    data() {
      return {
        chartData: {
          labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
          datasets: [
            {
              label: 'Revenue',
              data: [10000, 15000, 20000, 25000, 18000, 35000],
              borderColor: '#16DBCC',
              borderWidth: 2,
              tension: 0.4, // Creates smooth curves
              fill: false,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: true,
                drawBorder: false,
                color: '#EFEFEF',
              },
              ticks: {
                color: '#888',
              },
            },
            y: {
              grid: {
                display: true,
                drawBorder: false,
                color: '#EFEFEF',
              },
              ticks: {
                color: '#888',
                callback: function (value) {
                  return `$${value.toLocaleString()}`; // Format y-axis labels
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>

  </style>
  
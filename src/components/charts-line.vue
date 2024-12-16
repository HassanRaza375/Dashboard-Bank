<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// External chart configuration

export default {
  name: 'Chart',
  components: {
    Line,
  },
  data() {
    return { 
    chartData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
    {
    label: 'Sales',
    backgroundColor: '#42A5F5',
    borderColor: '#EDA10D',
    borderWidth:2,
    data: [40, 20, 60, 80, 100, 50, 70],
    fill: false,
    },
    ],
    },
    chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    
    },
     }
  },
}
</script>

<template>
    <div style="width: 100%; min-height: 228px; max-height: 228px;">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
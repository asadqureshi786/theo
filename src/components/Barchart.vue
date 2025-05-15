<template>
    <div ref="chartRef" class="" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import * as echarts from 'echarts'
  
  const chartRef = ref(null)
  
  onMounted(() => {
    
    const chart = echarts.init(chartRef.value)
  
    chart.setOption({
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
      {
        name: '2024',
        type: 'bar',
        data: [120, 200, 150, 80, 70,90,122,130,140,100,199,175],
        barWidth: '40%',
        itemStyle: {
          color: '#8F0301B2',
          borderRadius: [4, 4, 0, 0] // top-left, top-right, bottom-right, bottom-left
        }
      },
      {
        name: '2025',
        type: 'bar',
        data: [180, 150, 100, 60, 90,75,110,95,120,150,120,65],
        barWidth: '40%',
        itemStyle: {
          color: '#E4C3C2'
        }
      }
    ]
    })
  })
  </script>
  
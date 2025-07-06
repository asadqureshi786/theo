<template>
    <div ref="chartRef" class="" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import * as echarts from 'echarts'
  
  const chartRef = ref(null)

  const props = defineProps({
  monthly_sales : Array,
});
  
  
  onMounted(() => {
    // monthly_sales
    

    const barData = props.monthly_sales

    const chart = echarts.init(chartRef.value)
  
    chart.setOption({
      title: {
        text: ''
      },
      tooltip: {},
        grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    top: '15%',
    containLabel: true
  },
      xAxis: {
        type: 'category',
        data: barData.labels
      },
      yAxis: {
        type: 'value'
      },
      series: [
      {
        name: '2024',
        type: 'bar',
        data: barData.sales,
        barWidth: '40%',
        itemStyle: {
          color: '#8F0301B2',
          borderRadius: [4, 4, 0, 0] // top-left, top-right, bottom-right, bottom-left
        }
      },
    ]
    })
  })
  </script>
  
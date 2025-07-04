<template>
    <div ref="chartRef" class="" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import * as echarts from 'echarts'
  

const props = defineProps({
  deals_done : Array,
});
  

const chartRef = ref(null)

onMounted( () => {
  
    console.log("From bar Char",props.deals_done)
    
    const chart = echarts.init(chartRef.value)
    const dealsCount = [];
     props.deals_done.forEach(function(item){
      dealsCount.push(item.deals_count)
    })
  
    const dealMonth = [];
     props.deals_done.forEach(function(item){
     const monthNum = item.month.split('-')[1]  // e.g. '07'
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthIndex = parseInt(monthNum, 10) - 1  // '07' -> 6
  const monthName = monthNames[monthIndex]
  dealMonth.push(monthName)
    })
    console.log("From ForEach Char",dealsCount);


  
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
        data: dealMonth,
      },
      yAxis: {
        type: 'value'
      },
      series: [
      {
        name: '2024',
        type: 'bar',
        data:dealsCount,
        barWidth: '5%',
        itemStyle: {
          color: '#8F0301B2',
          borderRadius: [4, 4, 0, 0] // top-left, top-right, bottom-right, bottom-left
        }
      },
    ]
    })
  })
  </script>
  
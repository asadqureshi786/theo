<template>
    <div ref="chart" style="height: 300px;"></div>
    <ul class="items">
        <li>
            <p class="label">Signed</p>
            <div>45%</div>
        </li>
    </ul>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { onMounted, ref } from 'vue'
  
  const chart = ref(null)
  
  onMounted(() => {
    if (chart.value) {
      const myChart = echarts.init(chart.value)
      myChart.setOption({
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   top: '5%',
        //   left: 'center',
        //   show: false,
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '85%'],
            avoidLabelOverlap: false,
            color: ['#8F0301B2', '#E4C3C2', '#D29A99'], 
            itemStyle: {
              borderRadius: 0,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
            ]
          }
        ]
      })
    }
  })
  </script>
  
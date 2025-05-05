<template>
 <div class="donut">
  <div ref="chart" style="height: 300px"></div>
  <ul class="items">
    <li>
      <p class="label">{{ text1 }}</p>
      <div class="count">45%</div>
    </li>
    <li>
      <p class="label">{{ text2 }}</p>
      <div class="count">45%</div>
    </li>
    <li>
      <p class="label">{{ text3 }}</p>
      <div class="count">45%</div>
    </li>
  </ul>
 </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

// define props in <script setup>
const props = defineProps({
  text1: String,
  text2: String,
  text3: String,
});

const chart = ref(null);

onMounted(() => {
  if (chart.value) {
    const myChart = echarts.init(chart.value);
    myChart.setOption({
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["42%", "85%"],
          avoidLabelOverlap: false,
          color: ["#8F0301B2", "#E4C3C2", "#D29A99"],
          itemStyle: {
            borderRadius: 0,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: props.text1 || "Search Engine" },
            { value: 735, name: props.text2 || "Direct" },
            { value: 580, name: props.text3 || "Email" },
          ],
        },
      ],
    });
  }
});
</script>


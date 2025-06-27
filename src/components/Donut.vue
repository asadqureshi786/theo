<template>
  <div class="donut">
    <div ref="chart" style="height: 300px; width: 300px"></div>
    <ul class="items">
      <li>
        <p class="label">{{ text1 }}</p>
        <div class="count">{{ status_counts?.approach ?? 0 }}</div>
      </li>
      <li>
        <p class="label">{{ text2 }}</p>
        <div class="count">{{ status_counts?.follow ?? 0 }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from "vue";

const props = defineProps({
  text1: String,
  text2: String,
  status_counts: Object,
});

const chart = ref(null);
let myChart = null;

const renderChart = () => {
  if (!chart.value || !props.status_counts) return;

  // Dispose old instance if already created
  if (myChart) {
    myChart.dispose();
    myChart = null;
  }

  const approach = props.status_counts.approach ?? 0;
  const follow = props.status_counts.follow ?? 0;

  const data = [
    { value: approach, name: props.text1 || "Approach" },
    { value: follow, name: props.text2 || "Follow" },
  ];

  myChart = echarts.init(chart.value);

  myChart.setOption({
    tooltip: { trigger: "item" },
    series: [
      {
        name: "Status",
        type: "pie",
        radius: ["42%", "85%"],
        avoidLabelOverlap: false,
        color: ["#8F0301B2", "#E4C3C2"],
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: { show: false, position: "center" },
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: "bold",
          },
        },
        labelLine: { show: false },
        data,
      },
    ],
  });
};

onMounted(() => {
  nextTick(renderChart);
});

watch(
  () => props.status_counts,
  () => {
    nextTick(renderChart);
  },
  { deep: true }
);

// Clean up on destroy
onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose();
    myChart = null;
  }
});

// Resize on window resize
window.addEventListener("resize", () => {
  if (myChart) myChart.resize();
});
</script>


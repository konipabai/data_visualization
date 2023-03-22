<template>
    <div id="bar"></div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
import { barData, colorList } from "./data";

const { proxy }: any = getCurrentInstance();
const echarts = proxy.$echarts;
type EChartsOption = echarts.EChartsOption;
let barDataCountry: string[] = [];
let barDataValue: number[] = [];

onMounted(() => {
    manageData();
    initEcharts();
});

const manageData = () => {
    barDataCountry = barData.map((item) => item.Country);
    barDataValue = barData.map((item) => item.value);
};

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById("bar"));
    const option: EChartsOption = {
        title: {
            text: "2023年各国人口排行TOP5(单位:亿)",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none",
            },
        },
        legend: {
            show: false,
        },
        grid: {
            left: "1%",
            right: "5%",
            top: "15%",
            bottom: "0%",
            containLabel: true,
        },
        xAxis: {
            show: false,
            type: "value",
        },
        yAxis: [
            {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                data: barDataCountry,
                axisLabel: {
                    fontSize: 14,
                    color: "black",
                },
            },
            {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                data: barDataValue,
                axisLabel: {
                    fontSize: 14,
                    color: "black",
                },
            },
        ],
        series: [
            {
                type: "bar",
                barWidth: 21,
                data: barData.map((item, i) => {
                    var itemStyle = {
                        color: colorList[i],
                        barBorderRadius: [10, 10, 10, 10],
                    };
                    return {
                        value: item.value,
                        itemStyle: itemStyle,
                    };
                }),
            },
        ],
    };
    myChart.setOption(option);
};
</script>

<style scoped>
#bar {
    width: 100%;
    height: 100%;
}
</style>

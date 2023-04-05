<template>
    <div class="outer-box">
        <img src="../../assets/image/left_line.png" class="img-left">
        <div id="bar"></div>
        <img src="../../assets/image/right_line.png" class="img-right">
    </div>
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
            left: "center",
            top: '6%',
            textStyle: {
                color: "white",
                fontSize: 18,
            },
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#fff",
            },
            axisPointer: {
                type: 'none',
            },
            confine: true
        },
        legend: {
            show: false,
        },
        grid: {
            left: "16%",
            right: "4%",
            top: "19%",
            bottom: "2%",
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
                    color: "#ffffff",
                }
            }
        ],
        series: [
            {
                name: '背景色',
                type: 'bar',
                barWidth: 16,
                barGap: '-100%',
                data: [15, 15, 15, 15, 15],
                itemStyle: {
                    color: 'rgba(50, 72, 135, 0.8)',
                    borderRadius: [10, 10, 10, 10],
                },
                tooltip: {
                    show: false
                },
            },
            {
                type: "bar",
                barWidth: 16,
                label: {
                    show: true,
                    position: ['50%', '15%'],
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "bold",
                },
                data: barData.map((item, i) => {
                    var itemStyle = {
                        color: colorList[i],
                        borderRadius: [10, 10, 10, 10],
                    };
                    return {
                        value: item.value,
                        itemStyle: itemStyle,
                    };
                }),
            }
        ],
    };
    myChart.setOption(option);
};
</script>

<style scoped>
.outer-box {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(204, 231, 239, 0.1);
    border-radius: 8% 0 8% 0;
}

#bar {
    height: 100%;
    width: 100%;
}

.img-left {
    position: absolute;
    bottom: 0;
    left: 0;
}

.img-right {
    position: absolute;
    top: 0;
    right: 0;
}
</style>

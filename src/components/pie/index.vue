<template>
    <div id="pie">

    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import type { legendType, pieType } from './type'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

const chartData = [
    {
        value: 105000,
        name: "男性",
    },
    {
        value: 95000,
        name: "女性",
    }
];
const colorList: string[] = ['#81EDD2', '#B0FA93'];
const sum: number = chartData.reduce((per, cur) => per + cur.value, 0);
const pieData1: pieType[] = [];
const pieData2: pieType[] = [];
const lefts: string[] = ["80%", "4%"];
const legendData: legendType[] = [];

onMounted(() => {
    manageData()
    initEcharts()
})

const manageData = () => {
    for (let i = 0; i < chartData.length; i++) {
        pieData1.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 3
            },
        });

        pieData2.push({
            ...chartData[i],
            itemStyle: {
                color: colorList[i],
                opacity: 0.21,
                borderRadius: 5,
                borderColor: "black",
                borderWidth: 3
            },
        });

        const legend: string = parseInt((chartData[i].value / sum) * 100 as any) + "%";
        legendData.push({
            show: true,
            icon: "circle",
            left: lefts[i],
            top: "45%",
            itemStyle: {
                color: colorList[i],
            },
            formatter: `{legendTextStyle|` + chartData[i].name + `}` + `\n` + `{legendNumberStyle|` + legend + `}`,
            textStyle: {
                rich: {
                    legendTextStyle: {
                        fontSize: 15,
                        color: "#ffffff",
                    },
                    legendNumberStyle: {
                        fontSize: 15,
                        color: colorList[i],
                    },
                },
            },
            data: [chartData[i].name],
        });
    }
}

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('pie'))
    const option: EChartsOption = {
        title: {
            text: "2023年男女人口比例",
            subtext: "总人数(单位:万)\n200000",
            left: "center",
            itemGap: 150,
            textStyle: {
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
            },
            subtextStyle: {
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
            },
        },
        tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#fff",
            },
        },
        legend: legendData,
        color: colorList,
        series: [
            {
                type: 'pie',
                radius: ['66%', '75%'],
                center: ['50%', '57%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: pieData1
            },
            {
                type: 'pie',
                radius: ['66%', '60%'],
                center: ['50%', '57%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                silent: true,
                data: pieData2
            },
            {
                type: 'gauge',
                splitNumber: 70,
                radius: '60%',
                center: ['50%', '57%'],
                startAngle: 0,
                endAngle: 360,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    length: 10,
                    lineStyle: {
                        width: 4,
                        color: 'rgb(33,85,130)',
                    },
                },
            },
            {
                type: 'pie',
                center: ['50%', '57%'],
                radius: [0, '45.6%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(75, 126, 203,.1)'
                },
                silent: false,
                data: [
                    {
                        value: 100,
                        name: 'all'
                    }
                ]
            }
        ],
    };
    myChart.setOption(option)
}
</script>

<style scoped>
#pie {
    height: 100%;
    width: 100%;
}
</style>
<template>
    <div class="outer-box">
        <img src="../../assets/image/left_line.png" class="img-left">
        <div id="pie"></div>
        <img src="../../assets/image/right_line.png" class="img-right">
    </div>
    
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import type { legendType, pieType } from './type'
import { sexData } from './data'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

const colorList: string[] = ['#9AE0EC', '#F18FBA'];
const sum: number = sexData.reduce((per, cur) => per + cur.value, 0);
const pieData1: pieType[] = [];
const pieData2: pieType[] = [];
const lefts: string[] = ["80%", "4%"];
const legendData: legendType[] = [];

onMounted(() => {
    manageData()
    initEcharts()
})

const manageData = () => {
    for (let i = 0; i < sexData.length; i++) {
        pieData1.push({
            ...sexData[i],
            itemStyle: {
                borderRadius: 10,
                borderColor: "#02095E",
                borderWidth: 3
            },
        });

        pieData2.push({
            ...sexData[i],
            itemStyle: {
                color: colorList[i],
                opacity: 0.21,
                borderRadius: 5,
                borderColor: "#02095E",
                borderWidth: 3
            },
        });

        const legend: string = parseInt((sexData[i].value / sum) * 100 as any) + "%";
        legendData.push({
            show: true,
            icon: "circle",
            left: lefts[i],
            top: "50%",
            itemStyle: {
                color: colorList[i],
            },
            formatter: `{legendTextStyle|` + sexData[i].name + `}` + `\n` + `{legendNumberStyle|` + legend + `}`,
            textStyle: {
                rich: {
                    legendTextStyle: {
                        fontSize: 15,
                        color: "#fff",
                    },
                    legendNumberStyle: {
                        fontSize: 15,
                        color: colorList[i],
                    },
                },
            },
            data: [sexData[i].name],
        });
    }
}

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('pie'))
    const option: EChartsOption = {
        title: {
            text: "2023年男女人口比例",
            subtext: "总人数\n(单位:万)\n200000",
            left: "center",
            top: '6%',
            itemGap: 115,
            textStyle: {
                color: "white",
                fontSize: 18,
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
            confine: true
        },
        legend: legendData,
        color: colorList,
        series: [
            {
                type: 'pie',
                radius: ['56%', '65%'],
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
                radius: ['56%', '50%'],
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
                splitNumber: 60,
                radius: '50%',
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
                radius: [0, '50%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(75, 126, 203,.1)'
                },
                tooltip:{
                    show: false
                },
                silent: false,
                data: [
                    {
                        value: 100
                    }
                ]
            }
        ],
    };
    myChart.setOption(option)
}
</script>

<style scoped>
.outer-box {
    overflow:hidden;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(204, 231, 239, 0.1);
    border-radius: 8% 0 8% 0;
}
#pie {
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
<template>
    <div class="outer-box">
        <img src="../../assets/image/left_line.png" class="img-left">
        <div id="line"></div>
        <img src="../../assets/image/right_line.png" class="img-right">
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import { yearData, incomeData } from './data'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

onMounted(() => {
    initEcharts()
})

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('line'))
    const option: EChartsOption = {
        title: {
            text: '近五年城乡人均收入(单位:千元)',
            top: '8%',
            left: '1%',
            textStyle: {
                color: "white",
                fontSize: 18
            },
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#fff",
            },
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            confine: true
        },
        legend: {
            data: ['城市', '乡村'],
            right: '4%',
            top: '5%',
            orient:"vertical",
            textStyle: {
                fontSize: 12,
                color: "#fff",
            },
            icon: "circle",
        },
        grid: {
            left: '10%',
            right: '6%',
            top: '23%',
            bottom: '12%',
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: yearData,
                axisLabel:{
                    color: "#fff"
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: '城市',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(204, 153, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(51, 51, 255)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: incomeData[0].data
            },
            {
                name: '乡村',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: incomeData[1].data
            }
        ]
    }
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
}
#line {
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
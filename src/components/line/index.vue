<template>
    <div style="overflow:hidden;width: 100%;height: 100%;">
        <div id="line"></div>
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
            text: '近十年城市与农村的人均收入(单位:元)',
            textStyle: {
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            confine: true
        },
        legend: {
            data: ['城市', '农村'],
            right: 0
        },
        grid: {
            left: '11%',
            right: '4%',
            top: '15%',
            bottom: '8%',
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: yearData
            }
        ],
        yAxis: [
            {
                type: 'value'
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
                name: '农村',
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
#line {
    height: 100%;
    width: 100%;
}
</style>
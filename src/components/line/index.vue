<template>
    <div id="line">

    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption
const yearData:string[] = [ '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023' ]
const incomeData:number[][] = [
    [ 52000, 57000, 62000, 64000, 64000, 67000, 61000, 55000, 69000, 70000 ],
    [ 40000, 47000, 42000, 49000, 50000, 51000, 45000, 42000, 50000, 56000 ]
]

onMounted(() => {
    initEcharts()
})

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('line'))
    const option: EChartsOption = {
        title: {
            text: '近十年城市与农村的人均收入(单位:元)',
            textStyle:{
                fontSize:18
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['城市', '农村'],
            right: 0
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '1%',
            containLabel: true
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
                data: incomeData[0]
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
                data: incomeData[1]
            }
        ]
    }
    myChart.setOption(option)
}
</script>

<style scoped>
#line{
    height: 100%;
    width: 100%;
}
</style>
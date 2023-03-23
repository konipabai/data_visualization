<template>
    <div style="overflow:hidden;width: 100%;height: 100%;">
        <div id="lineRace"></div>
    </div>
    
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import { lineRaceData, yearList } from './data'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

const CountryData: any = []
let yearData: string[] = []

onMounted(() => {
    manageData()
    initEcharts()
})

const manageData = () => {
    yearData = yearList
    for (let i = 0; i < lineRaceData.length; i++) {
        CountryData.push({
            data: lineRaceData[i].data,
            type: 'line',
            smooth: true,
            showSymbol: false,
            endLabel: {
                show: true,
                formatter: function () {
                    return lineRaceData[i].Country;
                }
            },
            labelLayout: {
                moveOverlap: 'shiftY'
            },
            emphasis: {
                focus: 'series'
            },
        })
    }
}

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('lineRace'))
    const option: EChartsOption = {
        animationDuration: 5000,
        title: {
            text: '近十年世界国家GDP的TOP5(单位:亿)',
            textStyle: {
                fontSize: 18
            }
        },
        xAxis: {
            type: 'category',
            data: yearData
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            order: 'valueDesc',
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            confine: true
        },
        grid: {
            left: 55,
            right: 10,
            top: 35,
            bottom: 25
        },
        series: CountryData
    };
    myChart.setOption(option);
}

</script>

<style scoped>
#lineRace {
    height: 100%;
    width: 100%;
}
</style>
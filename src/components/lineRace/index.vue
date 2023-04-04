<template>
    <div class="outer-box">
        <div id="lineRace"></div>
        <img src="../../assets/image/left_top.png" class="img-left-top">
        <img src="../../assets/image/right_top.png" class="img-right-top">
        <img src="../../assets/image/left_bottom.png" class="img-left-bottom">
        <img src="../../assets/image/right_bottom.png" class="img-right-bottom">
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
            name: lineRaceData[i].Country,
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
            top: '4%',
            left: 'center',
            textStyle: {
                color: "#ffffff",
                fontSize: 18
            }
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
            confine: true,
        },
        grid: {
            left: '11%',
            right: '4%',
            top: '23%',
            bottom: '12%',
        },
        xAxis: {
            type: 'category',
            data: yearData,
            axisLabel:{
                color: "#fff"
            }
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "#fff"
            }
        },
        series: CountryData
    };
    myChart.setOption(option);
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
#lineRace {
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border: 2px solid #044BBE;
}
.img-left-top {
    position: absolute;
    left: 0;
    top: 0;
}
.img-right-top {
    position: absolute;
    right: 0;
    top: 0;
}
.img-left-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
}
.img-right-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>
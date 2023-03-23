<template >
    <div style="overflow:hidden;width: 100%;height: 100%;">
        <div id="scatter"></div>
    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import { scatterData } from './data'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

onMounted(() => {
    initEcharts()
})

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('scatter'))
    const option: EChartsOption = {
        title: {
            text: "随机抽取50人调查月收入与月支出(单位:元)",
            textStyle: {
                fontSize: 18,
            },
        },
        grid: {
            left: '10%',
            right: '10%',
            top: '19%',
            bottom: '10%',
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
                return ("收入: " + params.value[0] + "<br>支出: " + params.value[1])
            },
            confine: true
        },
        toolbox: {
            feature: {
                dataZoom: {
                    title: {
                        zoom: "截取区域缩放",
                        back: "区域缩放还原"
                    }
                },
            }
        },
        xAxis: {
            type: 'value',
            name: "收入"
        },
        yAxis: {
            type: 'value',
            name: "支出"
        },
        series: [
            {
                symbolSize: 14,
                type: 'scatter',
                data: scatterData,
                itemStyle: {
                    color: '#00CC66'
                },
            }
        ]
    };
    myChart.setOption(option)
}

</script>

<style scoped>
#scatter {
    width: 100%;
    height: 100%;
}
</style>
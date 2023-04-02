<template>
    <div style="overflow:hidden;width: 100%;height: 100%;">
        <div id="map"> </div>
    </div>
    
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
import 'echarts-gl'
import '../../assets/js/china.js'
import { mapsData } from './data'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

onMounted(() => {
    initEcharts()
})

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('map'))
    const option: EChartsOption = {
        title: {
            text: "2023年各省GDP总值(单位:千亿)",
            textStyle: {
                fontSize: 18
            }
        },
        tooltip: {
            show: true,
            formatter: '{b}: {c}',
            confine: true
        },
        visualMap: {
            bottom: 20,
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#D7FFFF', '#80FD78', '#E6FF00', '#FF8000', '#FF0000']
            }
        },
        geo3D: {
            map: 'china',
            regionHeight: 0,
            boxWidth: 135,
            left: 40,
            viewControl: {
                distance: 110,
                center: [0, -10, 0]
            },
        },
        series: [
            {
                type: 'map3D',
                map: 'china',
                emphasis: {
                    label: {
                        show: false
                    }
                },
                boxWidth: 135,
                viewControl: {
                    distance: 110,
                    center: [0, -10, 0]
                },
                left: 40,
                itemStyle: {
                    opacity: 1,
                    borderWidth: 0.5,
                    borderColor: 'gray',
                },
                data: mapsData,
            },
        ],
    }
    myChart.setOption(option)
}
</script>

<style scoped>
#map {
    height: 100%;
    width: 100%;
}
</style>
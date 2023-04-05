<template>
    <div class="outer-box">
        <div id="map"></div>
        <img src="../../assets/image/left_top.png" class="img-left-top">
        <img src="../../assets/image/right_top.png" class="img-right-top">
        <img src="../../assets/image/left_bottom.png" class="img-left-bottom">
        <img src="../../assets/image/right_bottom.png" class="img-right-bottom">
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
    const option = {
        title: {
            text: "2023年各省GDP总值(单位:千亿)",
            top: "5%",
            left: "3%",
            textStyle: {
                fontSize: 18,
                color: "#ffffff"
            }
        },
        tooltip: {
            show: true,
            formatter: '{b}: {c}',
            confine: true,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#ffffff",
            },
        },
        visualMap: {
            bottom: "2%",
            left: "5%",
            text: ['高', '低'],
            calculable: true,
            textStyle: {
                fontSize: 14,
                color: "#ffffff"
            },
            inRange: {
                color: ['#D7FFFF', '#80FD78', '#E6FF00', '#FF8000', '#FF0000']
            }
        },
        geo3D: {
            map: 'china',
            regionHeight: 0,
            viewControl: {
                distance: 78,
                center: [-8, -10, 0],
                alpha: 43
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
                viewControl: {
                    distance: 78,
                    center: [-8, -10, 0],
                    alpha: 43
                },
                itemStyle: {
                    opacity: 1,
                    borderWidth: 0.5,
                    borderColor: 'gray'
                },
                data: mapsData
            },
        ],
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
#map {
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
<template>
    <div id="strokeAnimation"></div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'

const { proxy }: any = getCurrentInstance()
const echarts = proxy.$echarts
type EChartsOption = echarts.EChartsOption

onMounted(() => {
    initEcharts()
})

const initEcharts = () => {
    const myChart = echarts.init(document.getElementById('strokeAnimation'))
    const option: EChartsOption = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    bottom: 'middle',
                    style: {
                        text: '数据可视化大屏',
                        fontSize: 60,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#000',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 2000,
                        keyframes: [
                            {
                                percent: 0.6,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                percent: 0.65,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1.2,
                                style: {
                                    fill: 'black'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
    myChart.setOption(option)
}
</script>

<style scoped>
#strokeAnimation{
    height: 100%;
    width: 100%;
}
</style>
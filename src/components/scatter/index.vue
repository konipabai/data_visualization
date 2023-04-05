<template >
    <div class="outer-box">
        <img src="../../assets/image/left_line.png" class="img-left">
        <img src="../../assets/image/right_line.png" class="img-right">
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
            text: "随机50人的月收入与支出(单位:元)",
            top: '6%',
            left: '5%',
            textStyle: {
                color: "white",
                fontSize: 18
            },
        },
        grid: {
            left: '14%',
            right: '10%',
            top: '25%',
            bottom: '10%',
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#fff",
            },
            formatter: function (params: any) {
                return ("收入: " + params.value[0] + "<br>支出: " + params.value[1])
            },
            confine: true
        },
        toolbox: {
            top: "5%",
            right: "3%",
            feature: {
                dataZoom: {
                    title: {
                        zoom: "截取区域缩放",
                        back: "区域缩放还原",
                    },
                },
            },
            iconStyle: {
                borderColor: "#ffffff"
            },
            emphasis: {
                iconStyle: {
                    borderColor: '#7FB9D2'
                }
            }
        },
        xAxis: {
            type: 'value',
            name: "收\n入\n",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            type: 'value',
            name: "支出",
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        series: [
            {
                symbolSize: 14,
                type: 'scatter',
                data: scatterData,
                itemStyle: {
                    color: '#9AE0EC'
                },
            }
        ]
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
#scatter {
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
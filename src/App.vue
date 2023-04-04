<script setup lang="ts">
import strokeAnimation from './components/strokeAnimation/index.vue'
import lineChart from './components/line/index.vue'
import pieChart from './components/pie/index.vue'
import mapChart from './components/map/index.vue'
import lineRace from './components/lineRace/index.vue'
import barChart from './components/bar/index.vue'
import scatterChart from './components/scatter/index.vue'
</script>

<template>
  <div class="box">
    <div class="box-main">
      <div class="box-main-left">
        <div class="box-main-left-top">
          <pieChart></pieChart>
        </div>
        <div class="box-main-left-bottom">
          <lineChart></lineChart>
        </div>
      </div>
      <div class="box-main-center">
        <div class="box-main-center-top">
          <strokeAnimation></strokeAnimation>
        </div>
        <div class="box-main-center-middle">
          <mapChart></mapChart>
        </div>
        <div class="box-main-center-bottom">
          <lineRace></lineRace>
        </div>
      </div>
      <div class="box-main-right">
        <div class="box-main-right-top">
          <barChart></barChart>
        </div>
        <div class="box-main-right-bottom">
          <scatterChart></scatterChart>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
.box{
  height: 100%;
  width: 100%;
  background: url(./assets/image/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &-main{
    height: 100%;
    width: 100%;
    padding: 0% 2% 2% 3%;
    box-sizing: border-box;
    display: flex;
    &-left{
      position: relative;
      height: 100%;
      width: 25.5%;
      padding-top: 2%;
      box-sizing: border-box;
      &-top{
        height: 47%;
        width: 100%;
      }
      &-bottom{
        height: 47%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    &-center{
      position: relative;
      height: 100%;
      width: 49%;
      &-top{
        height: 9.4%;
        width: 100%;
      }
      &-middle{
        height: 55%;
        width: 100%;
        padding: 0 2%;
        box-sizing: border-box;
      }
      &-bottom{
        height: 34%;
        width: 100%;
        padding: 0 2%;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    &-right{
      position: relative;
      height: 100%;
      width: 25.5%;
      padding-top: 2%;
      box-sizing: border-box;
      &-top{
        height: 47%;
        width: 100%;
      }
      &-bottom{
        height: 47%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>

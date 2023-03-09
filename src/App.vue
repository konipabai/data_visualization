<script setup lang="ts">
import strokeAnimation from './components/strokeAnimation/index.vue'
import lineChart from './components/line/index.vue'
</script>

<template>
  <div class="box">
    <div class="box-top">
      <strokeAnimation></strokeAnimation>
    </div>
    <div class="box-main">
      <div class="box-main-left">
        <div class="box-main-left-top">
          <lineChart></lineChart>
        </div>
        <div class="box-main-left-bottom"></div>
      </div>
      <div class="box-main-center">
        <div class="box-main-center-top"></div>
        <div class="box-main-center-bottom"></div>
      </div>
      <div class="box-main-right">
        <div class="box-main-right-top"></div>
        <div class="box-main-right-bottom"></div>
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
  // overflow:hidden;
}
.box{
  height: 100%;
  width: 100%;
  // background: url(./assets/image/bg.jpg);
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  &-top{
    height: 10%;
    width: 100%;
    background-color: #99FF99;
  }
  &-main{
    height: 90%;
    width: 100%;
    padding-top: 1%;
    box-sizing: border-box;
    // background-color: #99FFFF;
    display: flex;
    &-left{
      height: 100%;
      width: 30%;
      background-color: #CCCCFF;
      &-top{
        height: 50%;
        width: 100%;
        background-color: #FFB7DD;
      }
      &-bottom{
        box-sizing: border-box;
        padding-top: 1%;
        height: 50%;
        width: 100%;
        // background-color: #FFB7DD;
      }
    }
    &-center{
      height: 100%;
      width: 40%;
      padding: 0 1%;
      box-sizing: border-box;
      // background-color: #CCCCFF;
      &-top{
        height: 65%;
        width: 100%;
        // background-color: #FFB7DD;
      }
      &-bottom{
        box-sizing: border-box;
        padding-top: 1%;
        height: 35%;
        width: 100%;
        // background-color: #FFB7DD;
      }
    }
    &-right{
      height: 100%;
      width: 30%;
      // background-color: #CCCCFF;
      &-top{
        height: 50%;
        width: 100%;
        // background-color: #FFB7DD;
      }
      &-bottom{
        box-sizing: border-box;
        padding-top: 1%;
        height: 50%;
        width: 100%;
        // background-color: #FFB7DD;
      }
    }
  }
}
</style>

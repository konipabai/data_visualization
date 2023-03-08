import { createApp } from 'vue'
import './assets/css/reset.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$echarts = echarts
app.use(ElementPlus)
app.mount('#app')

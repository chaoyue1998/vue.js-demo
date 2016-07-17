import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue'
import Hello from './components/Hello.vue'
import Bar from './components/Bar.vue'
import UsrInput from './components/UsrInput.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home,
    subRoutes: {
      '/bar': {
        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
        // 一个Bar组件
        component: Bar
      }
    }
  },
  '/hello': {
    component: Hello
  },
  '/usrinput': {
    component: UsrInput
  }
})

router.start(App, 'app')

<template>
  <div id="app">
  <h1>biao</h1>
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划表
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/usrinput'">UsrInput</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
         <a v-link="{ path: '/home' }">Go to Bar</a>
         <a v-link="{ path: '/hello' }">Go to Hello</a>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './vuex/store'

export default {
  components: {
    Hello
  },
  store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

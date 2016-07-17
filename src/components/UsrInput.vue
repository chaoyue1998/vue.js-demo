<template>
  <div>
    <Display></Display>
    <Ctrl></Ctrl>
  </div>
</template>

<script>
import Display from './Display.vue'
import Ctrl from './Ctrl.vue'
import store from '../vuex/store'
export default {
  components: {
    Display,
    Ctrl
  },
  store
}
</script>
<template>
  <div class="hello" @click="alertEvent()">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { incrementCounter } from '../vuex/actions'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    alertEvent () {
      console.log(1)
    }
  },
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

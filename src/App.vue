<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <input v-model="inputCpm1">
    <cmp1 :msg="inputCpm1"></cmp1>

    <button @click="show=!show">c'mon in</button>
    <div class="come" v-show="show">Hey, i'm coming</div>
  </div>
</template>

<script>
import cmp1 from './components/cmp1'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputCpm1: '',
      show: false,
    }
  },
  components: {
    cmp1,
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

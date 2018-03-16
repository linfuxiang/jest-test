<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <component :is="showingCmp"></component>
    <button @click="checkoutCmp">checkout component</button>
  </div>
</template>

<script>
import cmp1 from './components/cmp1'
import cmp2 from './components/cmp2'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showingCmp: '',
    }
  },
  components: {
    cmp1,
    cmp2,
  },
  methods: {
    checkoutCmp() {
      this.showingCmp = this.showingCmp == 'cmp1' ? 'cmp2' : 'cmp1'
    },
  },
  mounted() {
    this.showingCmp = 'cmp1'
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

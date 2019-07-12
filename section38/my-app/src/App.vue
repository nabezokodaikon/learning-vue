<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(this.$store.state.count)
    console.log(this.$store.getters.max)
    console.log(this.$store.getters.price('リンゴ'))
    this.$store.commit('increment')
    this.$store.commit('mutationType', 5);
    console.log(this.$store.state.count)
    this.$store.dispatch('actionType', 10);
    console.log(this.$store.state.count)
  }
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
</style>

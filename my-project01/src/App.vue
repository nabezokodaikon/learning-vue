<template>
  <div>
    <MyHeader></MyHeader>
    <MyHeader></MyHeader>
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button v-on:click="clear()">clear</button>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  components: {
    MyHeader
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    clear() {
      this.msg = ''
    }
  },
  created() {
    fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.msg = json.postalcodes[0].adminName1
      })
      .catch(err => {
        this.msg = err
      })
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

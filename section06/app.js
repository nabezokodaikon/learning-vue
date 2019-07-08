new Vue({
  el: "#app",
  data: {
    message: "Vue.js"
  },
  computed: {
    computedMessage: function() {
      return `${this.message}!`
    }
  },
  created: function() {
    console.log("created");
  },
  methods: {
    myMethod: function() {
      return `${this.message}!!`
    }
  }
});

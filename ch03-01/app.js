const vm = new Vue({
  el: "#app",
  data: {
    messagePrefix: "Hello"
  },
  computed: {
    message: function() {
      const timestamp = Date.now();
      return `${this.messagePrefix}, ${timestamp}`;
    }
  }
});

window.vm = vm;

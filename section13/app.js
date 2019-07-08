const vm = new Vue({
  el: "#app",
  data: {
    count: 0,
    item: "item",
    show: true,
    message: "Hello Vue.js"
  },
  methods: {
    handleClick: function(event, item) {
      alert(item);
    },
    handleLoad: function() {
      console.log("image loaded!");
    },
    handleInput: function(event) {
      this.message = event.target.value;
    },
    handler: function(comment) {
      console.log(comment);
    },
    close: function() {
      console.log("close");
    },
    doDelete: function() {
      console.log("shift + click");
    }
  }
});

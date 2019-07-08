const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    list: ["リンゴ", "バナナ", "イチゴ"],
    count: 1,
    show: true
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    }
  }
});

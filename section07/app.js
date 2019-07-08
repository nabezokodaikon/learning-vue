const state = { count: 0 };

new Vue({
  el: "#app",
  data: {
    message: "Vue.js!",
    state: state
  }
});

state.count++;

const myComponent = {
  template: "<p>MyComponent</p>"
};

new Vue({
  el: "#app",
  components: {
    "my-component": myComponent
  }
});

// Vue.component("my-component", {
  // template: "<p>MyComponent</p>"
// });

// Vue.component("my-component", {
  // template: "<p>{{ message }}</p>",
  // data: function() {
    // return {
      // message: "Hello Vue.js"
    // }
  // }
// })

// new Vue({
  // el: "#app",
  // template: "<p>{{ message }}</p>",
  // data: function() {
    // return {
      // message: "Hello Vue.js"
    // }
  // }
// });

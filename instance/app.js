// const data = { a: 1 };
// const vm = new Vue({
  // data: data
// });

// const obj = {
  // foo: "bar"
// };

// Object.freeze(obj);

// new Vue({
  // el: "#app",
  // data: obj
// });

// const data = { a: 1 };
// const vm = new Vue({
  // el: "#example",
  // data: data
// });

// console.log(vm.$data === data)
// console.log(vm.$el === document.getElementById("example"))

// vm.$watch("a", (newValue, oldValue) => {
  // console.log("change a");
// });

// data.a = 2;

new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log(`a is: ${this.a}`);
  }
});

{
  const data = { a: 1 };
  const vm = new Vue({
    data: data
  });

  console.log(vm.a);
  console.log(data.a);
  console.log(vm.a == data.a);

  vm.a = 2;
  console.log(data.a);

  data.a = 3;
  console.log(vm.a);

  const obj = {
    foo: "bar"
  };

  Object.freeze(obj);

  new Vue({
    el: "#app",
    data: obj
  });
}

{
  const data = { a: 1 };
  const vm = new Vue({
    el: "#example",
    data: data
  });

  console.log(vm.$data === data);
  console.log(vm.$el === document.getElementById("example"));
}

{
  const vm = new Vue({
    el: "#created",
    data: {
      a: 1
    },
    created: function() {
      console.log(`a is: ${this.a}`);
    },
    updated: function() {
      console.log(`a is: ${this.a}`);
    }
  });
}

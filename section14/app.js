new Vue({
  el: "#app",
  data: {
    message: "Hello!",
    val: [],
    preview: ""
  },
  methods: {
    handleChange: function(event) {
      const file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    }
  }
});

new Vue({
  el: "#app2",
  data: {
    val: 50,
    price: 100
  }
});

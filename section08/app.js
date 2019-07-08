new Vue({
  el: "#app",
  data: {
    message: {
      value: "Hello Vue.js!"
    },
    list: ["リンゴ", "バナナ", "イチゴ"],
    num: 1,
    scroll: 0,
    count: 0,
    textColor: "red",
    styleObject: {
      color: "red",
      backgroundColor: "lightgray"
    }
  },
  mounted: function() {
    this.scroll = 100
  },
  methods: {
    increment: function() {
      this.count += 1;
      setTimeout(() => this.count += 1, 1000);
    }
  }
});

new Vue({
  el: "#app-2",
  data: {
    item: {
      id: 1,
      src: "item1.png",
      alt: "商品サムネイル",
      width: 200,
      height: 200
    }
  }
});

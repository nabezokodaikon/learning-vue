const scroll = new SmoothScroll();

new Vue({
  el: "#app",
  data: {
    scrollY: 0,
    timer: null
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("created");
  },
  beforeDestoroy: function() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("beforeDestoroy");
  },
  methods: {
    handleScroll: function() {
      console.log("handleScroll");
      if (this.timer === null) {
        this.timer = setTimeout(function() {
          console.log("timer");
          this.scrollY = window.scrollY;
          clearTimeout(this.timer);
        }.bind(this), 200);
      }
    },
    scrollTop: function() {
      scroll.animateScroll(0)
    }
  }
});

const app = new Vue({
  el: "#app",
  data: {
    width: 800,
    height: 600
  },
  computed: {
    halfWidth: {
      get: function() { return this.width / 2; },
      set: function(val) { this.width = val * 2; }
    },
    halfHeight: function() {
      return this.height / 2;
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      };
    },
    computedData: function() { return Math.random() }
  },
  methods: {
    methodsData: function() { return Math.random() }
  }
});

const app2 = new Vue({
  el: "#app2",
  data: {
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: "りんご", price: 100 },
      { id: 2, name: "ばなな", price: 200 },
      { id: 3, name: "いちご", price: 300 },
      { id: 4, name: "おれんじ", price: 400 },
      { id: 5, name: "めろん", price: 500 },
    ]
  },
  computed: {
    matched: function() {
      return this.list.filter(el => {
        return el.price <= this.budget;
      }, this);
    },
    limited: function() {
      return this.matched.slice(0, this.limit);
    }
  }
});

new Vue({
  el: "#app",
  data: {
    name: "キマイラ",
    list: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 }
    ],
    text: "Vue"
  },
  methods: {
    doAdd: function() {
      const max = this.list.reduce((a, b) => {
        return a.id > b.id ? a.id : b.id;
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });
    },
    doRemove: function(index) {
      this.list.splice(index, 1);
    },
    doAttack: function(index) {
      this.list[index].hp -= 10;
    }
  },
  created: function() {
    this.list.forEach(item => {
      this.$set(item, "active", false);
    });
    this.list = this.list.filter(item => item.hp >= 100);
  }
});

new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      { id: 1, name: 'リンゴ', price: 100 },
      { id: 2, name: 'バナナ', price: 200 },
      { id: 3, name: 'イチゴ', price: 300 },
    ]
  },
  computed: {
    sortedList: function() {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc');
    }
  }
});

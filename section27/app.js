const mixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello: function() {
      console.log('hello from mixin!');
    }
  }
}

Vue.component('my-component-a', {
  mixins: [mixin],
  template: '<div class="my-component-a">component A</div>'
});

Vue.component('my-component-b', {
  mixins: [mixin],
  template: '<div class="my-component-b">component B</div>'
});

new Vue({
  el: '#app',
  data: {
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0
  },
  computed: {
    component: function() {
      return this.componentTypes[this.current];
    }
  }
});

Vue.component('comp-board', {
  template: '<div>Message Board</div>'
});

Vue.component('comp-form', {
  template: '<div>Form<textarea v-model="message"></textarea></div>',
  data: function() {
    return { message: '' };
  }
});

new Vue({
  el: '#app2',
  data: {
    current: 'comp-board'
  }
});

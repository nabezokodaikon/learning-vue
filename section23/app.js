// Vue.component("comp-child", {
  // template: "<p>{{ val }}</p>",
  // props: ["val"]
// });

// Vue.component("my-component", {
  // template: "<p><comp-child val='これは親からのProps'></comp-child></p>"
// });

// Vue.component("comp-child", {
  // template: "<p id='child' class='child'>ChildComponent</p>"
// });

Vue.component("comp-child", {
  template: `
              <li>
                {{ name }} HP.{{ hp }}<button v-on:click='doAttack'>攻撃する</button>
              </li>
            `,
  props: { id: Number, name: String, hp: Number },
  methods: {
    doAttack: function() {
      this.$emit("attack", this.id);
    }
  }
});

new Vue({
  el: "#app",
  data: {
    list: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 },
    ]
  },
  methods: {
    handleAttack: function(id) {
      const item = this.list.find(el => {
        return el.id === id;
      });
      if (item !== undefined && item.hp > 0) {
        item.hp -= 10;
      }
    }
  }
});

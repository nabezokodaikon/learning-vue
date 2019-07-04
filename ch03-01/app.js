// Vue.component("list-item", {
  // template: "<li>foo {{ contents }}</li>",
  // data: function() {
    // return {
      // contents: "bar"
    // };
  // }
// });

// new Vue({
  // el: "#example"
// });

// Vue.component("fruits-list-title", {
  // template: "<h1>フルーツ一覧</h1>"
// });

// Vue.component("fruits-list-description", {
  // template: "<p>季節の代表的なフルーツの一覧です</p>"
// });

// Vue.component("fruits-list-table", {
  // template: `
  // <table>
    // <tr>
      // <th>季節</th>
      // <th>フルーツ</th>
    // </tr>
    // <tr>
      // <td>春</td>
      // <td>いちご</td>
    // </tr>
    // <tr>
      // <td>夏</td>
      // <td>スイカ</td>
    // </tr>
    // <tr>
      // <td>秋</td>
      // <td>ぶどう</td>
    // </tr>
    // <tr>
      // <td>冬</td>
      // <td>みかん</td>
    // </tr>
  // </table>
  // `
// });

// new Vue({
  // el: "#fruits-list"
// });

// Vue.component("fruits-list", {
  // template: `
    // <div>
      // <fruits-list-title></fruits-list-title>
    // </div>
  // `
// });

// new Vue({
  // el: "#main"
// });

// const FruitsListTitle = Vue.extend({
  // template: "<h1>フルーツ一覧</h1>"
// });

// new FruitsListTitle().$mount("#fruits-list2");

// Vue.component("fruits-list-title", FruitsListTitle);

// const FruitsListTitle = Vue.extend({
  // template: "<h1>フルーツ一覧</h1>"
// });

// new Vue({
  // el: "#fruits-list",
  // components: {
    // "fruits-list-title": FruitsListTitle
  // }
// });

// Vue.component("fruits-list-title", {
  // template: "#fruits-list-title"
// });

Vue.component("input-date-with-today", {
  render: function(createElement) {
    return createElement(
      "input",
      {
        attrs: {
          type: "date",
          value: new Date().toISOString().substring(0, 10)
        }
      }
    );
  }
});

new Vue({
  el: "#app"
});

Vue.component("simple-counter", {
  template: "<h1>フルーツ一覧</h1>",
  data: function() {
    return {
      fruits: ["りんご", "みかん"]
    };
  }
});

new Vue({
  el: "#app2"
});

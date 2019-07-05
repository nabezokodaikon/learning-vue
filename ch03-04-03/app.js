// const headerTemplate = `
  // <div style="color: gray;">
    // <slot name="header">*親から何も渡ってこない場合、この文が表示されます。</slot>
  // </div>
// `

// Vue.component("page-header", {
  // template: headerTemplate
// });

// new Vue({
  // el: "#fruits-list"
// });

const headerTemplate = `
  <div>
    <slot name="header">No title</slot>
  </div>
`;

const contentTemplate = `
  <div>
    <slot name="content">No contents</slot>
  </div>
`;

Vue.component("page-header", {
  template: headerTemplate
});

Vue.component("page-content", {
  template: contentTemplate
});

new Vue({
  el: "#fruits-list"
});

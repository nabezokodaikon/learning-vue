const router = new VueRouter({
  routes: [
    {
      path: "/top",
      component: {
        template: "<div>トップページです。</div>"
      }
    },
    {
      path: "/users",
      component: UserList
    },
    {
      path: "users/:userId",
      component: UserDetail
    }
  ]
});

const userData = [
  {
    id: 1,
    name: "Takuya Tejima",
    description: "東南アジアで働くエンジニアです。"
  },
  {
    id: 2,
    name: "Yohei Noda",
    description: "アウトドア・フットサルが趣味のエンジニアです。"
  }
];

const getUser = (userId, callback) => {
  setTimeout(() => {
    const filteredUsers = userData.filter(user => {
      return user.id === parseInt(userId, 10);
    })
    callback(null, filteredUsers && filteredUsers[0]);
  }, 1000)
};

const UserDetail = {
  template: "#user-detail",
  data: function() {
    return {
      loading: false,
      user: null,
      error: null
    }
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    "$route": "fetchData"
  },
  methods: {
    fetchData: function() {
      this.loading = true;
      getUser(this.$route.params.userId, ((err, user) => {
        this.loading = false;
        if (err) {
          this.err = err.toString();
        } else {
          this.user = user;
        }
      }).bind(this))
    }
  }
}

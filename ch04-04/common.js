var UserList = {
  template: "#user-list",
  data: function() {
    return {
      loading: false,
      users: function() { return []; },
      error: null
    };
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
      getUsers(((err, users) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.users = users;
        }
      }).bind(this))
    }
  }
}

var UserDetail = {
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

var UserCreate = {
  template: "#user-create",
  data: function() {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    };
  },
  created: function() {
  },
  methods: {
    defaultUser: function() {
      return {
        name: "",
        description: ""
      };
    },
    createUser: function() {
      if (this.user.name.trim() === "") {
        this.error = "Nameは必須です"
        return;
      }
      if (this.user.description.trim() === "") {
        this.error = "Descriptionは必須です"
        return;
      }
      postUser(this.user, ((err, user) => {
        this.sending = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.error = null;
          this.user = this.defaultUser();
          alert("新規ユーザーが登録されました");
          this.$router.push("/users");
        }
      }).bind(this))
    }
  }
};

var Auth = {
  login: function(email, pass, cb) {
    setTimeout(() => {
      if (email === "vue@example.com" && pass === "vue") {
        localStorage.token = Math.random().toString(36).substring(7);
        if (cb) {
          cb(true);
        }
      } else {
        if (cb) {
          cb(false);
        }
      }
    }, 0);
  },
  logout: function() {
    delete localStorage.token;
  },
  loggedIn: function() {
    return !!localStorage.token;
  }
};

var router = new VueRouter({
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
      path: "users/new",
      component: UserCreate,
      beforeEnter: function(to ,from, next) {
        if (!Auth.loggedIn()) {
          next({
            path: "/login",
            query: { redirect: to.fullPath }
          });
        } else {
          next();
        }
      }
    },
    {
      path: "users/:userId",
      component: UserDetail
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/logout",
      beforeEnter: function(to, from, next) {
        Auth.logout();
        next("/");
      }
    }
  ]
});

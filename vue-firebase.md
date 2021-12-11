# Vue Firebase

## Steps

1. Create new project from firebase console
2. Register a web app
3. Install [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html)
4. Go to directory and type `vue create app-name`
5. Create `firebase` folder in `src` directory and create `init.js` inside that folder.
6. Go to firebase console settings and copy SDK setup and configuration.
7. Go to this [link](https://sushil-kamble.github.io/env-firebase/) and paste the config there. Select Vue.js
8. Now click on copy button and create new `.env.local` file and paste it.
9. Click on Copy initializer and paste it in `init.js` file.

```js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
```

10. Change `main.js` file

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { auth } from "@/firebase/init.js";
import "./registerServiceWorker";

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
    store.dispatch("fetchUser", user); // SET OR RESET USER
    // SET IF ONLINE : RESET IF OFFLINE
  }
});
```

11. Register - Create User
    - Create user with email and password.
    - Update his profile add displayName
    - Then fetch user, that function is written in store

```js
auth
  .createUserWithEmailAndPassword(this.email, this.password)
  .then(data => {
    data.user
      .updateProfile({
        displayName: this.name
      })
      .then(() => {
        this.$store.dispatch("fetchUser", data.user);
        db.ref("/users/" + data.user.uid).set({
          name: data.user.displayName,
          id: data.user.uid
        });
        this.feedback = "";
        this.loading = false;
      });
    this.$router.replace({ name: "Home" });
  })
  .catch(err => {
    this.feedback = err.message;
    this.loading = false;
  });
```

12. Login - Sign In

```js
auth
  .signInWithEmailAndPassword(this.email, this.password)
  .then(() => {
    this.feedback = "";
    this.loading = false;
    this.$router.replace({ name: "Home" });
  })
  .catch(err => {
    console.log(err);
    this.feedback = err.message;
    this.loading = false;
  });
```

13. Forget Password - Send Password reset to mail

```js
auth
  .sendPasswordResetEmail(this.email)
  .then(() => {
    this.feedback = "Email Successfully Sent";
    this.email = null;
    this.loading = false;
    this.$refs.form.reset();
  })
  .catch(error => {
    console.log(error);
    this.feedback = error.message;
    this.loading = false;
  });
```

14. Vuex Store - `src/store/index.js`

```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) {
        commit("SET_USER", {
          id: user.uid,
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
```

More complex example is [here](https://github.com/sushil-kamble/mobile-store-hackathon/blob/main/src/store/index.js).

15. Router - `router/index.js`

```js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "@/firebase/init.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // PROTECTED PATH
  // For Protected Path include meta property as shown below.
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  // PROTECTED PATH
  {
    path: "/item/:id", // Items Sub Page
    name: "Item",
    component: () => import(/* webpackChunkName: "item" */ "../views/Item.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
```

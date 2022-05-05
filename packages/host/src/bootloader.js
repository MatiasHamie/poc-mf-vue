import { createApp } from "vue";
import { createStore } from "vuex";
import * as VueRouter from "vue-router";

import "./index.css";
import App from "./App.vue";

import Home from "./Home.vue";
import About from "remote/About";

const store = createStore({
  state() {
    return {
      countHost: 1,
    };
  },
  mutations: {
    addOneHost(state) {
      console.log("add one mutation called");
      state.countHost++;
    },
  },
});

const routes = [
  { path: "/", component: Home },
  { path: "/abouthost", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");

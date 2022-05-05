import { createApp } from "vue";
import { createStore } from "vuex";
import * as VueRouter from "vue-router";

import "./index.css";

import App from "./App.vue";
import Prueba from "./Prueba.vue";
import About from "./About.vue";

const store = createStore({
  state() {
    return {
      countRemoto: 1,
    };
  },
  mutations: {
    addOneRemoto(state) {
      console.log("add one mutation called");
      state.countRemoto++;
    },
  },
});

const routes = [
  { path: "/prueba", component: Prueba },
  { path: "/aboutremote", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");

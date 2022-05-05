<template>
  <div class="container">
    <Header />
    <div>Name: host</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <p>Store Count HOST State {{ countHost }}</p>
    <button v-on:click="addOne">Add one to Count</button>

    <hr />
    <router-view />
    <!-- <App /> -->
  </div>
</template>

<script>
import Header from "remote/Header";
// import App from "remoteApp/App";
export default {
  components: {
    Header,
    // App,
  },
  computed: {
    countHost() {
      return this.$store.state.countHost;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("addOneHost");
    },
  },
};
</script>

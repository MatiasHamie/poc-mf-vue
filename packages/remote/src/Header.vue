<template>
  <nav>
    <h1>REMOTE</h1>
    <p>This is a header on the remote app</p>
    <p>
      Remote App vuex state<b>"{{ countRemote }}"</b>
    </p>
    <p>
      Host App vuex state<b>"{{ countHost }}"</b>
    </p>
    <router-view />
    <button v-on:click="goToPrueba">Go to a Ruta prueba REMOTO</button>
    <button v-on:click="goToAboutRemoto">Go to a About REMOTO</button>
    <button v-on:click="addOne">Add one to Remote Store</button>
  </nav>
</template>

<script>
export default {
  computed: {
    countRemote() {
      return this.$store?.state?.countRemoto ?? "no esta";
    },
    countHost() {
      return this.$store?.state?.countHost ?? "no esta";
    },
  },

  methods: {
    goToPrueba() {
      console.log(this.$router);
      this.$router.push("/prueba");
    },
    goToAboutRemoto() {
      console.log(this.$router);
      this.$router.push("/aboutremoto");
    },
    addOne() {
      console.log(this.$store)
      this.$store.commit("addOneRemote");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: blue;
}
</style>

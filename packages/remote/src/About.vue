<template>
  <div>About Page Route on REMOTE aslkdnalkndlkadlkas</div>
  <button v-on:click="goToHost">Go to HOST HOME page</button>
</template>

<script>
export default {
  methods: {
    goToHost() {
      console.log(this.$router);
      this.$router.push("/");
    },
  },
};
</script>

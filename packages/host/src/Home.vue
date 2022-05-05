<template>
  <div>Home Page Route on HOST</div>
  <button v-on:click="goToRemote">Go to a REMOTE ABOUT page</button>
</template>

<script>
export default {
  methods: {
    goToRemote() {
      console.log(this.$router);
      this.$router.push("/about");
    },
  },
};
</script>

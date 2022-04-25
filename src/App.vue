<template>
  <v-app>
    <custom-header />
    <router-view />
  </v-app>
</template>

<script>
import customHeader from "./components/custom-header.vue";

export default {
  components: {
    customHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>

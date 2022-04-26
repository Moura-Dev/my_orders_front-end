<template>
  <v-app>
    <custom-header />
    <router-view />
    <custom-footer />
  </v-app>
</template>

<script>
import customHeader from "./components/custom-header.vue";
import customFooter from "./components/custom-footer.vue";

export default {
  components: {
    customHeader,
    customFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif !important;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>

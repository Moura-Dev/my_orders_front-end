<template>
  <div id="app">
    <custom-header />
    <router-view />
  </div>
</template>

<script>
import customHeader from "./components/custom-header.vue";

// @ is an alias to /src

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
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
  color: black;
}
</style>

<template>
  <div id="home">
    <h1 class="text-center pt-2 white--text">Estatísticas</h1>
    <div class="chartbar">
      <BarChart />
    </div>
  </div>
</template>

<script>
import BarChart from "../components/custom-bar.vue";

export default {
  name: "App",
  components: {
    BarChart,
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  background: #051f13;
}

.chartbar {
  max-width: 90%;
  margin: 0 auto;
  padding-top: 3em;
}
</style>

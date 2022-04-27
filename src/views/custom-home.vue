<template>
  <div id="home" class="pt-3 pb-3">
    <h1 class="text-center pt-2">Estatísticas</h1>
    <div class="chartbar">
      <v-row>
        <v-col cols="7">
          <BarChart />
        </v-col>
        <v-col>
          <doughnut-chart />
        </v-col>
      </v-row>
      <v-row class="pt-16 mt-10">
        <v-col>
          <pie-chart />
        </v-col>
        <v-col>
          <pie-chart />
        </v-col>
        <v-col>
          <pie-chart />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/custom-bar.vue";
import DoughnutChart from "../components/custom-doughnut.vue";
import PieChart from "../components/custom-piechart.vue";

export default {
  name: "App",
  components: {
    BarChart,
    DoughnutChart,
    PieChart,
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
}

.chartbar {
  max-width: 95%;
  margin: 0 auto;
  padding-top: 3em;
}
</style>

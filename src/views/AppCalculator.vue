<template>
  <div id="appCalculator">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./../components/Calculator.vue";

export default {
  name: "AppCalculator",
  components: {
    Calculator
  }
};
</script>

<style scoped>
#appCalculator {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

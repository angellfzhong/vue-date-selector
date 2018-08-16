<template>
  <div>
      <CitySelector />
      <DateSelector />
  </div>
</template>

<script>
import CitySelector from "./CitySelector.vue";
import DateSelector from "./DateSelector.vue";

export default {
  name: "VueSelector",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    CitySelector: CitySelector,
    DateSelector: DateSelector
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div id="app">
    <form id="journey-details">
      <journey-type></journey-type>

      <div id="single-journey">
        <auto-complete></auto-complete>
        <journey-destination></journey-destination>
        <passenger-type></passenger-type>
      </div>

      <div id="multii-journey">
        <h3>Multi Journey</h3>
      </div>

      <div id="explorer-pass">
        <h3>explorer pass</h3>
      </div>
    </form>
  </div>
</template>

<script>
import JourneyType from "./components/journeyType.vue";
import journeyStart from "./components/journeyStart.vue";
import journeyDestination from "./components/journeyDestination.vue";
import passengerType from "./components/passengerType.vue";
import autocomplete from "./components/Autocomplete.vue";
export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "journey-start": journeyStart,
    "journey-destination": journeyDestination,
    "passenger-type": passengerType,
    "auto-complete": autocomplete,
  },

  data: function () {
    return {};
  },
};
</script>

<style scoped>
.widget__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 1 100%;
}
</style>


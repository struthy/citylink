<template>
  <div id="app">
    <journey-type></journey-type>
    <journey-start></journey-start>
    <journey-destination></journey-destination>
    <passenger-type></passenger-type>
  </div>
</template>

<script>
import JourneyType from "./components/journeyType.vue";
import journeyStart from "./components/journeyStart.vue";
import journeyDestination from "./components/journeyDestination.vue";
import passengerType from "./components/passengerType.vue";

export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "journey-start": journeyStart,
    "journey-destination": journeyDestination,
    "passenger-type": passengerType,
  },

  data: function () {
    return {};
  },
};
</script>

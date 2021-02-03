<template>
  <div id="app">
    <journey-type></journey-type>
    <journey-start></journey-start>
    <journey-destination></journey-destination>
  </div>
</template>

<script>
import JourneyType from "./components/journeyType.vue";
import journeyStart from "./components/journeyStart.vue";
import journeyDestination from "./components/journeyDestination.vue";

export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "journey-start": journeyStart,
    "journey-destination": journeyDestination,
  },

  data: function () {
    return {};
  },
};
</script>

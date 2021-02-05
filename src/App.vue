<template>
  <div id="app">
    <form id="journey-details">
      <journey-type></journey-type>

      <div v-if="selectedJourneyType == 'single / return'" id="single-journey">
        <auto-complete
          form-label="From"
          :items="[
            'Glasgow Airport',
            'Glasgow Anniesland',
            'Glasgow Buchanan Bus Station',
            'Glasgow Cathedral Steet',
            'ect....'
          ]"
        />

        <auto-complete
          form-label="To"
          :items="[
            'Inverness Montague Road',
            'Inverness Tomnahurich',
            'Inverary',
            'Inveraray Brae',
            'ect....'
          ]"
        />

        <passenger-type></passenger-type>
      </div>

      <div v-if="selectedJourneyType == 'Multi journey'" id="multi-journey">
        <h3>Multi Journey</h3>
      </div>

      <div v-if="selectedJourneyType == 'Explorer passes'" id="explorer-pass">
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
    "auto-complete": autocomplete
  },

  data: function() {
    return {};
  },

  computed: {
    journeytypes() {
      return this.$store.state.journeytypes;
    },

    saleJourneytypes() {
      return this.$store.getters.saleJourneytypes;
    },

    selectedJourneyType: {
      get() {
        return this.$store.state.selectedJourneyType;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyType", value);
      }
    }
  }
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

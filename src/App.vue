<template>
  <div id="app">
    <div class="widget__container">
      <journey-type></journey-type>
      <vue-autosuggest
        :suggestions="[
          {
            data: [
              'Glasgow Airport',
              'Glasgow Anniesland',
              'Glasgow Buchanan Bus Station',
              'Glasgow Cathedral Steet',
              'Faramir',
              'ect....',
            ],
          },
        ]"
        :input-props="{
          id: 'autosuggest__input',
          placeholder: 'Journey Destination',
        }"
        @input="onInputChange"
        @selected="selectHandler"
        @click="clickHandler"
      >
        <template slot-scope="{ suggestion }">
          <span class="my-suggestion-item">{{ suggestion.item }}</span>
        </template>
      </vue-autosuggest>
      <journey-destination></journey-destination>
      <passenger-type></passenger-type>
    </div>
  </div>
</template>

<script>
import JourneyType from "./components/journeyType.vue";
import journeyStart from "./components/journeyStart.vue";
import journeyDestination from "./components/journeyDestination.vue";
import passengerType from "./components/passengerType.vue";
import { VueAutosuggest } from "vue-autosuggest";
export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "journey-start": journeyStart,
    "journey-destination": journeyDestination,
    "passenger-type": passengerType,
    VueAutosuggest,
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


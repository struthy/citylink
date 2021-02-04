<template>
  <div id="journey-start">
    <div class="widget__select">
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
          placeholder: 'Journey Start point',
        }"
      >
        <template slot-scope="{ suggestion }">
          <span class="my-suggestion-item">{{ suggestion.item }}</span>
        </template>
      </vue-autosuggest>

      <h3>data coming from store as example</h3>
      <ul>
        <li li v-for="(journeystart, i) in journeystarts" :key="'a' + i">
          {{ journeystart.leavingFrom }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { VueAutosuggest } from "vue-autosuggest";
export default {
  components: {
    VueAutosuggest,
  },
  computed: {
    journeystarts() {
      return this.$store.state.journeystarts;
    },
  },
};
</script>

<template>
  <div id="journey-type">
    <h2>Journey type</h2>
    <ul>
      <li
        v-for="(journeytype, i) in saleJourneytypes"
        :key="'journeytypes' + i"
      >
        <span>{{ journeytype.type }}</span>
        <span>--- {{ journeytype.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice">reduce Price</button>
  </div>
</template>
<script>
export default {
  computed: {
    journeytypes() {
      return this.$store.state.journeytypes;
    },

    saleJourneytypes() {
      return this.$store.getters.saleJourneytypes;
    },
  },

  methods: {
    reducePrice: function () {
      // this.$store.state.journeytypes.forEach((saleJourneytype) => {
      //   saleJourneytype.price -= 1;
      // });
      // this.$store.commit("reducePrice");

      this.$store.dispatch("reducePrice");
    },
  },
};
</script>

<template>
  <div id="journey-type">
    <ul>
      <li><b>Journey type</b></li>
      <li v-for="(journeytype, i) in journeytypes" :key="'journeytypes' + i">
        <span>{{ journeytype.type }}</span>
      </li>
    </ul>
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
      this.$store.dispatch("reducePrice");
    },
  },
};
</script>

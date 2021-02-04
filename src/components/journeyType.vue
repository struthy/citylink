<template>
  <div id="journey-type">
    <div class="widget__select">
      <label class="widget__select--label">Type</label>
      <select v-model="selected">
        <option
          v-for="(journeytype, i) in journeytypes"
          :key="'journeytypes' + i"
        >
          {{ journeytype.type }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      selected: "single / return",
    };
  },

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

<style scoped>
.widget__select {
}

.widget__select--label {
}
</style>

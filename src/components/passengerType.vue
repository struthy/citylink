<template>
  <div id="passenger-type">
    <ul>
      <li><b>Passenger type</b></li>
      <li
        v-for="(passengertype, i) in passengertypes"
        :key="'passengertypes' + i"
      >
        <span>{{ passengertype.type }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    passengertypes() {
      return this.$store.state.passengertypes;
    },
  },
};
</script>

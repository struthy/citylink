<template>
  <div id="journey-start">
    <h2>Journey Destination</h2>
    <ul>
      <li v-for="(journeydestination, i) in journeydestinations" :key="'a' + i">
        {{ journeydestination.arrivingAt }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    journeydestinations() {
      return this.$store.state.journeydestinations;
    },
  },
};
</script>

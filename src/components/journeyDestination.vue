<template>
  <div id="journey-destination">
    <ul>
      <li><b>Journey Destination</b></li>
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

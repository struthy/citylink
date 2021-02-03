<template>
  <div id="journey-start">
    <ul>
      <li><b>Journey start</b></li>
      <li v-for="(journeystart, i) in journeystarts" :key="'a' + i">
        {{ journeystart.leavingFrom }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    journeystarts() {
      return this.$store.state.journeystarts;
    },
  },
};
</script>

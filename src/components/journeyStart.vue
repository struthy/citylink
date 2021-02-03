<template>
  <div id="journey-start">
    <h2>Journey start</h2>
    <ul>
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

<template>
  <div id="journey-start">
    <div class="widget__select">
      <label class="widget__select--label">From</label>
      <input type="text" />
      <ul>
        <li v-for="(journeystart, i) in journeystarts" :key="'a' + i">
          {{ journeystart.leavingFrom }}
        </li>
      </ul>
    </div>
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

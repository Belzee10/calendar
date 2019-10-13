<template>
  <div>
    <v-calendar type="month" :events="events"></v-calendar>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>

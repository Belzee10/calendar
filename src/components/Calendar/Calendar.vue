<template>
  <v-sheet height="500">
    <v-calendar type="month" :events="events">
      <template v-slot:day="{ date }">
        <Event />
      </template>
    </v-calendar>
  </v-sheet>
</template>

<script>
import Event from '@/components/Event/Event.vue';
export default {
  name: 'Calendar',
  components: { Event },
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>

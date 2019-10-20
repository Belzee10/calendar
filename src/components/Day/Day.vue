<template>
  <v-sheet>
    <Event v-for="event in events" :key="event.id" v-bind="event" />
  </v-sheet>
</template>

<script>
import Event from '@/components/Event/Event.vue';
export default {
  name: 'Day',
  components: { Event },
  props: {
    events: {
      type: Array,
      default: () => []
    },
    day: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>

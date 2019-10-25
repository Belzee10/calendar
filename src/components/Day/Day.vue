<template>
  <v-sheet>
    <Event
      v-for="event in events"
      :key="event.id"
      v-bind="event"
      @click-on-event="id => $emit('click-on-event', id)"
    />
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
    }
  }
};
</script>

<style lang="scss" scoped></style>

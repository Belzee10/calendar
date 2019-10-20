<template>
  <v-sheet height="500">
    <v-calendar type="month" :events="events">
      <template v-slot:day="{ date }">
        <Day />
      </template>
    </v-calendar>
  </v-sheet>
</template>

<script>
import Day from '@/components/Day/Day.vue';
export default {
  name: 'Calendar',
  components: { Day },
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>

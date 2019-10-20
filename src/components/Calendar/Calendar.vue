<template>
  <v-sheet height="500" class="calendar-container">
    <v-calendar type="month" :events="events">
      <template v-slot:day-label="{ day }">
        <DayLabel :day="day" />
      </template>
      <template v-slot:day="{ date }">
        <Day :events="getEventsByDay(date)" :day="date" />
      </template>
    </v-calendar>
  </v-sheet>
</template>

<script>
import Day from '@/components/Day/Day.vue';
import DayLabel from '@/components/DayLabel/DayLabel.vue';

export default {
  name: 'Calendar',
  components: { Day, DayLabel },
  props: {
    events: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getEventsByDay(date) {
      return this.events.filter(item => item.start === date);
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-container {
  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
}
</style>

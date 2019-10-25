<template>
  <v-sheet height="500" class="calendar-container">
    <v-calendar type="month" :events="events">
      <template v-slot:day-label="{ day, date }">
        <DayLabel :day="day" :date="date" @add-event="addEvent" />
      </template>
      <template v-slot:day="{ date }">
        <Day
          :events="getEventsByDay(date)"
          @click-on-event="id => $emit('click-on-event', id)"
        />
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
    },
    addEvent(date) {
      this.$emit('add-event', date);
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

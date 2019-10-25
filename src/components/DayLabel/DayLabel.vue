<template>
  <v-btn
    class="add-event"
    :outlined="isCurrentDay"
    text
    small
    @mouseenter="handleHover"
    @mouseleave="handleHover"
    @click="addEvent"
  >
    {{ day }}
    <span v-if="showText" class="font-weight-light ml-1">Add event</span>
  </v-btn>
</template>

<script>
import dayjs from 'dayjs';
export default {
  name: 'DayLabel',
  props: {
    day: {
      type: Number,
      default: null
    },
    date: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    showText: false
  }),
  computed: {
    isCurrentDay() {
      return (
        dayjs(this.date).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY')
      );
    }
  },
  methods: {
    handleHover() {
      this.showText = !this.showText;
    },
    addEvent() {
      this.$emit('add-event', this.date);
    }
  }
};
</script>

<style lang="scss" scoped></style>

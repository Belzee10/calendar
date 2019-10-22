<template>
  <v-btn
    class="add-event"
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
  methods: {
    handleHover() {
      this.showText = !this.showText;
    },
    addEvent() {
      this.$emit('add-event', {
        date: this.date
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-btn text small @mouseenter="handleHover" @mouseleave="handleHover">
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
    }
  },
  data: () => ({
    showText: false
  }),
  methods: {
    handleHover() {
      this.showText = !this.showText;
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="event" @click="emitClick">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    date: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    emitClick() {
      this.$emit('click-on-event', {
        id: this.id
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="event text-truncate text-capitalize ma-1 px-1"
    :class="getColorClass"
    @click="emitClick"
  >
    <v-icon v-if="isPriority" x-small>
      mdi mdi-star
    </v-icon>
    {{ name }}
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
    // TODO not sure
    date: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: ''
    },
    isPriority: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getColorClass() {
      return this.type === 'work' ? 'grey' : 'blue';
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

<style lang="scss" scoped>
.event {
  font-size: 12px;
}
</style>

<template>
  <div class="event-container mx-1">
    <v-btn
      class="event text-truncate px-1"
      height="15"
      depressed
      tile
      :class="getColorClass"
      @click="emitClick"
    >
      <v-icon v-if="isPriority" x-small>
        mdi mdi-star
      </v-icon>
      {{ name }}
    </v-btn>
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
.event-container {
  margin-top: -5px;
  margin-bottom: -5px;
}
.event {
  font-size: 12px !important;
  font-weight: normal;
  text-transform: capitalize !important;
  width: 100%;
  justify-content: flex-start;
}
</style>

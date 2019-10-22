<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <Modal v-if="isModalOpen" attach :is-open="isModalOpen" />
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center mb-5">Calendar</h2>
          </v-col>
          <v-col cols="12">
            <Calendar :events="events" @add-event="handleAddEvent" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar/Calendar.vue';
import Modal from './components/Modal/Modal.vue';

import { getEvents } from './api/api.js';
export default {
  name: 'App',
  components: {
    Calendar,
    Modal
  },
  data: () => ({
    events: [],
    isModalOpen: false
  }),
  mounted() {
    getEvents().then(res => {
      this.events = res;
    });
  },
  methods: {
    handleAddEvent(date) {
      this.isModalOpen = true;
      console.log(date);
    }
  }
};
</script>

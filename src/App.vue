<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <Modal
          v-if="isModalOpen"
          attach
          :is-open="isModalOpen"
          modal-title="Modal Title"
        >
          <template v-slot>
            <Form @cancel="handleCancel" @submit="handleSubmit" />
          </template>
        </Modal>
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center mb-5">Calendar</h2>
          </v-col>
          <v-col cols="12">
            <Calendar :events="events" @add-event="handleOpenModal" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar/Calendar.vue';
import Modal from './components/Modal/Modal.vue';
import Form from './components/Form/Form.vue';

import { getEvents, addEvent } from './api/api.js';
export default {
  name: 'App',
  components: {
    Calendar,
    Modal,
    Form
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
    handleOpenModal() {
      this.isModalOpen = true;
    },
    handleCancel() {
      this.isModalOpen = false;
    },
    handleSubmit(data) {
      addEvent(data).then(res => console.log(res));
    }
  }
};
</script>

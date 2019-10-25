<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <Modal
          v-if="isModalOpen"
          attach
          :is-open="isModalOpen"
          :modal-title="getModalTitle"
        >
          <template v-slot>
            <Form
              :is-editable="getIsEditable"
              :populate-with="eventBeingEdited"
              @cancel="handleCancel"
              @submit="handleSubmit"
              @delete="handleDelete"
            />
          </template>
        </Modal>
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center mb-5">Calendar</h2>
          </v-col>
          <v-col cols="12">
            <Calendar
              :events="events"
              @add-event="handleOpenModal"
              @click-on-event="editEvent"
            />
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

import { getEvents, addEvent, deleteEvent, editEvent } from './api/api.js';
export default {
  name: 'App',
  components: {
    Calendar,
    Modal,
    Form
  },
  data: () => ({
    events: [],
    isModalOpen: false,
    eventDate: '',
    eventBeingEdited: null
  }),
  computed: {
    getModalTitle() {
      let title = '';
      if (this.eventDate) title = 'Create Event';
      if (this.eventBeingEdited) title = 'Edit Event';
      return title;
    },
    getIsEditable() {
      return this.eventBeingEdited && true;
    }
  },
  mounted() {
    getEvents().then(res => {
      this.events = res;
    });
  },
  methods: {
    clearState() {
      this.isModalOpen = false;
      this.eventDate = '';
      this.eventBeingEdited = null;
    },
    editEvent(id) {
      this.isModalOpen = true;
      const event = this.events.find(item => item.id === id);
      this.eventBeingEdited = event;
    },
    handleOpenModal(date) {
      this.isModalOpen = true;
      this.eventDate = date;
    },
    handleCancel() {
      this.clearState();
    },
    handleSubmit(data) {
      if (!this.eventBeingEdited) {
        const req = {
          ...data,
          start: this.eventDate
        };
        addEvent(req).then(res => {
          this.events = [...this.events, res];
          this.clearState();
        });
      } else {
        const req = {
          ...data,
          start: this.eventBeingEdited.start
        };
        editEvent(req, this.eventBeingEdited.id).then(res => {
          const newEvents = [...this.events];
          const index = newEvents.findIndex(item => item.id === res.id);
          newEvents.splice(index, 1, res);
          this.events = newEvents;
          this.clearState();
        });
      }
    },
    handleDelete() {
      deleteEvent(this.eventBeingEdited.id).then(() => {
        this.events = this.events.filter(
          item => item.id !== this.eventBeingEdited.id
        );
        this.clearState();
      });
    }
  }
};
</script>

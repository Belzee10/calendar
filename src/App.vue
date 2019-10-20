<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-row>
          <v-col>
            <calendar :events="events" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar/Calendar.vue';
import { getEvents } from './api/api.js';
export default {
  name: 'App',
  components: {
    Calendar
  },
  data: () => ({
    events: []
  }),
  mounted() {
    getEvents().then(res => {
      this.events = res;
    });
  }
};
</script>

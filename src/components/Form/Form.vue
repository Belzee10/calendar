<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="event" label="Event" required></v-text-field>
        </v-col>
        <v-col>
          <v-btn small primary class="submit" @click="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    valid: true,
    event: ''
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) this.$emit('submit', this.event);
    }
  }
};
</script>

<style lang="scss" scoped></style>

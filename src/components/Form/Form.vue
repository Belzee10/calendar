<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            class="event"
            label="Event"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="type"
            class="type"
            :items="['work', 'home']"
            label="Type"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="isPriority"
            class="isPriority"
            label="Is Priority?"
          ></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn :disabled="!valid" small class="submit primary" @click="submit"
            >Submit</v-btn
          >
          <v-btn small class="cancel secondary ml-2" @click="cancel"
            >Cancel</v-btn
          >
          <v-btn small class="delete error float-right" @click="$emit('delete')"
            >Delete</v-btn
          >
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
    name: '',
    type: '',
    isPriority: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate())
        this.$emit('submit', {
          name: this.name,
          type: this.type,
          isPriority: this.isPriority
        });
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="value.name"
            class="event"
            label="Event"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="value.type"
            class="type"
            :items="['work', 'home']"
            label="Type"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="value.isPriority"
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
          <v-btn
            v-if="isEditable"
            small
            class="delete error float-right"
            @click="$emit('delete')"
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
  props: {
    isEditable: {
      type: Boolean,
      default: false
    },
    populateWith: {
      type: Object,
      default: () => null
    }
  },
  data: () => ({
    valid: true,
    value: {
      name: '',
      type: '',
      isPriority: false
    }
  }),
  created() {
    if (this.populateWith) this.value = this.populateWith;
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) this.$emit('submit', this.value);
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style lang="scss" scoped></style>

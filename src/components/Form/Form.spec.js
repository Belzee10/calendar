import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Form from './Form.vue';

const localVue = createLocalVue();
describe('Form.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should emit a "submit" event with the correct payload', () => {
    const wrapper = mount(Form, {
      vuetify,
      localVue
    });
    const formValue = 'value';
    const input = wrapper.find('input');
    input.setValue(formValue);
    const button = wrapper.find('.v-btn.submit');
    button.trigger('click');
    expect(wrapper.emitted('submit')[0]).toEqual([formValue]);
  });

  //   test('should validate the input form and disable the save button', () => {
  //     const wrapper = mount(Form, {
  //       vuetify,
  //       localVue
  //     });
  //     const input = wrapper.find('.v-input');
  //     const button = wrapper.find('.v-btn.submit');
  //     button.trigger('click');
  //     expect(input.classes()).toContain('error--text');
  //     // expect(button.attributes()).toContain('dissabled');
  //   });
});

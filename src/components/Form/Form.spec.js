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
    const formValue = {
      name: 'value',
      type: 'work',
      isPriority: true
    };
    const button = wrapper.find('.v-btn.submit');
    wrapper.find('.event input').setValue(formValue.name);
    wrapper.find('.type input').setValue('work');
    wrapper.find('.isPriority input').setChecked(true);
    button.trigger('click');
    expect(wrapper.emitted('submit')[0]).toEqual([formValue]);
  });
});

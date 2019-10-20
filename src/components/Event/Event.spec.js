import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Event from './Event.vue';

const localVue = createLocalVue();

describe('Event.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  test('should emit "click" event with the correct payload', () => {
    const props = {
      id: '1'
    };
    const wrapper = mount(Event, {
      vuetify,
      localVue,
      propsData: props
    });
    wrapper.find('.event').trigger('click');
    expect(wrapper.emitted('click-on-event')[0]).toEqual([props]);
  });
});

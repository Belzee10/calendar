import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import DayLabel from './DayLabel.vue';

const localVue = createLocalVue();

describe('DayLabel.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  test('should show and hide "add event" text when mouseenter and mouseleave', () => {
    const wrapper = mount(DayLabel, {
      vuetify,
      localVue
    });

    wrapper.trigger('mouseenter');
    expect(wrapper.text()).toContain('Add event');
    wrapper.trigger('mouseleave');
    expect(wrapper.text()).not.toContain('Add event');
  });
});

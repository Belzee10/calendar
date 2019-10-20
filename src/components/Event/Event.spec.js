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

  test('should set "blue" or "grey" colors depending of the type', () => {
    const props = {
      type: 'home'
    };
    const wrapper = mount(Event, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.find('.event').classes()).toContain('blue');
    expect(wrapper.find('.event').classes()).not.toContain('grey');
    wrapper.setProps({
      type: 'work'
    });
    expect(wrapper.find('.event').classes()).toContain('grey');
    expect(wrapper.find('.event').classes()).not.toContain('blue');
  });

  test('should render an star icon if the event is priority', () => {
    const props = {
      isPriority: true
    };
    const wrapper = mount(Event, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.find('.event').html()).toContain('mdi mdi-star');
  });
});

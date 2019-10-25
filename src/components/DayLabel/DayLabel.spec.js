import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import DayLabel from './DayLabel.vue';
import dayjs from 'dayjs';

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

  test('should emit an event when click on the button', () => {
    const props = {
      date: '2019-10-20'
    };
    const wrapper = mount(DayLabel, {
      vuetify,
      localVue,
      propsData: props
    });
    wrapper.find('.add-event').trigger('click');
    expect(wrapper.emitted('add-event')[0]).toEqual([props.date]);
  });

  test('should add a "border class" to the current day', () => {
    const props = {
      date: dayjs().format('MM-DD-YYYY')
    };
    const wrapper = mount(DayLabel, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.find('.add-event').classes()).toContain('v-btn--outlined');
  });

  test('should render correclty', () => {
    const props = {
      day: 1
    };
    const wrapper = mount(DayLabel, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

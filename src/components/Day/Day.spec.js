import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Day from './Day.vue';
import Event from '@/components/Event/Event.vue';

const localVue = createLocalVue();

describe('Day.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const props = {
    events: [
      {
        id: 'ck1zaeuof0000l92p1kwi1g7i',
        name: 'quod enim et',
        start: '2019-10-04'
      },
      {
        id: 'ck1zaeuog0001l92p58yg4qk7',
        name: 'voluptatem aperiam recusandae',
        start: '2019-10-04'
      }
    ]
  };
  test('should render the "events" by day', () => {
    const wrapper = mount(Day, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.findAll(Event)).toHaveLength(2);
  });

  test('should render correclty', () => {
    const wrapper = mount(Day, {
      vuetify,
      localVue,
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from './App.vue';
import Calendar from './components/Calendar/Calendar.vue';
import { getEvents } from './api/api.js';
import flushPromises from 'flush-promises';

const localVue = createLocalVue();
jest.mock('./api/api.js');

describe('App.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should pass all events to the Calendar', async () => {
    const items = [
      {
        id: '1',
        name: '',
        start: '',
        end: ''
      }
    ];

    getEvents.mockResolvedValueOnce(items);
    const wrapper = mount(App, {
      vuetify,
      localVue
    });
    await flushPromises();
    const calendar = wrapper.find(Calendar);
    expect(calendar.props().events).toEqual(items);
  });
});

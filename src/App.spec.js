import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from './App.vue';
import { getEvents } from './api/api.js';
import flushPromises from 'flush-promises';
import Calendar from './components/Calendar/Calendar.vue';
// import Modal from './components/Modal/Modal.vue';

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
        id: 'ck1zbpm4r0000yc2p8l8m5p92',
        name: 'iure repellendus quis',
        start: '2019-10-21',
        type: 'work',
        isPriority: true
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

  // test('should send a "createEvent" post request with the correct payload', async () => {
  //   const wrapper = mount(App, {
  //     vuetify,
  //     localVue
  //   });
  //   addEvent.mockResolvedValueOnce({});

  //   const formValue = 'Value';
  //   wrapper.find('.add-event').trigger('click');
  //   const modal = wrapper.find(Modal);
  //   expect(modal.exists()).toBeTruthy();
  //   wrapper.find('input').setValue(formValue);
  //   wrapper.find('.v-btn.submit').trigger('click');
  //   flushPromises();
  //   expect(addEvent).toHaveBeenCalled();
  // });
});

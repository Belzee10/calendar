import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import flushPromises from 'flush-promises';
import mockAxios from 'axios';
import App from './App.vue';
// import Calendar from './components/Calendar/Calendar.vue';
// import Modal from './components/Modal/Modal.vue';

const localVue = createLocalVue();

describe('App.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('should pass all "events" to the Calendar', async () => {
    const items = [
      {
        id: 'ck1zbpm4r0000yc2p8l8m5p92',
        name: 'iure repellendus quis',
        start: '2019-10-21',
        type: 'work',
        isPriority: true
      }
    ];

    mockAxios.get.mockResolvedValueOnce({ data: items });

    const wrapper = mount(App, {
      vuetify,
      localVue
    });

    await flushPromises();

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(wrapper.findAll('.event')).toHaveLength(1);
  });

  // test('should send a "createEvent" post request with the correct payload', () => {
  //   const wrapper = mount(App, {
  //     vuetify,
  //     localVue
  //     // mocks: {
  //     //   data: {
  //     //     events: []
  //     //   }
  //     // }
  //   });
  //   const calendar = wrapper.find(Calendar);
  //   console.log(typeof calendar.vm.$props.events);
  //   // const formValue = 'Value';
  //   // wrapper.find('.add-event').trigger('click');
  //   // const modal = wrapper.find(Modal);
  //   // expect(modal.exists()).toBeTruthy();
  //   // wrapper.find('input').setValue(formValue);
  //   // wrapper.find('.v-btn.submit').trigger('click');
  // });
});

import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import flushPromises from 'flush-promises';
import mockAxios from 'jest-mock-axios';
import App from './App.vue';
import Modal from './components/Modal/Modal.vue';

const localVue = createLocalVue();

describe('App.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  afterEach(() => {
    mockAxios.reset();
  });
  const items = [
    {
      id: 'ck1zbpm4r0000yc2p8l8m5p92',
      name: 'iure repellendus quis',
      start: '2019-10-21',
      type: 'work',
      isPriority: true
    }
  ];

  test('should render all "events" in the Calendar', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: items });
    const wrapper = mount(App, {
      vuetify,
      localVue
    });
    await flushPromises();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(wrapper.findAll('.event')).toHaveLength(1);
  });

  test('should send a "createEvent" post request with the correct payload', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: items });
    const wrapper = mount(App, {
      vuetify,
      localVue
    });
    await flushPromises();

    const formValue = {
      name: 'value',
      type: 'work',
      isPriority: true
    };
    wrapper.find('.add-event').trigger('click');
    const modal = wrapper.find(Modal);
    expect(modal.exists()).toBeTruthy();

    const button = wrapper.find('.v-btn.submit');
    wrapper.find('.event input').setValue(formValue.name);
    wrapper.find('.type input').setValue(formValue.type);
    wrapper.find('.isPriority input').setChecked(formValue.isPriority);
    button.trigger('click');
    const url = 'http://localhost:3100/events';
    const expectedData = expect.objectContaining(formValue);
    expect(mockAxios.post).toHaveBeenCalledWith(url, expectedData);
  });
});

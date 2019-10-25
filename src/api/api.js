import axios from 'axios';

export const getEvents = async () => {
  try {
    const res = await axios.get('http://localhost:3100/events');
    return res.data;
  } catch (error) {
    return error;
  }
};

export const addEvent = async data => {
  try {
    const res = await axios.post('http://localhost:3100/events', {
      ...data
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteEvent = async id => {
  try {
    const res = await axios.delete(`http://localhost:3100/events/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

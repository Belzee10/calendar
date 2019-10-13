var faker = require('faker');
var cuid = require('cuid');
var dayjs = require('dayjs');

module.exports = () => {
  const data = { events: [] };
  for (let i = 0; i < 5; i++) {
    const startDate = faker.date.between(
      dayjs()
        .startOf('month')
        .format('YYYY-MM-DD'),
      dayjs()
        .endOf('month')
        .format('YYYY-MM-DD')
    );
    const daysToAdd = i % 2 === 0 ? 1 : 2;

    data.events.push({
      id: cuid(),
      name: faker.lorem.words(),
      start: dayjs(startDate).format('YYYY-MM-DD'),
      end: dayjs(startDate)
        .add(daysToAdd, 'day')
        .format('YYYY-MM-DD')
    });
  }
  return data;
};

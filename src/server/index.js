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

    data.events.push({
      id: cuid(),
      name: faker.lorem.words(),
      start: dayjs(startDate).format('YYYY-MM-DD'),
      type: i % 2 === 0 ? 'work' : 'home',
      isPriority: faker.random.boolean()
    });
  }
  return data;
};

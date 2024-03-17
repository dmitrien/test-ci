import { healthPerson, sortPerson } from '../user';

test.each([
  [{name: 'мечник', health: 10}, 'critical'],
  [{name: 'маг', health: 100}, 'healthy'],
  [{name: 'рыцарь', health: 50}, 'wounded']
])('should status Person %s.name by healt %s', (person, statusHealth) => {
  const status = healthPerson(person);
  expect(status).toEqual(statusHealth);
});

test('Sort list users by healt', () => {
  const received = sortPerson ([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'рыцарь', health: 10},
  ]);
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
    {name: 'рыцарь', health: 10},
  ]
  expect(received).toEqual(expected)
})
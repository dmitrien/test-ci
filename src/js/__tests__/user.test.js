import { healthPerson } from '../user';

test.each([
  [{name: 'мечник', health: 10}, 'critical'],
  [{name: 'маг', health: 100}, 'healthy'],
  [{name: 'лучник', health: 80}, 'healthy'],
  [{name: 'рыцарь', health: 50}, 'wounded']
])('should status Person %s.name by healt %s', (person, statusHealth) => {
  const status = healthPerson(person);
  expect(status).toEqual(statusHealth);
});

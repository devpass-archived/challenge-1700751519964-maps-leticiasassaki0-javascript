const { findKey, addEntry } = require('./mapUtils');

test('Find key by given value', () => {
  const myMap = new Map();
  myMap.set('name', 'John Doe');
  myMap.set('age', 30);

  expect(findKey(myMap, 'John Doe')).toBe('name');
});

test('Add entry to map', () => {
  const myMap = new Map();
  addEntry(myMap, 'name', 'John Doe');

  expect(myMap.get('name')).toBe('John Doe');
});
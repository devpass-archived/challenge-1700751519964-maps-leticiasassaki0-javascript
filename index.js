const { findKey, addEntry } = require('./mapUtils');

const myMap = new Map();
addEntry(myMap, 'name', 'John Doe');
addEntry(myMap, 'age', 30);

const foundKey = findKey(myMap, 'John Doe');
console.log('Found Key:', foundKey);
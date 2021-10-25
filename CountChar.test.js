const {count, IsitString} = require('./CountChar');
const output = {};
test('Is it a string', () => {
  expect(IsitString('aba')).toBe(true)
});

test('Is it empty', () => {
  expect(count('')).toEqual(output)
});

test('Counting the letters', () => {
  expect(count('aba')).toEqual({ a: 2, b: 1 })
});

test('Counting the letters', () => {
  expect(count('abbaisthebest')).toEqual({ a: 2, b: 3, i: 1, s: 2, t: 2, h: 1, e: 2})
});
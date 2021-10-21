const {count, IsitString} = require('./CountChar');
const output = {};
test('Is it a string', () => {
  expect(IsitString('aba')).toBe(true)
});

test('Is it empty', () => {
  expect(count('')).toEqual(output)
});

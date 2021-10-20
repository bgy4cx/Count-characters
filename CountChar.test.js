const count = require('./CountChar');
const emptyresult = {}
test('Empty string', () => {
  expect(count('')).toStrictEqual(emptyresult)
});

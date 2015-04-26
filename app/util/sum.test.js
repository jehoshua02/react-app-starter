jest.dontMock('app/util/sum');

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   var sum = require('app/util/sum');
   expect(sum(1, 2)).toBe(3);
 });
});

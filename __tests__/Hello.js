jest.dontMock('../app/components/Hello');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Hello = require('../app/components/Hello');

describe('Hello', function () {
  it('should render <h1>Hello</h1>', function () {
    var expected = '<h1>Hello</h1>';
    var actual = React.renderToStaticMarkup(<Hello />);
    expect(actual).toBe(expected);
  });
});

jest.dontMock('app/components/Hello');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;


describe('Hello', function () {
  it('should render <h1>Hello</h1>', function () {
    var expected = '<h1>Hello</h1>';
    var Hello = require('app/components/Hello');
    var actual = React.renderToStaticMarkup(<Hello />);
    expect(actual).toBe(expected);
  });

  it('should trigger SAY_HELLO action', function () {
    var actions = { SAY_HELLO: jest.genMockFunction() };
    jest.setMock('app/actions', actions);
    var Hello = require('app/components/Hello');
    console.log(Hello, 'That\'s not the Hello component!');
    TestUtils.renderIntoDocument(<Hello />);
    expect(actions.SAY_HELLO.mock.calls.length).toBe(1);
  });
});

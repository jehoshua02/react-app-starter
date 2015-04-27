var React = require('react');
var Actions = require('app/actions');


var Hello = React.createClass({
  render: function () {
    return (<h1>Hello</h1>);
  },

  componentWillMount: function () {
    Actions.SAY_HELLO({name: 'Joshy'});
  }
});


module.exports = Hello;

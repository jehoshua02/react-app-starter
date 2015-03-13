var React = require('react');
var Router = require('react-router');


var App = React.createClass({
  mixins: [Router.State],

  render: function () {
    return (
      <h2>Page {this.getParams().id}</h2>
    );
  }
});

module.exports = App;

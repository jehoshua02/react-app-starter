var React = require('react');
var Router = require('react-router');
var Hi = require('app/components/Hello');


var Hello = React.createClass({

  mixins: [Router.State, Router.Navigation],

  render: function () {
    return (
      <Hi name={this.getParams().name} onSubmit={this._handleSubmit} />
    );
  },

  _handleSubmit: function (value) {
    this.transitionTo('hello', {name: value});
  }

});

module.exports = Hello;

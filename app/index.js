var React = require('react');
var Router = require('react-router');
var routes = require('app/routes');


Router.run(routes, Router.HistoryLocation, function (Root) {
  React.render(<Root/>, document.getElementById('app'));
});

var React = require('react');
var { Route, DefaultRoute, NotFoundRoute } = require('react-router');


module.exports = (
  <Route path="/" handler={require('./handlers/App')}>
    <DefaultRoute name="home" handler={require('./handlers/Home')} />

    <Route name="hello" path="hello/:name" handler={require('./handlers/Hello')} />

    <NotFoundRoute handler={require('./handlers/NotFound')} />
  </Route>
);

var React = require('react');
var { Route, DefaultRoute, NotFoundRoute } = require('react-router');


module.exports = (
  <Route name="app" path="/">
    <DefaultRoute handler={require('./handlers/Home')} />
    <Route name="page" path="page/:id" handler={require('./handlers/Page')} />
    <NotFoundRoute name="not-found" handler={require('./handlers/NotFound')}/>
  </Route>
);

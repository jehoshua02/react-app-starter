var React = require('react');
var {RouteHandler, Link} = require('react-router');


var App = React.createClass({

  render: function () {
    return (
      <div>
        <h1>App</h1>
        <nav>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="hello" params={{name: 'World'}}>Hello World</Link></li>
          </ul>
        </nav>
        <RouteHandler />
      </div>
    );
  }
});


module.exports = App;

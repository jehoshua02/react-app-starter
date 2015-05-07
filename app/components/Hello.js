var React = require('react');


var Hello = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    onSubmit: React.PropTypes.func.isRequired
  },

  getDefaultProps: function () {
    return {
      name: 'World'
    };
  },

  render: function () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <input type="text" defaultValue={this.props.name} onKeyUp={this._handleOnKeyUp} />
      </div>
    );
  },

  _handleOnKeyUp: function (event) {
    if (event.key === 'Enter') {
      this.props.onSubmit(event.target.value);
    }
  }

});


module.exports = Hello;

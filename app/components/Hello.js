var React = require('react');


var Hello = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
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

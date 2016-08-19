var React = require('react');

var Todo = React.createClass({
  handleClick: function () {
    var {id} = this.props;
    
    this.props.onToggle(id);
  },
  render: function () {
    var {text, completed} = this.props;
    
    return (
      <div onClick={this.handleClick}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;

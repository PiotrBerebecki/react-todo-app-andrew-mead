var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleClick: function () {
    var {id} = this.props;
    
    this.props.onToggle(id);
  },
  renderDate: function (createdAt, completedAt, completed) {
    var message = 'Created ';
    var timestamp = createdAt;
    
    if (completed) {
      message = 'Completed ';
      timestamp = completedAt;
    }
    
    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  },
  render: function () {
    var {text, completed, createdAt, completedAt} = this.props;
    
    return (
      <div onClick={this.handleClick}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        <p>{text}</p>
        <p>{this.renderDate(createdAt, completedAt, completed)}</p>
      </div>
    );
  }
});

module.exports = Todo;

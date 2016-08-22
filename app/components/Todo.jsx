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
  pickClassName: function (completed) {
    return completed ? 'todo todo-completed' : 'todo';
  },
  render: function () {
    var {text, completed, createdAt, completedAt} = this.props;
    
    return (
      <div className={this.pickClassName(completed)} onClick={this.handleClick}>
        <div>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{this.renderDate(createdAt, completedAt, completed)}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;

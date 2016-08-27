var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  handleClick: function () {
    var {id, dispatch} = this.props;
    
    dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);

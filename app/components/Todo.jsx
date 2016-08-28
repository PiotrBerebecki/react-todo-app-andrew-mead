var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
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
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    
    return (
      <div className={this.pickClassName(completed)} onClick={() => {
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
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

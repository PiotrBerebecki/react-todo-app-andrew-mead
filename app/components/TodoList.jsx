var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  renderTodos: function () {
    var {todos} = this.props;
    
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
    });
  },
  render: function () {   
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;

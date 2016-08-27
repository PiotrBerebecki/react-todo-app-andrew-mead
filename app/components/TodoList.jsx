var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
  renderTodos: function () {
    var {todos} = this.props;
    
    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo}/>
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

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);

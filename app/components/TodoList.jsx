var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  renderTodos: function () {
    var {todos, showCompleted, searchText} = this.props;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    
    if (filteredTodos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    
    return filteredTodos.map((todo) => {
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
    return state;
  }
)(TodoList);

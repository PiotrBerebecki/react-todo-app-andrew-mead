var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: {
        [uuid()]: {
          text: 'Walk the dogg',
          completed: true
        },
        [uuid()]: {
          text: 'Clean the yard',
          completed: false
        },
        [uuid()]: {
          text: 'Groceries',
          completed: false
        },
      }
    };
  },
  handleAddTodo: function (text) {
    var updatedTodos = this.state.todos;
    updatedTodos[uuid()] = {text: text, completed: false};
    
    this.setState({todos: updatedTodos});
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos;
    updatedTodos[id].completed = !updatedTodos[id].completed;
    
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
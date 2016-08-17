var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Go to the gym'
        }, {
          id: 2,
          text: 'Paint the decking'
        }, {
          id: 3,
          text: 'Go for a run'
        }, {
          id: 4,
          text: 'Pack the bags'
        }
      ]
    };
  },
  handleAddTodo: function (newTodo) {
    this.state.todos.push({id: ++this.state.todos.length, text: newTodo});
    this.setState({
      todos: this.state.todos
    });
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
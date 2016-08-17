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
      todos: [
        {
          id: uuid(),
          text: 'Go to the gym'
        }, {
          id: uuid(),
          text: 'Paint the decking'
        }, {
          id: uuid(),
          text: 'Go for a run'
        }, {
          id: uuid(),
          text: 'Pack the bags'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
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
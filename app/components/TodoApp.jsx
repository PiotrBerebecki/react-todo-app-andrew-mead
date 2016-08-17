var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
    var {todos} = this.state;
    // console.log(2);
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
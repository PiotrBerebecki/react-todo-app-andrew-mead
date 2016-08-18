var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  renderTodos: function () {
    var {todos} = this.props;
    
    return Object.keys(todos).map((id) => {
      return <Todo key={id} id={id} {...todos[id]} onToggle={this.props.onToggle}/>;
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
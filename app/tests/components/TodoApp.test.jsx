var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Dog';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    
    todoApp.setState({todos: []});   
    todoApp.handleAddTodo(todoText);
    var id = Object.keys(todoApp.state.todos)[0];
    
    expect(todoApp.state.todos[id].text).toBe(todoText);
  });
  
  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      one: {
        text: 'Test features',
        completed: false
      }
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: todoData});
    
    expect(todoApp.state.todos.one.completed).toBe(false);
    todoApp.handleToggle('one');
    expect(todoApp.state.todos.one.completed).toBe(true);
  });
});

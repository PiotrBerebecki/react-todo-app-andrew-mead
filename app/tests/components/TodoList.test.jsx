var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  
  it('should render 1 Todo component for each todo item', () => {
    var todos = {
      one: {
        text: 'Walk the dogg',
        completed: false
      },
      two: {
        text: 'Clean the yard',
        completed: false
      },
      three: {
        text: 'Groceries',
        completed: false
      },
    };
  
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    
    expect(todosComponents.length).toBe(Object.keys(todos).length);
  });
});
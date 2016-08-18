var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
  
  it ('should call onToggle prop with id on click', () => {
    var todoData = {
      one: {
        text: 'Pack the bags',
        completed: false
      }
    };
    var id = Object.keys(todoData)[0];
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo id={id} {...todoData[id]} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    
    TestUtils.Simulate.click($el[0]);
    
    expect(spy).toHaveBeenCalledWith(id);
  });
});

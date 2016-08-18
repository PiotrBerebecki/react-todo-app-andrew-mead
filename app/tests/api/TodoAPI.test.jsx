var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  // mocha method called before every test
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  
  describe('setTodos', () => {
    it('should set valid todos object', () => {
      var goodTodos = {
        twenty: {
          text: 'Walk the dog',
          completed: false
        }
      };
      TodoAPI.setTodos(goodTodos);
      
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // toEqual() compares just the values, whereas toBe() compares
      // by reference
      expect(actualTodos).toEqual(goodTodos);     
    });
    
    it('should not set invalid todos object', () => {
      var badTodos = [1,2];
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);     
    });
    
  });
  
  describe('getTodos', () => {
    it('should return empty array for bad local storage data', () => {    
      var actualTodos = TodoAPI.getTodos();   
      expect(actualTodos).toEqual({});   
    });
    
    it('should return todos if valid array in local storage', () => {    
      var goodTodos = {
        twenty: {
          text: 'Walk the dog',
          completed: false
        }
      };
      localStorage.setItem('todos', JSON.stringify(goodTodos));
      var actualTodos = TodoAPI.getTodos();
      
      expect(actualTodos).toEqual(goodTodos);
    }); 
  });
});

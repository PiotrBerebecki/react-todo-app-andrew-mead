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
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // toEqual() compares just the values, whereas toBe() compares
      // by reference
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
  
  describe('filterTodos', () => {
    var exampleTodos = [
      {
        id: 1,
        test: 'First text here',
        completed: true
      }, {
        id: 2,
        test: 'Second text here',
        completed: false
      }, {
        id: 3,
        test: 'Third text here',
        completed: true
      }
    ];
    
    it('should return all todos if showCompleted if true', () => {
      var filteredTodos = TodoAPI.filterTodos(exampleTodos, true, '');
      
      expect(filteredTodos.length).toBe(exampleTodos.length);
    });
    
    it('should not return completed todos if showCompleted if false', () => {
      var filteredTodos = TodoAPI.filterTodos(exampleTodos, false, '');
      
      expect(filteredTodos.length).toBe((exampleTodos.filter(todo => !todo.completed)).length );
    });

  });
});

var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if (!(Array.isArray(todos)) && todos !== null && typeof todos === 'object') {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos; // undefined will be returned if invalid todos
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = {};
    // JSON.parse may fail on invalid data so we use try & catch block
    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      // do nothing
    }
        
    if ( (typeof todos === 'object') && (todos !== null) ) {
      return todos;
    } else {
      return {};
    }
  }
};

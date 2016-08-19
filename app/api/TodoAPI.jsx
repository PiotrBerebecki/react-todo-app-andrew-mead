module.exports = {
  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos; // undefined will be returned if invalid todos
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    // JSON.parse may fail on invalid data so we use try & catch block
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // do nothing
    }

    return Array.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    
    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      // by default return only todos with completed status false
      // or also show all totods if showcompleted if true
      // (i.e. we want to see all todos including completed)
      return !todo.completed || showCompleted; 
    });
    
    // Filter by searchText
    
    
    // Sort todos with non-completed first
    
    
    return filteredTodos;
  }
};

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    
    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      // by default return only todos with completed status false
      // or also show all todos if showCompleted if true
      // (i.e. we want to see all todos including completed)
      return !todo.completed || showCompleted; 
    });
    
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length > 0 ? todo.text.toLowerCase().includes(searchText) : true;
    });
    
    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    
    return filteredTodos;
  }
};

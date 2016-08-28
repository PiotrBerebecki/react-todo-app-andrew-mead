import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDXne2vmy2uzBAe0VJ8i9O81JEa2suEDbk',
  authDomain: 'react-todo-app-a7d32.firebaseapp.com',
  databaseURL: 'https://react-todo-app-a7d32.firebaseio.com',
  storageBucket: 'react-todo-app-a7d32.appspot.com',
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

var todo1 = todosRef.push({
  text: 'Lake',
  completed: false
});

var todo2 = todosRef.push({
  text: 'Study',
  completed: false
});

todo2.update({
  text: 'Study hard :)'
});

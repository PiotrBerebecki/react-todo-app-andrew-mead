import firebase from 'firebase';

try {
  var config = {
    apiKey: 'AIzaSyDXne2vmy2uzBAe0VJ8i9O81JEa2suEDbk',
    authDomain: 'react-todo-app-a7d32.firebaseapp.com',
    databaseURL: 'https://react-todo-app-a7d32.firebaseio.com',
    storageBucket: 'react-todo-app-a7d32.appspot.com',
  };
  
  firebase.initializeApp(config);
} catch (e) {
  // handle error
}

export var firebaseRef = firebase.database().ref();
export default firebase;

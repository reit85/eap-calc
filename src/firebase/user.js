import * as firebase from 'firebase';

export const username = firebase.auth().onAuthStateChanged((user) => {
  return user.displayName;
});


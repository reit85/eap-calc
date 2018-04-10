import * as firebase from 'firebase';

// FIXME: Bad JavaScript, but it works! Someone have a better idea?
export let username = firebase.auth().onAuthStateChanged((user) => {
  username = user.displayName;
  return username;
});


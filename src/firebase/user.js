import * as firebase from 'firebase'

export let username = firebase.auth().onAuthStateChanged((user) => {
  if(user){
    //console.log(user.displayName)
    username = user.displayName
    return username
  } else {
    return username
  }
})


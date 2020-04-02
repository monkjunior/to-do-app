import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyC-podzmrb-krx-HDycqENO4fiElXgbR6g",
  authDomain: "vungocson998.github.io/to-do-app",
  databaseURL: "https://to-do-app-13683.firebaseio.com",
  projectId: "to-do-app-13683",
  storageBucket: "gs://to-do-app-13683.appspot.com",
  messagingSenderId: "Son Vu | To do app"
};
firebase.initializeApp(config);


export default firebase;
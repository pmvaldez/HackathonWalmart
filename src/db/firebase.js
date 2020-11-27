import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB2YExdSqgoW2BwaH5mawnSVl343YJSrOk",
    authDomain: "hackaton-walmart.firebaseapp.com",
    databaseURL: "https://hackaton-walmart.firebaseio.com",
    projectId: "hackaton-walmart",
    storageBucket: "hackaton-walmart.appspot.com",
    messagingSenderId: "154120837135",
    appId: "1:154120837135:web:518608766f4a9aff0d6b7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {
    db,
    auth,

}

import firebase from 'firebase/app';
import 'firebase/auth';

//tu firebaseCOnfig 
const firebaseConfig = {
    apiKey: "AIzaSyAIjo6eMKUzcAQWmWcTaPS1L_12gfKheP4",
    authDomain: "ecommercenext-1deb9.firebaseapp.com",
    projectId: "ecommercenext-1deb9",
    storageBucket: "ecommercenext-1deb9.appspot.com",
    messagingSenderId: "1013348098816",
    appId: "1:1013348098816:web:c7f233473d9ec7499049e5"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    googleAuthProvider,
    firebase
}
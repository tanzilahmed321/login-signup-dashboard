// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCstUAh1ZFaNZ3QH280kTIswtCKAb7F3vc",
    authDomain: "fir-2-816d2.firebaseapp.com",
    projectId: "fir-2-816d2",
    storageBucket: "fir-2-816d2.appspot.com",
    messagingSenderId: "48942546092",
    appId: "1:48942546092:web:b86afaa05d67cd72c33309"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };

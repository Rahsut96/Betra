import firebase from "firebase/app";
import "firebase/auth";
// import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1usQ60IDru2Rtf6D9edUUj3lpYWVlOb8",
    authDomain: "batra-76bfd.firebaseapp.com",
    projectId: "batra-76bfd",
    storageBucket: "batra-76bfd.appspot.com",
    messagingSenderId: "92252437570",
    appId: "1:92252437570:web:530f7fd51db01a7f1b81db",
    measurementId: "G-QVXJ7G3KYV",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default { Firebase: firebase };

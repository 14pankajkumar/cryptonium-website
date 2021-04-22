import firebase from "firebase/app"

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDuFJ9UhYk7G5zj5738FyPK7R-ycR2fNJY",
    authDomain: "maluxcoin.firebaseapp.com",
    projectId: "maluxcoin",
    storageBucket: "maluxcoin.appspot.com",
    messagingSenderId: "702100461208",
    appId: "1:702100461208:web:55ac71a09f54f39f5d22ed",
    measurementId: "G-ST43E26TQM"
};

export default function firebaseClient() {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}
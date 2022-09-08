import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDLOpwQQuu7ttY9LcFZqTY_YJ6mciYd2Y",
    authDomain: "chat-app-855e0.firebaseapp.com",
    projectId: "chat-app-855e0",
    storageBucket: "chat-app-855e0.appspot.com",
    messagingSenderId: "860264930530",
    appId: "1:860264930530:web:6f690a6243282e0d68d2bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const fb = {
    auth: firebase.auth(),
    firestore: firebase.firestore(),
    async login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                    return {success: true, data: result};
                })
                .catch(function(error){
                    return {success: false, error: error.message};
                });
    },
    async logout() {
        return firebase.auth().signOut()
            .then(function() {
                return {success: true};
            })
            .catch(function(error) {
                return {success: false, error: error};
            });
    }
}

export default fb
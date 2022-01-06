import firabase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnupMlmq3SSt7OU3vMUJmB6C2l_T8KkOo",
    authDomain: "slack-clone-61211.firebaseapp.com",
    databaseURL: "https://slack-clone-61211-default-rtdb.firebaseio.com",
    projectId: "slack-clone-61211",
    storageBucket: "slack-clone-61211.appspot.com",
    messagingSenderId: "810024929228",
    appId: "1:810024929228:web:d60b5896c1b65ed13cbf69",
};

const firebaseApp = firabase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firabase.auth.GoogleAuthProvider();

export { auth, provider, db };

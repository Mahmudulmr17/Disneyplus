import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDfIo6kk7UsKxcbqc4qeyQlYS4T3AflmLc",
  authDomain: "chat-app-b6b4e.firebaseapp.com",
  projectId: "chat-app-b6b4e",
  storageBucket: "chat-app-b6b4e.appspot.com",
  messagingSenderId: "687235756199",
  appId: "1:687235756199:web:b0ae3bb56eb5b3201b2b82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const authConfig = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { authConfig, provider, storage };

export default dbConfig;

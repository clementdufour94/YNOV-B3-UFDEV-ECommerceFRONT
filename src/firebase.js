import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC6obk7-kapjNeZry8tSqNvuPAd8897JtY",
  authDomain: "clone-ff504.firebaseapp.com",
  projectId: "clone-ff504",
  storageBucket: "clone-ff504.appspot.com",
  messagingSenderId: "79273600426",
  appId: "1:79273600426:web:9a74f6255f9a1e955237d3",
  measurementId: "G-VRY096VL54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export {db, auth};
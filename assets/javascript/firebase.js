// Initialize Firebase
var config = {
  apiKey: "AIzaSyDc_syklcioRHhuyilM_aFU9sFzinSU7Uo",
  authDomain: "bibletrivia-online-game.firebaseapp.com",
  databaseURL: "https://bibletrivia-online-game.firebaseio.com",
  projectId: "bibletrivia-online-game",
  storageBucket: "bibletrivia-online-game.appspot.com",
  messagingSenderId: "598878297523"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
db.settings(setting);


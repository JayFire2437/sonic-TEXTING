
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyA2W5XAWlYe0DNoZMNFrdUSPygH0I6VJT4",
      authDomain: "kwitter-class-test.firebaseapp.com",
      projectId: "kwitter-class-test",
      storageBucket: "kwitter-class-test.appspot.com",
      messagingSenderId: "558932204382",
      appId: "1:558932204382:web:998c6a599457a326120dcf",
      measurementId: "G-QY2HKPX661"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

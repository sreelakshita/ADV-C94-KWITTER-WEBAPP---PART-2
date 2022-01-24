
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGCIvjj4GPXFrywuJc1VG5bpZrRlRPIeU",
    authDomain: "classtest-homework-90fcc.firebaseapp.com",
    projectId: "classtest-homework-90fcc",
    storageBucket: "classtest-homework-90fcc.appspot.com",
    messagingSenderId: "989540549666",
    appId: "1:989540549666:web:3ee59f9f4aae7d2bcd767b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

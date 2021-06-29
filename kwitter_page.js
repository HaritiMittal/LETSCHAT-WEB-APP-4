//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBWTd3vVxD35q637MWihfkxdu5YnPn0eSs",
      authDomain: "letschat-web-app-66c42.firebaseapp.com",
      databaseURL: "https://letschat-web-app-66c42-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-66c42",
      storageBucket: "letschat-web-app-66c42.appspot.com",
      messagingSenderId: "289559325669",
      appId: "1:289559325669:web:d3af65e6a133136f3fdd0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
      var message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            like:0
      });
      document.getElementById("msg").value = "";
      console.log(message);
}


//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var  firebaseConfig = {
      apiKey: "AIzaSyBQ7EbojjhcfDMbg1LV2g-5qhm7oKGHD6k",
      authDomain: "lets-chat-app-6321c.firebaseapp.com",
      projectId: "lets-chat-app-6321c",
      storageBucket: "lets-chat-app-6321c.appspot.com",
      messagingSenderId: "139323356325",
      appId: "1:139323356325:web:b4b69b2aace8ca8065094c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    function addRoom() {
Room_names = document.getElementById("Room_names").value;
localStorage.setItem("roomname",Room_names);
window.location="kwiter_room.html";
firebase.database().ref("/").child(Room_names).update({
purpose: "Adding Room Name"

})

    }



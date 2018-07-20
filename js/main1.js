  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDMWkiUtHM4VLOs3Re6xoAMuKRjviSHNK4",
    authDomain: "hireading-576a5.firebaseapp.com",
    databaseURL: "https://hireading-576a5.firebaseio.com",
    projectId: "hireading-576a5",
    storageBucket: "hireading-576a5.appspot.com",
    messagingSenderId: "1040384749068"
  };
  firebase.initializeApp(config);

  var contactRef = firebase.database().ref("register");


  $("#form1").submit(function(e) {
  e.preventDefault();
  var txtEmail = $("#txtEmail").val()
  var txtPassword = $("#txtPassword").val()
  contactRef.push({
  txtEmail: txtEmail,
  txtPassword: txtPassword
});
  $("#alert1").css('display', 'block');
})






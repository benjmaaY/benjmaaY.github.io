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

$("#signIn").submit(function(event) {
  event.preventDefault()
  contactRef.once('value', verifyLogin)
});

function verifyLogin(snapshot){
  var email = $("#txtEmail1").val()
  var password = $("#txtPassword1").val()
  var found = false;
  snapshot.forEach(function(userSnapshot){
  var mail = userSnapshot.val().txtEmail
  if (email==mail) {
    var pass = userSnapshot.val().txtPassword;
    if (pass==password) {
      found = true;
    }
  }
  if (found){
    localStorage.setItem('logged', true)
    var islogged= localStorage.getItem('logged')
    window.location.href="indexLogged.html"
  }else{
    alert2()
  };
})
}


function alert2() {
  $("#alert2").slideDown();
  $("#alert2").delay(3000).slideUp();
  $("#alert2").css('display', 'block');
}

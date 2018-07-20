$("#formulaire").submit(function(e) {
  e.preventDefault();
  $("#alert1").css('display', 'block');
});

function formDone() {
    $("#alert1").slideDown(400);
    $("#alert1").css('display', 'block');
}

/*  var name = $("#name").val()
  var email = $("#email").val()
  var book = $("#book").val()
  var author = $("#author").val()
  contactRef.push({
  name: name,
  email: email,
  book: book,
  author: author}) */



function prozor(){
    let value = confirm("Are you sure you want to delete all information?");
console.log(value);
}

function validacijaImena() {
    var x = document.forms["Reservation"]["ime"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function validacijaEmail() {
    var x = document.forms["Reservation"]["email"].value;
    if (x == "") {
      alert("E-mail must be filled out");
      return false;
    }
  }

  function validacijaDatuma() {
    var x = document.forms["Reservation"]["datum"].value;
    if (x == "") {
      alert("Date must be filled out");
      return false;
    }
  }

  $(document).ready(function(){
$("input").focus(function(){
    $("#prvoPolje").css("border", "3px solid blue");
});

$("input").focus(function(){
    $("#drugoPolje").css("border", "3px solid blue");
});
$("input").focus(function(){
    $("#cetvrtoPolje").css("border", "3px solid blue");
});
$('.gal').hover(
  function() {
    $(this).animate({"opacity": "0.4"}, 500);
  },
  function() {
    $(this).animate({"opacity": "1"}, 500);
  });
  });
  




 
 




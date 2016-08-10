$(document).ready(function(){
  $("#info form").submit(function(event) {
    var userName = $("input#userName").val();
    var gender = $("input:radio[name=gender]:checked").val();

    var band = $("input:radio[name=band]:checked").val();
    var favoriteColor = $("#color").val();

    var bev = $("#beverage").val();

     $(".name").text(userName);
     $(".gender").text(gender);
     $(".band").text(band);
     $(".beverage").text(bev);

     $("body").css("background-color",favoriteColor);

     event.preventDefault();
  });

  $("button#reset").click(function() {
    location.reload();
  });
});

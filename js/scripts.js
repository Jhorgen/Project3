$(document).ready(function(){
  console.log("jQuery is working");
  $("#form").submit(function(event){
    event.preventDefault()
    var beep = $("#input-num").val();

  });
});

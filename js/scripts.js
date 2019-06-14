$(document).ready(function(){
  console.log("jQuery is working");
  $("#form").submit(function(event){
    event.preventDefault()
    console.log("yes");


  });

  var beep = $("#inputNum").val();
  console.log(beep);
  var inputArray = [];
 $(inputArray).push(beep);
  var ouputArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    console.log(beep);
    var ouputArray = [];
    $(beep).push(outputArray);
    console.log(outputArray);
    console.log(inputArray);

  };
});

$(document).ready(function(){
  console.log("jQuery is working");
  $("#form").submit(function(event){
    event.preventDefault()
    var beep = $("#input-num").val();

    var ouputArray = [];
    var inputArray = ['1', '2', '3', '4', '5'];
    for (var inputArray = 0; i < inputArray.length; inputArray++) {
      console.log(beep);
      outputArray.push(beep);
      console.log(outputArray);
      console.log(inputArray);
    };
  });
});

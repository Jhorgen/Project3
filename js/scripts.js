$(document).ready(function(){
  console.log("jQuery is working");
  $("#input-form").submit(function(event){
    // console.log("here");
    event.preventDefault();
    // console.log("yes");


    var outputArray = [];
    var beep = $("#input-num").val();
    outputArray.push(beep);
    console.log(beep);
    for (var i=0; i < beep.length; i++) {
      if (outputArray[i] == "1") {
          outputArray[i] = "Beep";
          console.log(outputArray);
        } else if (outputArray[i] === "2") {
           outputArray[i] = "Boop";
        } else if (outputArray[i] === "3") {
          outputArray[i] = "Sorry dave, I'm afraid I can't do that.";
        } else if (outputArray[i] === "13") {
          outputArray[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
        } else if (outputArray[i] === "21") {
          outputArray[i] = "Boop";
        } else if (outputArray[i] === "32") {
          outputArray[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
        }
};
$("#output").text(outputArray);
});
});

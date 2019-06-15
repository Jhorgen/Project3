$(document).ready(function(){
  console.log("jQuery is working");
  $("#input-form").submit(function(event){
    // console.log("here");
    event.preventDefault();
    // console.log("yes");


    var outputArray = [];
    var beep = ($("#input-num").val()).split("");
    outputArray.push(beep);
    console.log(beep);
    for (var i=0; i < outputArray.length; i++) {
      if (beep[i] === "1") {
          beep[i] = "Beep";
          console.log(outputArray);
        } else if (beep[i] === "2") {
           beep[i] = "Boop";
        } else if (beep[i] === "3") {
          beep[i] = "Sorry dave, I'm afraid I can't do that.";
        } else if (beep[i] === "13") {
          beep[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
        } else if (beep[i] === "21") {
          beep[i] = "Boop";
        } else if (beep[i] === "32") {
          beep[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
        }
};
$("#output").text(outputArray);
});
});

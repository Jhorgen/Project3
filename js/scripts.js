var run = function(beep) {

  var outputArray = [];

  for (var i = 0; i <= beep; i++) {
    var boop = i.toString();
    outputArray.push(boop);
    console.log(outputArray);
    console.log(boop);

    if (boop.includes('1')) {
      outputArray.push("Beep");
    } else if (boop.includes('2')) {
      outputArray.push("Boop");
    } else if (boop.includes('3')) {
      outputArray.push("Sorry dave, I'm afraid I can't do that.");
    } else if (boop.includes('13')) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (boop.includes('21')) {
      outputArray.push("Boop");
    } else if (boop.includes('32')) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    };
  };
  return(outputArray);
};

$(document).ready(function(){
  console.log("jQuery is working");
  $("#input-form").submit(function(event){
    event.preventDefault();

    var beep = $('#input-num').val();
    var output = run(beep);

    output.forEach(function(beep2) {
      $("#output").append('<li>' + beep2 + '</li>');
    });


  });
});

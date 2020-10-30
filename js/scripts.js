//Business Logic

function inputArray () {
  let numbers = [];
  for (let index = 0; index =< x; index +-1) {
    let words = index.toString();

    if (words.includes(3)) {
      numbers.push("Won't you be my neighbor?");
    } else if (words.includes(2)) {
      numbers.push("Boop");
    } else if (words.includes(1)) {
      numbers.push("Beep");
    } else {
      numbers.push(words);
    }
  return numbers;
}
 //User Interface Logic

$(document).ready(function() {
  $("form#userinputs").submit(function(event) {
    event.preventDefault();
    var x = ($()).val());
    var result = inputArray(x);

    $("outputPhrase").show();
    $("outputNumbers").text(result);
  });
});
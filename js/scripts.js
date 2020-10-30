
// Business Logic



















// User Interface Logic

$(document).ready(function() {
  $("#formOne").submit(function(event){
    const inputReceived = $("input#number").val();
    $("#number").number(inputReceived.toString());
    //event.preventDefault();
      
  });
});










// Business Logic

//function robot(variable1) {
//  let number = [];
//  for (let variable2 = 0; variable2 <= variable1; variable2++) {
//    number.push(variable2);
//    if ((number[variable2]).match("3")) {
//      number[variable2] = ("won't you be my neighbor?");
//    } else if ((number[variable2]).match("2")) {
//      number[variable2] = ("boop");
//    } else if ((number[variable2]).match("1")) {
//      number[variable2] = ("beep");
//    } else {
//      number[variable2];
////    }
//  }
//return number;
//};



// User Interface Logic


//$(document).ready(function() {
//  $("#formOne").submit(function(event) {
//    event.preventDefault();
////    const usernumber = $("#number").val();
//    let result = robot(usernumber);
////    $("output").text(result);
//    $("output").show();
//  });
//});






















//Business Logic

//function inputArray (x) {
//  let numbers = [];
//  for (let index = 0; index <= x; index +=1) {
//    let words = index.toString();

//    if (words.includes(3)) {
//      numbers.push("Won't you be my neighbor?");
//    } else if (words.includes(2)) {
//      numbers.push("Boop");
//    } else if (words.includes(1)) {
//      numbers.push("Beep");
//    } else {
//      numbers.push(words);
//    }
//  return numbers;
//}
 //User Interface Logic

//$(document).ready(function() {
  //$("form#userinputs").submit(function(event) {
    //event.preventDefault();
    //let x = ($("input#number")).val());
    //let result = inputArray(x);

    //$("outputPhrase").show();
    //$("outputNumbers").text(result);
  //});
//});
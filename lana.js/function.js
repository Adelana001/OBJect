// function  happy (){
//     console.log(2+13)
// }
// happy();
//hoisting property

// var greeting = greet("Lana", 18)

// console.log(greeting)
// function greet(name ,hour) {
//     var message
//     if (hour < 12) {
//         message = "Good morning"
//         return message;
//     }
//     else {
//         if (hour < 18){
//             message = "good afternoon"
//             return message;
//         }
//         else  if (hour < 24 ){
//             message = "good evening"
//             return message
//         }
//     }
// }
// var newGreet = function () {

// }

function getFizzBuzz(number=1) { 
  if (number % 3 == 0 && number % 5 == 0) {
    return "fizzBuzz";
  } else if (number % 3 == 0) {
    return "fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  } 
}  

// var numbers = []
// for (var i = 1 ; i<= 1000; i=i+2)
//         numbers.push(i)
// console.log(
//     numbers.map(function(value){
//     return getFizzBuzz(value)
//      } )
// );
// console.log(getFizzBuzz);


// var numbers = [];
// function getrandom(){
//   var  initialRand = Math.random();
//         var maxLimit = 1024
//         var minLimit = 1;
//         var randomNum = initialRand* maxLimit;
//         var finalNumber = Math.floor(randomNum) + minLimit;
//         return finalNumber;
// }
// for (var i = 1; i <= 100; i++) {
//   var rab = getrandom();
//   numbers.push(rab)
// }
// console.log(numbers)
//  console.log(
//     numbers.map(function(value){
//     return getFizzBuzz(value)
//      } )
// );
//console.log(getFizzBuzz);
     var numbers = [];
  for (i =1 ;i<101 ; i++) {
    console.log("Checking through the number as a string ") ;
    if (i%2 == 0 ) {
        numbers.push(i);
        continue;
    }
    console.log(i)
    if (i > 10) {
        break;
    }
    console.log("Done checking through the number "); 
  }

  const  number = [];
  number[100]= 20;
  console.log(number[100]);

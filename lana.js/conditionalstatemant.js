var Money = parseInt(prompt("How much di you have"));
var Apple = 30000;
var upo = 1000;
var pepsi = 2000;

// if (Money >= upo) {
//   console.log("get upo");
// } else {
//   if (Money >= Apple) {
//     console.log("get amount");
//   } else {
//     console.log("get pepsi");
//   }
// }
if(Money >= Apple) {
    console.log("You can get Apple")
} 
else if (Money>= pepsi){
    console.log("You can afford coke")
}
else if (Money >= upo){
    console.log("You can afford upo")
}
else {console.log("You woold have to get water")}
console.log(Money)
console.log(typeof Money)
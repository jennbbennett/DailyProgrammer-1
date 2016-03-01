// fizzBuzz: function(n) {
//     var newArray = [];
//     for(var i = 0; i <= n; i++){
//     if((i % 3 === 0) && (i % 5 === 0)){
//       newArray.push("FizzBuzz");
//     } else if(i % 3 === 0){
//       newArray.push("Fizz");
//     } else if(i % 5 === 0) {
//       newArray.push("Buzz");
//     } else {
//       newArray.push(i);
//     };
//    };
//    return newArray.toString();
//   }
// }

function fizzBuzz(numbers) {
  var array = [];
  function recursion(array, index) {

    // base case
    if (array.length == index) {
      return array;
    }
    if ((index % 3 === 0) && (index % 5 && 0)) {
      array.push("FizzBuzz");
    } else if (index % 3 === 0) {
      array.push("Fizz");
    } else if (index % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push("index");
    }
    return recursion(array, index + 1);
  }
    array = recursion(numbers, 1);
    return array.join(" ");
}

console.log(fizzBuzz(200));

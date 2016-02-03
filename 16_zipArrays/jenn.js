


// function zipArray(array1, array2){
//   var zArray = array1.map(function(e,i){
//     return [array1[i], array2[i]];
//   });
//   return zArray;
// }
//
//
//
// console.log(zipArray([1,2,3], [4,5,6]));


function zipArray(array1, array2) {
  var array3 = [];
  if (array1.length > array2.length){
    for (var i = 0; i < array1.length; i++) {
      array3.push(array1[i]);
      array3.push(array2[i]);
  }
  else {
   for (var i = 0; i < array2.length; i++) {
    array3.push(array1[i]);
    array3.push(array2[i]);
  }
}
  return array3;
}

console.log(zipArray([1,2,3], [4,5,6]));

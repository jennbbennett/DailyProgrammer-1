function combineAndSort(array1, array2){
  newArray = array1.concat(array2);
  newArray.sort();
  return newArray;

}

console.log(combineAndSort([ "cat", "dog", "fish", "zebra" ], [ "lion", "aardvark", "gorilla" ]));

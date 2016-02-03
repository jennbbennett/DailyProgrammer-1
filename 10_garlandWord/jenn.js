// need to have a count = degree, set the count to zero to start
// split the string into an array
// iterate over the array
// if the letter has a match  - increment the counter to 1 and store the index of the match
// second iteration: if
// the letter at index +1 of that letter matches the letter at index +1 of the match, increment the count
//





function garland(string){
  var degreeCount = 0;
  var foundmMatch = true;
  for(i = 0; i <= string.length; i++){
    var current = gArray[i+1];
    if(gArray[i] === current){
      degreeCount ++;
      current ++;
    } else {
      current ++;
    }
  };

  return degreeCount;
}

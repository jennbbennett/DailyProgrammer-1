function diagonalSum(array){
    var sum = 0;
    for(i = 0; i < array.length; i++){
      for(j = 0; j < array[i].length; j++){
      if(i === j){
        sum += array[j][i];
      }
    }
  }
    return sum;
}

console.log(diagonalSum([[1, 0, 0, 0],

[0, 1, 0, 0],

[0, 0, 1, 0],

[0, 0, 0, 1]]
));


// could use map or reduce as well

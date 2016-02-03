// get the array length of the main array;
// then get the array length of array[i];
//return array.length + 'x' + array[i].length;


function matrixDimension (array){
   var parentDimension = array.length;
   var childDimension = array[0].length;
  return parentDimension + 'x' + childDimension;
}


console.log(matrixDimension([[44, 23],[21, 10],
               [9, 28],
               [85, 16],
               [33, 18]]));



function rotateMatrix(array){
    var newArray1 = [];
    var newArray2 = [];
    for(i = array.length-1; i >=0; i++){
      for(j = 0; j < array[i].length; j++){
          if (i == array.length-1){
            newArray.push[i][j];
          } else{
            
          }
          }
}

    return newArray;
}

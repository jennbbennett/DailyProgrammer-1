var csv = require('../csv.js');

function tableizer(string) {
  var tableArray = string.split('\n');
  for (i = 0; i < tableArray.length; i++) {
    tableArray.slice(0, 2);
  }
  // return tableArray;
  console.log(tableArray);

  function tripleSplit(tableArray) {
    for (i = 0; i < tableArray.length; i++) {
      var currentRowArray = tableArray[i].split(',');
      console.log(currentRowArray);
    }
  }

}




// console.log(tripleSplit(tableArray));
// console.log(tableizer(First,Last,Address\nAnnamarie,Romaguera,9446 Schroeder Squares\nSebastian,Hessel,114 Frederic Centers\nMarlon,Hahn,307 Bradtke Grove\nDuane,Schowalter,10771 Keaton Knoll\nLaurence,Schuster,610 Odell Point"));
console.log(tableizer(csv));

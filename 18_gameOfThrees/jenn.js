// function takes in a number
// first step - determine if the number is divisible by three
// if so, console log the number and 0
// return the result plus
// if not, either add one or subtract one to make it divisible and return the number plus the -1 or 1


function gameOfThrees(num){
  while(num > 1){
    switch(num/3){
      case (num % 3 === 0):
        console.log(num/3);
        break;
      case (num % 3 === 1):
      console.log(num/3 + '-1');
      break;
      case (num % 3 ===2):
      console.log(num/3 + '1');
      break;
    }
    gameOfThrees(num);
  }

}

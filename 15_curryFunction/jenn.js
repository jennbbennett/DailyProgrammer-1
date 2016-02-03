

  var add = function(a) {
    return function(b){
      return a + b;
  };
};



console.log(add(20)(5));

module.exports = function(word, array) {
	return "so fuzzy inside" ;
};

function fuzzySearch(word, array) {
	var result = [];
	for(var i = 0; i <= array.length; i++) {
		if(word === array[i]){
			result.push(array[i]);
		}
		return result;
	}
}

// Brian's solution
module.exports = function(word, array) {
    var lettersArray = word.split('');
    console.log(lettersArray);

    var fuzzyMatches = [];

    array.forEach(function(curr, i){
        var testWordLen = curr.length;
        var testWordArray = curr.split('');
        var matches = 0;
        lettersArray.forEach(function(letter, n){
            if (letter === testWordArray[n]) {
                matches += 1;
            }
        });
        if (matches >= lettersArray.length - 1) {
            fuzzyMatches.push(curr);
        }
    })

    return fuzzyMatches;
}

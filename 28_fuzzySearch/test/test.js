<<<<<<< HEAD
var expect = require('chai').expect;
var fuzzySearch = require('../solutions/me');

var names = ["mike","fred", "rob", "dave", "jack", "marry", "mark", "jim", "jill", "june", "jess", "grey", "greg", "mark", "jenn", "richard", "robert"];
=======
var expect = require('chai').expect
var fuzzySearch = require('../solutions/bda')
>>>>>>> c825930a994dbae012187333a0dad665feb79c1a


describe("fuzzy-search", function() {
	describe("search", function() {
		it("should return a list of words that match the search", function() {
			var result = fuzzySearch('jill', names);
			expect(result).to.deep.equal(['jill']);
		});
		it("should return an empty list if search isn't found", function() {
			var result = fuzzySearch('bob', names);
			expect(result).to.deep.equal([]);
		});
	});
	describe("complete search", function() {
		xit("should return a list of words that match part of the search", function() {
			var result = fuzzySearch('rob', names, true, 1);
			expect(result).to.deep.equal(['rob', 'robert']);
		});
		xit("should return an empty list if input is blank", function() {
			var result = fuzzySearch('', names);
			expect(result).to.equal([]);
		});
	});
	describe("remove duplicates", function() {
		it("should remove duplicates from the result list", function() {
			var result = fuzzySearch('mark', names);
			expect(result).to.deep.equal(['mark']);
		});
	});
	describe("fuzzy search", function() {
		xit("should return a list of words that match off one character", function() {
			var result1 = fuzzySearch('jit', names, true, 1);
			var result2 = fuzzySearch('mart', names, true, 1);
			var result3 = fuzzySearch('freg', names, true, 1);
			var result4 = fuzzySearch('tret', names, true, 1);
			var result5 = fuzzySearch('martt', names, true, 1);
			var result6 = fuzzySearch('dabe', names, true, 1);

<<<<<<< HEAD
			expect(result1).to.equal(['jim', 'jill']);
			expect(result2).to.equal(['mark', 'marry']);
			expect(result3).to.equal(['fred', 'greg']);
			expect(result4).to.equal([]);
			expect(result5).to.equal([]);
=======
			expect(result1).to.deep.equal(['jim', 'jill']);
			expect(result2).to.deep.equal(['marry', 'mark']);
			expect(result3).to.deep.equal(['fred', 'greg']);
			expect(result4).to.deep.equal([]);
			expect(result5).to.deep.equal([]);
			expect(result6).to.deep.equal(['dave']);
>>>>>>> fc5f36fb16e38de313d527720f024a6e59e0f40f
		});
	});
	describe('extra features', function() {
		xit("should be case insensitive", function() {
			var result = fuzzySearch('JaCK', names);
<<<<<<< HEAD
			expect(result).to.equal(['jack']);
		});
		xit("should handle white space", function() {
			var result = fuzzySearch('        june    ', names);
			expect(result).to.equal(['june']);
=======
			expect(result).to.deep.equal(['jack']);
		});
		xit("should handle white space", function() {
			var result = fuzzySearch('        june    ', names);
			expect(result).to.deep.equal(['june']);
>>>>>>> fc5f36fb16e38de313d527720f024a6e59e0f40f
		});
	});
	describe('stretch', function() {
		xit("should make fuzzy search an option" ,  function() {
			// example: fuzzySearch(search, listOfWords, fuzzySearch)
			var result1 = fuzzySearch('richar', names, false);

			var result2 = fuzzySearch('richar', names, true);
			expect(result1).to.equal([]);
			expect(result2).to.equal(['richard']);

		});
		xit("should make the fuzzy tolerance an option", function() {
			// example: fuzzySearch(search, listOfWords, fuzzySearch, tolerance)
			var result1 = fuzzySearch('roperp', names, true, 2);
			var result2 = fuzzySearch('matt', names, true, 3);

			expect(result1).to.deep.equal(['robert']);
			expect(result2).to.deep.equal(['mike', 'dave', 'jack', 'marry', 'mark']);
		});
	});
})

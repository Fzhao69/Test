const sum = require('./sketch');

test('adds 1 + 9 to equal 9',sunTest);


function sunTest(){
	expect(sum(1,9)).toBe(10);
}
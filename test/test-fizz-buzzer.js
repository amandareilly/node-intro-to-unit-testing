const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return the correct output for all numeric inputs', function() {
        const normalCases = [
            { num: 3, expected: 'fizz' },
            { num: 5, expected: 'buzz' },
            { num: 15, expected: 'fizz-buzz' },
            { num: 0, expected: 'fizz-buzz' },
            { num: 1, expected: 1 }
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });
    it('should raise error if arg not a number', function() {
        const badInputs = [
            'life', [42],
            { num: 42 }
        ];

        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        })
    });
});
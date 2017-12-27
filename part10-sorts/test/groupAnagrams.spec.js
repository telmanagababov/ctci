const expect = require('chai').expect;
const groupAnagrams = require('../src/groupAnagrams');

describe('groupAnagrams', () => {
    it('should sort 3-size anagrams', () => {
        let data = ['abc', 'cbd', 'dbc', 'abc', 'lmk', 'cab'],
            result = groupAnagrams(data);
        expect(result).to.deep.equal(['abc', 'abc', 'cab', 'cbd', 'dbc', 'lmk']);
    });
    it('should sort 5-size anagrams', () => {
        let data = ['abcde', 'cbdef', 'forest', 'fedbc', 'milk', 'restof'],
            result = groupAnagrams(data);
        expect(result).to.deep.equal(['abcde', 'cbdef', 'fedbc', 'forest', 'restof', 'milk']);
    });
});
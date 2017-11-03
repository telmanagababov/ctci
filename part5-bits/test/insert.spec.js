const assert = require('assert');
const should = require('should');
const insert = require('../src/insert');

describe('insert', function() {
  let target = parseInt('1000000001', 2),
      data = parseInt('11011', 2);
  it('should insert data to "0" position', function() {
    let result = parseInt('1000011011', 2);
    insert(data, target, 4, 0).should.be.exactly(result);
  });
  it('should insert data to middle position', function() {
    let result = parseInt('1001101101', 2);
    insert(data, target, 6, 2).should.be.exactly(result);
  });
  it('should insert data to the last position', function() {
    let result = parseInt('1101100001', 2);
    insert(data, target, 9, 5).should.be.exactly(result);
  });
});
const assert = require('assert');
const should = require('should');
const rotateMatrix = require('../src/rotateMatrix');

describe('rotateMatrix', function() {
  it('should rotate 1x1 matrix', function() {
    rotateMatrix([
      [1]
    ]).should.be.deepEqual([
      [1]
    ]);
  });

  it('should rotate 2x2 matrix', function() {
    rotateMatrix([
      [1, 2], 
      [3, 4]
    ]).should.be.deepEqual([
      [3, 1], 
      [4, 2]
    ]);
  });
  
  it('should rotate 3x3 matrix', function() {
    rotateMatrix([
      [1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9]
    ]).should.be.deepEqual([
      [7, 4, 1], 
      [8, 5, 2], 
      [9, 6, 3]
    ]);
  });
});
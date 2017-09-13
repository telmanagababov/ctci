const assert = require('assert');
const should = require('should');
const zeroMatrix = require('../src/zeroMatrix');

describe('zeroMatrix', function() {
  it('should handle 1x1 matrix', function() {
    zeroMatrix([
      [1]
    ]).should.be.deepEqual([
      [1]
    ]);
  });

  it('should handle 2x2 matrix', function() {
    zeroMatrix([
      [1, 0], 
      [3, 4]
    ]).should.be.deepEqual([
      [0, 0], 
      [3, 0]
    ]);
  });
  
  it('should handle 3x3 matrix', function() {
    zeroMatrix([
      [1, 2, 3], 
      [4, 5, 6], 
      [0, 8, 9]
    ]).should.be.deepEqual([
      [0, 2, 3], 
      [0, 5, 6], 
      [0, 0, 0]
    ]);
  });
  
  it('should handle 4x4 matrix', function() {
    zeroMatrix([
      [0,   2,  3,  4], 
      [5,   6,  7,  8], 
      [9,   0,  11, 12],
      [13,  14, 15, 16]
    ]).should.be.deepEqual([
      [0,   0,  0,  0], 
      [0,   0,  7,  8], 
      [0,   0,  0,  0],
      [0,   0,  15, 16]
    ]);
  });
});
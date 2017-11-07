const assert = require('assert');
const should = require('should');
const drawLine = require('../src/drawLine');

describe('drawLine', function() {
  var screen = null,
      width = 0,
      x1 = 0,
      x2 = 0,
      y = 0;
  beforeEach(function() {
    screen = [0, 0, 0, 0, 0, 0, 0, 0];
    width = 16;
    x1 = 0;
    x2 = 16;
    y = 0;
  })
  it('should draw all first line', function() {
    drawLine(screen, width, x1, x2, y);
    screen[0].should.be.exactly(parseInt('11111111', 2));
    screen[1].should.be.exactly(parseInt('11111111', 2));
  });
  it('should draw partially second line', function() {
    width = 24;
    x1 = 4;
    x2 = 20;
    y = 1;
    drawLine(screen, width, x1, x2, y);
    screen[3].should.be.exactly(parseInt('00001111', 2));
    screen[4].should.be.exactly(parseInt('11111111', 2));
    screen[5].should.be.exactly(parseInt('11110000', 2));
  });
  it('should draw partially first line', function() {
    width = 32;
    x1 = 14;
    x2 = 18;
    y = 0;
    drawLine(screen, width, x1, x2, y);
    screen[0].should.be.exactly(parseInt('00000000', 2));
    screen[1].should.be.exactly(parseInt('00000011', 2));
    screen[2].should.be.exactly(parseInt('11000000', 2));
    screen[3].should.be.exactly(parseInt('00000000', 2));
  });
});
var assert = require('assert');
var chai = require('chai');
var math = require('../Math')

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});



describe('Math', function(){
    describe('addition',function(){
        it('should return 18', function(){
            chai.expect(math.addition(10,8)).to.equal(18);
        })
    })
})
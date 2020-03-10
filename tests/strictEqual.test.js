const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')
describe('comparison', () => {
  describe('strictEqual', () => {
    it('returns true if both numbers are equal', () => {
      const a = 5
      const b = 5
      const returnTrueNumber = strictEqual(a, b)
      expect(returnTrueNumber).to.equal(true)
    })
    it('returns false if both inputs are not same data type', () => {
      const a = 5
      const b = '5'
      const returnFalseNumber = strictEqual(a, b)
      expect(returnFalseNumber).to.equal(false)
    })
    it('returns true if both strings are the same value', () => {
      const a = 'a'
      const b = 'a'
      const returnTrueString = strictEqual(a, b)
      expect(returnTrueString).to.equal(true)
    })
    it('returns false if both strings are different values', () => {
      const a = 'a'
      const b = 'b'
      const returnFalseString = strictEqual(a, b)
      expect(returnFalseString).to.equal(false)
    })
  })
})
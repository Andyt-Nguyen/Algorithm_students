const assert = require("chai").assert
const algo = require("./problem_set_1/algorithm")

describe("Testing Algorhthms", () => {

    // sortEvenAndOdd()
    describe("Return evens and odd numbers in descending order where the evens appear first in the array", () => {
        it("Should return [8,6,0,7,5,1]", done => {
            const result = algo.sortEvenAndOdd([1,7,5,8,0,6])
            assert.sameDeepMembers(result,[8,6,0,7,5,1])
            done()
        })

        it("Should return [2,16,88,11,63,809]", done => {
            const result = algo.sortEvenAndOdd([809,63,11,2,16,88])
            assert.sameDeepMembers(result,[2,16,88,11,63,809])
            done()
        })

        it("Should return [2000,2012,5100,4323,7877,9093]", done => {
            const result = algo.sortEvenAndOdd([5100,9093,4323,2000,2012,7877])
            assert.sameDeepMembers(result, [2000,2012,5100,4323,7877,9093])
            done()
        })
    })
})
const assert = require("chai").assert
const algo = require("./problem_set_1/algorithm")

describe("Testing Algorhthms", () => {

    xdescribe("Return evens and odd numbers in descending order where the evens appear first in the array", () => {
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

    xdescribe("Captalize the first letter in every word as well as lowercase every word", () => {
        
        it("Should Return 'I Like Turtles'", done => {
            const result = algo.capitalizeFLetter("i Like tUrTles")
            assert.equal(result, "I Like Turtles")
            done()
        })

        it("Should Return 'David Likes To Eat Cookies When Nobody Is Watching'", done => {
            const result = algo.capitalizeFLetter("dAviD liKEs TO eaT coOKiEs WhEn nOBoDy iS watChIng")
            assert.equal(result, "David Likes To Eat Cookies When Nobody Is Watching")
            done()
        })

        it("Should return You Are The Master At Javascript", done => {
            const result = algo.capitalizeFLetter("YoU aRe ThE mAsTeR AT JaVaScRipt")
            assert.equal(result, "You Are The Master At Javascript")
            done()
        })

        it("Should retrun Ieatfoodallday", done => {
            const result = algo.capitalizeFLetter("iEaTFooDAllDay")
            assert.equal(result,"Ieatfoodallday")
            done()
        })
    })

    xdescribe("Return an array with no duplications in descending order", done => {

        it("Should return [33,22,11]", done => {
            const result = algo.removeDups([33,22,11])
            assert.sameDeepMembers(result, [ 33, 22, 11 ])
            done()
        })

        it('Should return [ 44, 42, 12, 7, 5, 2 ]', done => {
            const result = algo.removeDups([44,12,42,44,2,12,42,5,7,5,5])
            assert.sameDeepMembers(result, [ 44, 42, 12, 7, 5, 2 ])
            done()
        })

        it("Should return  [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ]", done => {
            const result = algo.removeDups([22,55,528,1,528,92,100,100,3000, 2,4,0,4,2, 22,92,49,100, 55])
            assert.sameDeepMembers(result, [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ])
            done()
        })

        it("Should return ['cc','bb','aa']", done => {
            const result = algo.removeDups(['aa','aa','bb','bb','cc','cc'])
            assert.sameDeepMembers(result, ['cc','bb','aa'])
            done()
        })
    })


})
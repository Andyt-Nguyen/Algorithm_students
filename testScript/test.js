const assert = require("chai").assert
const algo = require("../algorithm")

describe("Testing Algorhthms", () => {

    xdescribe("Captalize the first letter in every word as well as lowercase every word", () => {
        it("Should Return 'I Like Turtles'", () => {
            const result = algo.capitalizeFLetter("i Like tUrTles")
            assert.equal(result, "I Like Turtles")
        })

        it("Should Return 'David Likes To Eat Cookies When Nobody Is Watching'", () => {
            const result = algo.capitalizeFLetter("dAviD liKEs TO eaT coOKiEs WhEn nOBoDy iS watChIng")
            assert.equal(result, "David Likes To Eat Cookies When Nobody Is Watching")
        })

        it("Should return You Are The Master At Javascript", () => {
            const result = algo.capitalizeFLetter("YoU aRe ThE mAsTeR AT JaVaScRipt")
            assert.equal(result, "You Are The Master At Javascript")
        })

        it("Should retrun Ieatfoodallday", () => {
            const result = algo.capitalizeFLetter("iEaTFooDAllDay")
            assert.equal(result,"Ieatfoodallday")
        })
    })

    xdescribe("Return an array with no duplications in descending order", () => {
        it("Should return [33,22,11]", () => {
            const result = algo.removeDups([33,22,11])
            assert.sameDeepMembers(result, [ 33, 22, 11 ])
        })

        it('Should return [ 44, 42, 12, 7, 5, 2 ]', () => {
            const result = algo.removeDups([44,12,42,44,2,12,42,5,7,5,5])
            assert.sameDeepMembers(result, [ 44, 42, 12, 7, 5, 2 ])
        })

        it("Should return  [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ]", () => {
            const result = algo.removeDups([22,55,528,1,528,92,100,100,3000, 2,4,0,4,2, 22,92,49,100, 55])
            assert.sameDeepMembers(result, [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ])
        })

        it("Should return ['cc','bb','aa']", () => {
            const result = algo.removeDups(['aa','aa','bb','bb','cc','cc'])
            assert.sameDeepMembers(result, ['cc','bb','aa'])
        })
    })


})
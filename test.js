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

    // capitalizeFLetter()
    describe("Captalize the first letter in every word as well as lowercase every word", () => {
        
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

    // removeDups()
    describe("Return an array with no duplications in descending order", done => {

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

    // repeatMe()
    describe('Return an a string that repeats itself on every single character', () => {

        it("Should return aabbcc", done => {
            const result = algo.repeatMe('abc')
            assert.equal(result, 'aabbcc')
            done()
        })

        it("Should return hhEElloo--  ''  ffrriieendds  ooff  tthhee  nnoorrtthh", done => {
            const result = algo.repeatMe("hEllo- ' friends of the north")
            assert.equal(result, "hhEElllloo--  ''  ffrriieennddss  ooff  tthhee  nnoorrtthh")
            done()
        })

        it("Should return '  '", done => {
            const result = algo.repeatMe(" ")
            assert.equal(result, "  ")
            done()
        })
    })

    // removeChar()
    describe("Return string without the character", () => {
        
        it("Should return heo", done => {
            const result = algo.removeChar("hello", "ll")
            assert.equal(result, 'heo')
            done()
        })

        it("Should return aazzkkrr", done => {
            const result = algo.removeChar("aazzTTkkrr", "TT")
            assert.equal(result, "aazzkkrr")
            done()
        })

        it("Should return iturtles", done => {
            const result = algo.removeChar("iliketurtles", "like")
            assert.equal(result, 'iturtles')
            done()
        })

        it("Should return askforjeevsgoogle", done => {
            const result = algo.removeChar('askforjeevsgoogle','jeevs')
            assert.equal(result, 'askforgoogle')
            done()
        })

        it("Should return yuiiss ", done => {
            const result = algo.removeChar('yuiiaass', 'aa')
            assert.equal(result, 'yuiiss')
            done()
        })

        it("Should return aazziiqllkn", done => {
            const result = algo.removeChar("aazijziiqllkn", 'ij')
            assert.equal(result, "aazziiqllkn")
            done()
        })

        it("Should return JamesFranko", done => {
            const result = algo.removeChar("JamedesFranko", 'de')
            assert.equal(result, "JamesFranko")
            done()
        })
    })

    // breakTheCamelsBack()
    describe('Return a string that puts a space before a capital letter', () => {

        it("Should return hello World", done => {
            const result = algo.breakTheCamelsBack('helloWorld')
            assert.equal(result, 'hello World')
            done()
        })

        it("Should return pokie Man", done => {
            const result = algo.breakTheCamelsBack("pokieMan")
            assert.equal(result, "pokie Man")
            done()
        })

        it("Should return i Am Who I Say I Am", done => {
            const result = algo.breakTheCamelsBack("iAmWhoISayIAm")
            assert.equal(result, "i Am Who I Say I Am")
            done()
        })

        it("Should return this Is Camel Case People", done => {
            const result = algo.breakTheCamelsBack('thisIsCamelCasePeople')
            assert.equal(result, 'this Is Camel Case People')
            done()
        })

        it('Should return i Like To Go To The Pizza Hut Down The Street Cause...!', done => {
            const result = algo.breakTheCamelsBack("iLikeToGoToThePizzaHutDownTheStreetCause...!")
            assert.equal(result, "i Like To Go To The Pizza Hut Down The Street Cause...!")
            done()
        })

        it("Should return 1155 Jj Abrams Food", done => {
            const result = algo.breakTheCamelsBack("1155JjAbramsFood")
            assert(result, "1155 Jj Abrams Food")
            done()
        })
    })

    // findUnique()
    describe('Return the unique number', () => {

        it("Should return 4", done => {
            const result = algo.findUnique("1 5 7 2")
            assert.equal(result, 4)
            done()
        })

        it("Should return 3", done => {
            const result = algo.findUnique("766 772 331 678 1001")
            assert.equal(result, 3)
            done()
        })

        it("Should return 1", done => {
            const result = algo.findUnique("0 939 5 101 3 89")
            assert.equal(result, 1)
            done()
        })

        it("Should return 3", (done) => {
            const result = algo.findUnique("1 3 2 5 7 9")
            assert.equal(result, 3)
            done()
        })

        it("Should return 1", (done) => {
            const result = algo.findUnique("2 25 115 55 3123 50909")
            assert.equal(result, 1)
            done()
        })

        it("Should return 9", (done) => {
            const result = algo.findUnique("397 51 745 879 101 2003 401 313 872 239")
            assert.equal(result, 9)
            done()
        })

        it("Should return 5", (done) => {
            const result = algo.findUnique("123 321 145 733 986 761 879")
            assert.equal(result, 5)
            done()
        })
    })

    // spaceNumbers()
    describe("Return the people who are still on the ship", () => {

        it("People on the ship === 4", done => {
            const result = algo.spaceNumbers([ [1,2], [3,4], [77,1] ])
            assert.equal(result, 74)
            done()
        })

        it("People on the ship === 30", done => {
            const result = algo.spaceNumbers([ [2,4], [20, 8], [13, 9], [5, 14], [6, 9] ])
            assert.equal(result, 2)
            done()
        })

        it("People on the ship === 11", done => {
            const result = algo.spaceNumbers([ [10, 4], [4, 7], [7, 0], [8, 2], [0, 5] ])
            assert.equal(result, 11)
            done()
        })

        it("People on the ship === 5", done => {
            const result = algo.spaceNumbers([ [10,0],[3,5],[5,8] ])
            assert.equal(result, 5)
            done()
        })

        it("People on the ship === 17", done => {
            const result = algo.spaceNumbers([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
            assert.equal(result, 17)
            done()
        })

        it("People on the ship === 21", done => {
            const result = algo.spaceNumbers([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])
            assert.equal(result, 21)
            done()
        })

        it("People on the ship === 10", done => {
            const result = algo.spaceNumbers([[21,10],[50,22],[4,12],[2,16],[6,12],[1,2]])
            assert.equal(result, 10)
            done()
        })
    })

    // findTheLcd()
    describe("Finding the common denominator", () => {

        it(`Should return "(6,10)(10,10)"`, done => {
            const result = algo.findTheLcd([ [3,5], [2,2] ] )
            assert.equal(result, "(6,10)(10,10)")
            done()
        })

        it(`Should return  "(6,12)(9,12)(20,12)"`, done => {
            const result = algo.findTheLcd([ [1,2], [3,4], [5,3] ] )
            assert.equal(result,  "(6,12)(9,12)(20,12)")
            done()
        })

        it(`Should return "(45,60)(48,60)(40,60)"`, done => {
            const result = algo.findTheLcd([ [3, 4], [4, 5], [2, 3] ] )
            assert.equal(result, "(45,60)(48,60)(40,60)")
            done()
        })

        it(`Should return "(10,26)(52,26)"`, done => {
            const result = algo.findTheLcd([ [5,13], [4,2] ])
            assert.equal(result, "(10,26)(52,26)")
            done()
        })

        it(`Should return "(1,8)(4,8)(8,8)"`, done => {
            const result = algo.findTheLcd([ [1,8], [1,2] ,[4,4] ])
            assert.equal(result, "(1,8)(4,8)(8,8)")
            done()
        })
        

        it(`Should return "(4,12)(15,12)(6,12)(9,12)"`, done => {
            const result = algo.findTheLcd([ [2,6], [5,4], [1,2], [9,12] ])
            assert.equal(result, "(4,12)(15,12)(6,12)(9,12)")
            done()
        })

        it(`Should return "(4,12)(15,12)(6,12)(9,12)()"`, done => {
            const result = algo.findTheLcd([ [2,6], [5,4], [1,2], [9,12] ])
            assert.equal(result, "(4,12)(15,12)(6,12)(9,12)")
            done()
        })
        
    })


})
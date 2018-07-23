/* 

    Problem 1:
    Prompt: Create a function called sortEvenAndOdd that will sort the array so that the even numbers(sorted by ascending order)
            are followed by the odd numbers in ascending order.
        
    Test cases: 
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        [ 366, 311, 142 ] return [ 142, 366, 311 ]
        [ 351, 85, 85 ] return [ 85, 85, 351 ]
        [ 145, 372, 83, 290 ] return [ 290, 372, 83, 145 ]

*/


// Without For Loop
function sortEvenAndOdd(array) {
    array = array.sort((a,b) => a - b)
    const odds = array.filter( a => a % 2 !== 0)
    const evens = array.filter( a => a % 2 == 0)
    const combine = evens.concat(odds)
    return combine
} 



/*  

    Problem 2:
    Prompt: Create a function called capitalizeFLetter that will return the provided string with the first letter of each word capitalized. 
            Make sure the rest of the word is in lower case while the first character is cap
    
            Hint: .slice() .push()

             *** Bonus/Super Challenge ***
             Restriction: No For Loops Allowed!
             Hint: Look into HigherOrderFunctions such as .map()

    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        "i Like tUrTles" return "I Like Turtles"
        "dAviD liKEs TO eaT coOKiEs WhEn nOBoDy iS watChIng" return David Likes To Eat Cookies When Nobody Is Watching
        "YoU aRe ThE mAsTeR AT JaVaScRipt" return "You Are The Master At Javascript"
        "iEaTFooDAllDay" return Ieatfoodallday

*/


// Without for loop
function capitalizeFLetter(string) {
    const splitString = string.split(' ')
    const capLetter = splitString.map( a => {
        let restOfLetters = a.slice(1)
        return a[0].toUpperCase() + restOfLetters.toLowerCase()
    })
    return capLetter.join(' ')
}


module.exports = { sortEvenAndOdd, capitalizeFLetter }
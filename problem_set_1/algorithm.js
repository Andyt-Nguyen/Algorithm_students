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
    return ;
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
    return ;
}


/* 

    Problem 3
    Prompt: Create a function called removeDups() that will return an array with no duplications in descending order.

    *** Bonus/Super Challenge ***
        No for loops allowed!

    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        [44,12,42,44,2,12,42,5,7,5,5] return [ 44, 42, 12, 7, 5, 2 ]
        [22,55,528,1,528,92,100,100,3000, 2,4,0,4,2, 22,92,49,100, 55] return [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ]
        ['aa','aa','bb','bb','cc','cc'] return ['cc','bb','aa']

*/


// Without For Loop
function removeDups(array) {
    return ;
}


module.exports = { sortEvenAndOdd, capitalizeFLetter, removeDups }
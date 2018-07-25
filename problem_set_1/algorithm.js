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


function removeDups(array) {
    return ;
}

/* 

    Problem 4
    Prompt: Create a function called repeatMe() that will repeat all the characters in the string.
    *** Bonus/Super Challenge ***
        No for loops!
    
    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        "hello" return "hheelllloo"
        "Pikachu" return "PPiikkaacchhuu"
        "Hey yoy yoyy" return "HHeeyy yyooyy yyooyyyy"

*/ 



function repeatMe(string) {
    return ;
}



/* 

    Problem 5
    Prompt: Create a function called removeChar() with two parameters. One being the string it will take in and the other being where to target string.
            The goal of this function is to take in the string and remove the "target" that is inside of it.


    *** Bonus/Super Challenge ***
     No for loops!

    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        removeChar('hello', 'll') return 'heo'
        removeChar('aazzTTkkrr', 'TT') return 'aazzkkrr'
        removeChar('iliketurtles', 'like') return iturtles

*/ 


function removeChar(string,target) {
    return ;
}

/* 

    Problem 6
    Prompt: Create a function called breakTheCamelsBack() that will create a space between the words that have a camel case.
    *** Bonus/Super Challenge ***
        No for loops!
    
    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        "helloWold" return hello World
        "pokieMan" return "pokie Man"
        "iAmWhoISayIAm" return "i Am Who I Say I Am"

*/ 



function breakTheCamelsBack(string) {
    return ;
}


/* 

    Problem 7
    Prompt: Create a function called findUnique() that will find the characters in the string that finds the index with the unique number in the batch.
    *** Bonus/Super Challenge ***
    No for loops!
    
    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        "1 5 7 2" return 4
        "766 772 331 678 1002" return 3
        "0 939 5 101 3 89" return 1

*/ 


function findUnique(numbers){
    return ;
 }

  /* 

    Problem 8
    Prompt: Create a function called spaceNumbers()
            In this function you will need to how many people are left in the spaceship after traveling to many 
            planets. In here we are returning an array of arrays with 2 values inside each index

            Example: [ [1,2], [2,3], [4,5] ]
            
            In the first index with the 2 values. The first value represents the people who have entered the ship
            from the planet, and the second value represents the value of people leaving the ship off to new life
            on another planet. Your goal is to find the amount of people left in the ship looking to find their 
            new life on another planet.

    *** Bonus/Super Challenge ***
     No for loops!

    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        [ [1,2], [3,4], [77,1] ] return 74
        [ [2,4], [20, 8], [13, 9], [5, 14], [6, 9] ] return 2
        [ [10, 4], [4, 7], [7, 0], [8, 2], [0, 5] ] return 11
        "0 939 5 101 3 89" return 1

*/ 

function spaceNumbers(numbers){
    return ;
 }
 

   /* 

    Problem 9
    Prompt: Create a function called findTheLcd()
            In this function you will need to find the lowest common denominator (LCD) in the array of arrays.
            From there once you find the LCD you will need to change the numerator respectively.

    *** Bonus/Super Challenge ***
     No for loops!

    Test Cases:
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        [ [3,5], [2,2] ] return "(6,10)(10,10)"
        [ [1,2], [3,4], [5,3] ] return "(6,12)(9,12)(20,12)"
        [ [3, 4], [4, 5], [2, 3] ] return "(45,60)(48,60)(40,60)"

*/ 

function findTheLcd(lst){
    return ;
 }



 
// Don't you dare touch this
module.exports = { sortEvenAndOdd, capitalizeFLetter, 
                  removeDups, repeatMe, removeChar, 
                  breakTheCamelsBack, findUnique, spaceNumbers, findTheLcd }
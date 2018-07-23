# Algorithm for students

A series of algorithms will test students on ways to solve basic/intermediate algorithm problems
using vanilla javascript.

## Getting Started

These instructions will help you get your javascript enviroment set up for testing
your algorithms.

### Prerequisites

Basic understanding of npm and javascript

### Installing

You want to first git clone this repo

```javascript
git clone https://github.com/Andyt-Nguyen/Algorithm_students.git
```

then you want to install all the dependicies in this repo

```
npm i
```

### Writing your algorithms

There will be empty functions that will have an empty return statement along with a 

basic prompt on the function's purpose.

```javascript
/* 

    Problem 1:
    Prompt: Sort the array so that the even numbers(sorted by ascending order)
            are followed by the odd numbers in ascending order.
        
    Test cases: 
        (This only test some cases for you to get an idea. This does not reflect if your algo works for all test cases)
        (run `npm run test` to check if your alg passes the tests.)

        [ 366, 311, 142 ] return [ 142, 366, 311 ]
        [ 351, 85, 85 ] return [ 85, 85, 351 ]
        [ 145, 372, 83, 290 ] return [ 290, 372, 83, 145 ]

*/


 function sortEvenAndOdd(array) {
    //  Write code in here
    return;
} 
```

You will want to execute your code in the function that says '// Write code in here'

```javascript
 function sortEvenAndOdd(array) {
    //  Write code in here
    return;
} 
```

## Testing your functions

When your code is written you will have to run a command within your termial/command prompt to see if you
have pass all the test cases.

You will run this command in your terminal/command prompt to execute if you have pass the series of tests

```
npm run test
```

### Expected results

These test will have a series of inputs that it will test to see if the user offically
passes all the test and the function works as it is expected.

Example: A function that has passed all the test cases
```javascript
  Testing Algorhthms
    Captalize the first letter in every word as well as lowercase every word
      ✓ Should Return 'I Like Turtles'
      ✓ Should Return 'David Likes To Eat Cookies When Nobody Is Watching'
      ✓ Should return You Are The Master At Javascript
      ✓ Should retrun Ieatfoodallday
    Return an array with no duplications in descending order
      ✓ Should return [33,22,11]
      ✓ Should return [ 44, 42, 12, 7, 5, 2 ]
      ✓ Should return  [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ]
      ✓ Should return ['cc','bb','aa']
```

Example: A test that has failed one of the test cases
```javascript
  7) Testing Algorhthms
       Return an array with no duplications in descending order
         Should return ['cc','bb','aa']:

      AssertionError: expected [ 'aa', 'aa', 'bb', 'bb', 'cc', 'cc' ] to have the same members as [ 'cc', 'bb', 'aa' ]
      + expected - actual

       [
      +  "cc"
      +  "bb"
         "aa"
      -  "aa"
      -  "bb"
      -  "bb"
      -  "cc"
      -  "cc"
       ]
      
      at Context.it (test.js:46:20)
```

## Isolating each function for testing
For each algorithm that you're going to solve its going to be hard to read what test cases you got wrong when all of the functions are laid out in front of you. Because of this you're going to be seeing a lot of red in your terminal. So a way to make sure your function is isoloated (by itself ) you can git checkout each branch to test your function by itself.

Steps to isoloate function within the terminal/command prompt

```
git checkout Problem2
```

In your ide when checking out to a branch
```javascript
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
```

Output in the terminal. A lot of test will be skipped in order to test the alg problem you are trying to solve.
```javascript
  Testing Algorhthms
    Return evens and odd numbers in descending order where the evens appear first in the array
      - Should return [8,6,0,7,5,1]
      - Should return [2,16,88,11,63,809]
      - Should return [2000,2012,5100,4323,7877,9093]
    Captalize the first letter in every word as well as lowercase every word
      1) Should Return 'I Like Turtles'
      2) Should Return 'David Likes To Eat Cookies When Nobody Is Watching'
      3) Should return You Are The Master At Javascript
      4) Should retrun Ieatfoodallday
    Return an array with no duplications in descending order
      - Should return [33,22,11]
      - Should return [ 44, 42, 12, 7, 5, 2 ]
      - Should return  [ 3000, 528, 100, 92, 55, 49, 22, 4, 2, 1, 0 ]
      - Should return ['cc','bb','aa']
```

## Built With

* [Mocha](https://mochajs.org/) -Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases 

* [Chai](https://maven.apache.org/) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Authors

* **[Andrew Ty Nguyen](https://github.com/Andyt-Nguyen)**



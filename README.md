# Algorithm for students

The series of algorithms will test students on ways to help with their javascript abilities
as well test their knowlege and critical thinking on tackling a problem when solving problems.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes
as well to helps students use critical skills in solving algorithms.

### Prerequisites

What things you need to install to make the program execute

```
npm install --save mocha chai
```

### Installing

A step by step series of examples that tell you how to get a development env running

There will be empty functions that will an empty return statement along with a 

basic prompt on what the functions purpose.

```

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

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

When the code is written you will have to run a test to see if the the functions passes the test in the termial/bash

### Break down into end to end tests

You will run this command to execute if you have pass the series of test

```
npm run test
```

### And coding style tests

These test will have a series of inputs that it will test to see if the user offically
passes all the test and the function works as it is expected.

Heres a test that passes all of the inputs
```
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

Heres a test that failed one of the inputs
```
       Captalize the first letter in every word as well as lowercase every word
         Should Return 'David Likes To Eat Cookies When Nobody Is Watching':
     AssertionError: expected undefined to equal 'David Likes To Eat Cookies When Nobody Is Watching'
      at Context.it (test.js:14:20)

```

## Built With

* [Mocha](https://mochajs.org/) -Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases 

* [http://www.chaijs.com/](https://maven.apache.org/) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Authors

* **Andrew Ty Nguyen**(https://github.com/Andyt-Nguyen)


# PART 1A

1. What is printed by line 9? If the code returns an error, explain why. ^^^^^

values added:  20

2. What is printed by line 13? If the code returns an error, explain why. 

final result:  20

3. What is printed by line 9? If the code returns an error, explain why. 

values added:  20

4. What is printed by line 13? If the code returns an error, explain why. 

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1a-question1.js:13
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined
    at sumValues (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1a-question1.js:13:35)
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1a-question1.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

Explanation: The code returns an error because the let variable was declared within the if block scope,
therefore the result variable is not accessible / undefined outside the if block scope.

5. What is printed by line 9? If the code returns an error, explain why. 

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:7
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
    at sumValues (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:7:16)
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

The code return an error because the variable result is a const variable and prevents itself from being 
reassigned after it is assigned for the first time.

6. What is printed by line 13? If the code returns an error, explain why. 

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:7
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
    at sumValues (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:7:16)
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/test.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

The code returns an error because the const keyword has the same scope as the let keyword, making it
unaccessible outside the code block where it was defined (if block).

# PART 1B

1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will print out how many discounted prices were given, which is 3.

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will print out the last discounted price from the given price array, which is 150.

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

It will print out the final price of the last price fromt the given array, which is 150.

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^

The function returns an array of prices after it has been discounted.

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1b.js:12
    console.log(i);
                ^

ReferenceError: i is not defined
    at discountedPrices (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1b.js:12:17)
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/part1b.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

It will return an error because the variable i was thefined by let keyword which made it only accessible 
within the code block (the for loop) and not outside the for loop.

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/tempCodeRunnerFile.js:1
console.log(discountedPrice);
            ^

ReferenceError: discountedPrice is not defined
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/tempCodeRunnerFile.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

Similary like before, the discountedPrice variable is only defined within the for loop because it 
was defined using the let keyword, which made the variable inaccessible outside the for loop or undefined.

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
 
 It will still print the last discounted price which is 150 from the given price array since the let discountedPrice was defined within the same block scope.

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

 The function will still return an array of prices after it has been discounted which is [ 50, 100, 150 ].

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^

/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/tempCodeRunnerFile.js:1
console.log(i);
            ^

ReferenceError: i is not defined
    at Object.<anonymous> (/Users/jcpriyanto/Desktop/Lab 4/sp21-cse110-lab4/part1/tempCodeRunnerFile.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

It will return an error because the variable i was thefined by let keyword which made it only accessible 
within the code block (the for loop) and not outside the for loop.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will return the length of the given price array, which is 3.

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

d:\Desktop\Lab\lab4\sp21-cse110-lab4\part1\Test files\tempCodeRunnerFile.js:1
console.log(discounted);
            ^

ReferenceError: discounted is not defined
    at Object.<anonymous> (d:\Desktop\Lab\lab4\sp21-cse110-lab4\part1\Test files\tempCodeRunnerFile.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:973:32)
    at Function.Module._load (node:internal/modules/cjs/loader:813:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47

Explanation: The code causes an error because the discounted array was a const variable declared outside the for loop, making the array inaccessible outside the block scope.

12. 
a) student.name
b) student["Grad Year"]
c) student.greeting()
d) student["Favorite Teacher"].name
e) student.courseLoad[0]

13. 
a) '32' - since integer maps to their exact string representation
b) 1 - Mathematical operations convert values to numbers.
c) 3 - null maps to 0 
d) '3null' - '3' is a string and null converts into "null"
e) 4 - Mathematical operations convert values to numbers. true maps to 1
f) 0 - both converted into 0 since its a math operation
g) '3undefined'- '3' is a string a undefined converts into "undefined"
h) NaN - since subtract is a math operation, both values are converted. '3' becomes the number 3 and undefined
converts to NaN

14. 
a) true - '2' becomes the number 2
b) false - the string comparison algorithm indicates that '2' is greater than '12'
c) true - '2' becomes the number 2, and they are both equal
d) false - === shows the equality without type conversion. 2 and '2' are not the same data type
e) false - true maps to value 1 
f) true - Boolean(2) becomes true.

15. Explain the difference between the == and === operators.

== compares two values with type conversion if needed. === compares the equality of both values without type conversion (strictly comparing whether both are the same type and the same value)

16. (code)

17. 
The result of this is the array [ 2, 4, 6 ]. First, the function modifyArray takes in the array [1, 2, 3] as the parameter and taking doSomething function as the second paramater. modifyArray function wiill take each element from the array from the given paramater and then it will be multiplied by 2 by calling the doSomething function through the callback parameter.

18. (code)

19. 

1
4
3
2








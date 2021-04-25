1. The bug was that the value of the input was recognized as a string value. So both num1 and num2 were strings and when
passed to calculateSum, the + operator apends num1 and num2 together. For example when num1 = "1" and num2 = "2" 
the result would be 12 instead of 3

2. I would fix the bug by, since we know that the input was recognized as strings, I made two variables a and b and convert num1
and num2 into integers by using parseInt JS function. So instead of num1 + num2 I would put a + b as the newly integer variables
to make the function run correctly.

3. citylots.json

4. part2.js

5. 11.7 MB

6. 5.83 s

7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46

8. Apache

9. Tue, 26 Jan 2021 22:14:13 GMT

10. application/json

11. fetchData()


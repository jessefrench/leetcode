// 412. Fizz Buzz

// DESCRIPTION:
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5
// answer[i] == "Fizz" if i is divisible by 3
// answer[i] == "Buzz" if i is divisible by 5
// answer[i] == i (as a string) if none of the above conditions are true

// EXAMPLES:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// CONSTRAINTS:
// 1 <= n <= 10^4

// SOLUTION:
const fizzBuzz = function(n){
    let answer = []
    for (let i = 1; i <= n; i++){
        if (i % 15 === 0)
            answer.push('FizzBuzz')
        else if (i % 3 === 0)
           answer.push('Fizz')
        else if (i % 5 === 0)
            answer.push('Buzz')
        else
            answer.push(`${i}`)
    }
    return answer
}
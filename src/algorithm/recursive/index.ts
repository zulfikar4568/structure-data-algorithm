// Factorial 5!
function findFactorialRecursive(number: number): number {
  const newNumber = number - 1;
  if (number > 1) {
    return number * findFactorialRecursive(newNumber);
  } else {
    return 1;
  }
}

console.log(findFactorialRecursive(5));

// Fibonacci
// 0 1 1 2 3 5 8 13 21 34

//O(2^n) Bad!
function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n;
  }
  debugger
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
// O(n)
function fibonacciIterative(n: number): number {
  let arr =  [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(10))
console.log(fibonacciRecursive(10))
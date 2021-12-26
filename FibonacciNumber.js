function fibonacci(n) {
  if (n === 0) return 0;
  var fibonacciNumberArray = [1, 1];
  if (n > fibonacciNumberArray.length) {
    fibonacciNumberArray[n - 1] = fibonacci(n - 2) + fibonacci(n - 1);
  }
  return fibonacciNumberArray[n - 1];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

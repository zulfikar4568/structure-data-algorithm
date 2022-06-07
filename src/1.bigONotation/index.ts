// https://www.bigocheatsheet.com/

// Time Complexity

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input: number[]) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); //O(n) 
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

function anotherFunction() {
  throw new Error("Function not implemented.");
}

funChallenge([1,2,3,4,5]) // O(3 + 3n) = // O(n)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input: number[]) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input.length; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)

  }
  for (let j = 0; j < input.length; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

anotherFunChallenge([2,3,1,3,4]) //O(4 + 5n) = O(n)


//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}
logAllPairsOfArray(boxes) // O(n*n) = O(n^2)

function nFacRuntimeFunc(n: number): number {
  if (n===0) return 1;
  return n * nFacRuntimeFunc(n-1);
}

console.log(nFacRuntimeFunc(4)) // O(n!) = n * (n-1) * (n-2) * (n-3) ....


// Space Complexity (Depend on Memory)
function halooo (n: number) {
  for(let i = 0;i < n; i++) {
    console.log('hallooo')
  }
}

halooo(5) // O(1)

function hiArray(n: number) {
  let array = [];
  for(let i = 0;i < n;i++) {
    array[i] = 'Hi!'
  }
  return array;
} 

hiArray(5) // O(n)
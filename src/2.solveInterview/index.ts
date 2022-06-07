import { MySet } from "../random/set"

// Soal 1  Jika ada nilai yang sama atau match maka akan true, array diatas akan menghasilkan true karena di kedua array terdapat 'a'
let array1: string[] = ['a', 'b', 'c', 'd']
let array2: string[] = ['x', 'y', 'z', 'a']

// 1 BRUTE FORCE / NAIVE O(n^2)
export function checkMatchItem(arr1: string[], arr2: string[]): boolean {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true
    }
  }
  return false
}

// 2 HASH MAP O(a+b)
export function checkMatchItemHashMap(arr1: string[], arr2: string[]): boolean {
  // Buat hash map, dan kasih nilai true
  let map: {[key: string]: boolean} = {}
  for(let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true 
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) return true
  }
  return false
}

// 3 Cara Modern Js
export function checkMatchItemModern(arr1: string[], arr2: string[]): boolean {
  return arr1.some(item => arr2.includes(item))
}

// Soal 2 Cari pasangan array yang jika di jumlah menjadi 8 dan akan mengembalikan true jika ada dan false sebaliknya
let sum = 8
let pairArray: number[] = [1, 2, 3, 4, 9]

//1 Cara Brute Force/ Naive
export function sumPairArrayHas(arr1: number[], sum: number): boolean {
  for(let i = 0; i < arr1.length - 1; i++) {
    for(let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] === sum) return true
    }
  }
  return false
}

//2 Better
export function sumPairArrayHas2(arr1: number[], sum: number): boolean {
  const set = new MySet()
  for(let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
      return true
    }
    set.add(sum - arr1[i]) //Komplemen
  }
  return false
}
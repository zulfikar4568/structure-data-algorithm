export function learnArray() {
  let array: string[] = ['a', 'b', 'c', 'd']
  array[1] //O(1)

  array.push('e') //O(1)
  
  array.pop() //O(1)
  
  array.unshift() //O(n)

  array.splice(2, 0, 'bc') //O(n)

  console.log(array)
}

export function staticDynamicArray() {
  // Javascript otomatis menggunakan dynamic array, jika kita menggunakan low level language seperti C++ maka akan terdapat memori management
}

export class ZulArray {
  public length: number;
  public data: any[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  public get(index: number) {
    return this.data[index];
  }

  public push(item: any) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  public pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  public delete(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;    
  }

  public shiftItems(index: number) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

export function myReverseString(str: string) {
  let element: string[] = [];
  let newString: string = "";
  for (let index = 0; index < str.length; index++) {
    element.push(str[index]);
  }
  for (let index = element.length - 1; index >= 0; index--) {
    newString += element[index];
  }
  return newString;
}

export function reverseString(str: string) {
  let element: string[] = [];
  for (let index = str.length - 1; index >= 0; index--) {
    element.push(str[index]);
  }
  return element.join('');
}

export function reverseString2(str: string) {
  return str.split('').reverse().join('');
}

export const reverseString3 = (str: string) => [...str].reverse().join('')

export function mergeSortedArray(data1: number[], data2: number[]) {
  let newData: number[] = [...data1, ...data2]
  return newData.sort((a,b) => a - b)
}
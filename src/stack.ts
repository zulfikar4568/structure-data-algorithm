/* stack 
function: push, pop, peek, length
FILO
*/

export const palindrome = (word: string) => {
  let letters = [];
  // palidrom, jika di reverse maka akan tetap racecar
  let reverseWord = "";
  
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  
  for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }
  
  if (reverseWord === word) {
    return word + " is a palidrome";
  } else {
    return word + " is not a palindrome";
  }
}

export class Stack {
  private count: number = 0;
  private storage: any = [];
  
  // Menambah nilai ke stack 
  public push = (value: any) => {
    this.storage[this.count] = value;
    this.count++;
  }

  // Menghapus dan mengembalikan nilai di akhir stack
  public pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  public size = () => {
    return this.count;
  }

  //Mengembalikan nilai di akhir stack
  public peek = () => {
    return this.storage[this.count - 1];
  }
}
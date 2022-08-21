export class HashTable {
  public data: Array<any>;
  constructor(size: number) {
    this.data = new Array(size);
  }

  private _hash(key: string): number {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  public set(key: string, value: any): any {
    let address: number = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data;
  }

  public get(key: string): any {
    let address: number = this._hash(key);
    const founded = this.data[address];
    if(founded) {
      for (let i = 0; i < founded.length; i++) {
        if(founded[i][0] === key) {
          return founded[i][1]
        }
      }
    }
    return undefined
  }

  public keys() {
    if (!this.data.length) return undefined;
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i] && this.data[i].length) {
        if(this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }
}


export function firstRequrring(data: number[]) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i+1; j < data.length; j++) {
      if(data[i] === data[j]) {
        return data[i]
      }
    }    
  }
  // O(n^2)
}

export function firstRequrring2(data: number[]) {
  let map: any = {};
  for (let i = 0; i < data.length; i++) {
    // console.log(map[data[i]])
    if (map[data[i]]) {
      return data[i]
    } else {
      map[data[i]] = i
    }
    // console.log(map)
  }
  return undefined;
  //O(n)
}

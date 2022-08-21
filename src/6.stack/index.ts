interface INode {
  value: any;
  next: INode | null
}
export class Node implements INode {
  public value;
  public next: INode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedStack {
  public top: INode | null;
  public bottom: INode | null;
  public length;
  constructor() {
    this.bottom = null;
    this.length = 0;
    this.top = null;
  }

  public peek() {
    return this.top;
  }
  public push(value: any) {
    const newNode: INode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  public pop() {
    if (this.top === null) return null;
    if (this.bottom === this.top) this.bottom = null;
    if (this.top !== null) {
      this.top = this.top.next;
      this.length--;
    }
    return this;
  }
}

export class ArrayStack {
  public length: number;
  public bucket: any[];
  constructor() {
    this.length = 0;
    this.bucket = []
  }

  public push (value: any) {
    this.bucket.push(value)
    this.length++;
    return this;
  }
  public pop () {
    this.bucket.pop();
    this.length--;
    return this;
  }
  public peek () {
    return this.bucket[this.length - 1]
  }
}
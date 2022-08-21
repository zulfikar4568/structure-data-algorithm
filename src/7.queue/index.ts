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

export class LinkedQueue {
  public first: INode | null;
  public last: INode | null;
  public length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  public peek() {
    return this.first;
  }
  public enqueue(value: any) {
    const newNode: INode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last){
        this.last.next = newNode;
        this.last = newNode;
      }
    }
    this.length++;
    return this;
  }
  public dequeue() {
    if (!this.first) {
       return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}
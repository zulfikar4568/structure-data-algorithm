/*
Qeueu: FIFO
*/

export class Queue {
  private collection = new Array;

  public print = () => {
    console.log(this.collection);
  }
  public enqueue = (element: any) => {
    this.collection.push(element);
  }
  public dequeue = () => {
    return this.collection.shift();
  }
  public front = () => {
    return this.collection[0];
  }
  public size = () => {
    return this.collection.length;
  }
  public isEmpty = () => {
    return this.collection.length === 0;
  }
}

export class PriorityQueue {
  private collection = new Array;

  public print = () => {
    console.log(this.collection);
  }
  public enqueue = (element: [string, number]) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element); // Di posisi i add element, hapus element sebanyak 0
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element)
      }
    }
  }
  public dequeue = () => {
    return this.collection.shift();
  }
  public front = () => {
    return this.collection[0];
  }
  public size = () => {
    return this.collection.length;
  }
  public isEmpty = () => {
    return this.collection.length === 0;
  }
}
// Singly LinkedList

interface INodeSingly {
  value: any;
  next: INodeSingly | null
}
class NodeSingly implements INodeSingly {
  public value: any;
  public next: INodeSingly | null;
  constructor(value: any) {
    this.value = value,
    this.next = null
  }
}

export class SinglyLinkedList {
  public head: INodeSingly;
  public tail: INodeSingly;
  public length: number;
  constructor(value: any) {
    this.head = new NodeSingly(value)
    this.tail = this.head
    this.length = 1;
  }

  public append(value: any) {
    const newNode: INodeSingly = new NodeSingly(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  public prepend(value: any) {
    const newNode: INodeSingly = new NodeSingly(value);
    newNode.next = this.head;
    this.head = newNode
    this.length += 1;
    return this;
  }

  public insert(index: number, value: any) {
    if (index < 0) return this;
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode: INodeSingly = new NodeSingly(value);

    let leader = this.traverseToIndex(index - 1);
    let holdingNextPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingNextPointer;
    this.length++;
    return this;
  }

  public remove(index: number) {
    if (index < 0) return this;
    if (index > 0) {
      let newIndex = index;
      if (index >= this.length) newIndex = this.length - 1
      let leader = this.traverseToIndex(newIndex - 1);
      let unWantedNode = leader.next;
      if (unWantedNode !== null) {
        leader.next = unWantedNode.next
      }
      if (index >= this.length) this.tail = leader
    } else {
      let firstNode = this.traverseToIndex(index)
      if (firstNode.next !== null) {
        firstNode = firstNode.next
      }
      this.head = firstNode
    }
    this.length--;
    return this
  }

  public reverse() {
    if (!this.head.next) {
      return this.head
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  public exists(value: any): boolean {
    let current: INodeSingly | null = this.head;
    while(current !== null) {
      if (current.value == value) {
        return true
      }
      current = current?.next
    }
    return false
  }

  private traverseToIndex(index: number) {
    let counter = 0;
    let currentNode: INodeSingly | null = this.head;
    while(counter !== index) {
      if (currentNode?.next !== null) {
        currentNode = currentNode.next
        counter++
      }
    }
    return currentNode;
  }
}

//Doubly Linked List
interface INodeDoubly {
  value: any;
  next: INodeDoubly | null;
  prev: INodeDoubly | null;
}
class NodeDoubly implements INodeDoubly {
  public value: any;
  public next: INodeDoubly | null;
  public prev: INodeDoubly | null;
  constructor(value: any) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

export class DoublyLinkedList {
  public head: INodeDoubly;
  public tail: INodeDoubly;
  public length: number;
  constructor(value: any) {
    this.head = new NodeDoubly(value)
    this.tail = this.head
    this.length = 1;
  }

  public append(value: any) {
    const newNode: INodeDoubly = new NodeDoubly(value)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  public prepend(value: any) {
    const newNode: INodeDoubly = new NodeDoubly(value);
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode
    this.length += 1;
    return this;
  }

  public insert(index: number, value: any) {
    if (index < 0) return this;
    if (index === 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode: INodeDoubly = new NodeDoubly(value);

    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    if (follower !== null) follower.prev = newNode
    this.length++;
    return this;
  }

  public remove(index: number) {
    if (index < 0) return this;
    if (index > 0) {
      let newIndex = index;
      if (index >= this.length) newIndex = this.length - 1
      let leader = this.traverseToIndex(newIndex - 1);
      let unWantedNode = leader.next;
      if (unWantedNode !== null) {
        leader.next = unWantedNode.next
      }
      let follower = leader.next;
      if (follower !== null) follower.prev = leader;
      if (index >= this.length) this.tail = leader
    } else {
      let firstNode = this.traverseToIndex(index)
      if (firstNode.next !== null) {
        firstNode = firstNode.next
      }
      this.head = firstNode
      this.head.prev = null;
    }
    this.length--;
    return this
  }

  public reverse() {
    if (!this.head.next) {
      return this.head
    }
    let temp = null;
    let current: INodeDoubly | null = this.head;
    this.tail = this.head;

    while (current !== null) 
    {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      this.head = current;
      current = current.prev;
    }
    return this
  }

  public exists(value: any): boolean {
    let current: INodeDoubly | null = this.head;
    while(current !== null) {
      if (current.value == value) {
        return true
      }
      current = current?.next
    }
    return false
  }

  private traverseToIndex(index: number) {
    let counter = 0;
    let currentNode: INodeDoubly | null = this.head;
    while(counter !== index) {
      if (currentNode?.next !== null) {
        currentNode = currentNode.next
        counter++
      }
    }
    return currentNode;
  }
}
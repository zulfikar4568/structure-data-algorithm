import { BST } from "./binary-search-tree";
import { PriorityQueue, Queue } from "./queue";
import { MySet } from "./set";
import { palindrome, Stack } from "./stack";

//Stack
console.log(palindrome('racecar'))
let myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log('Peek : ' + myStack.peek());
console.log('Pop  : ' + myStack.pop());
console.log('Peek : ' + myStack.peek());
console.log('Size : ' + myStack.size());


//Set
let setA = new MySet();
let setB = new MySet();
setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");
setA.add("e");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.has("a"))
console.log("subset: " + setA.subset(setB));
console.log("difference: " + setA.difference(setB).values())
console.log("intersection: " + setA.intersection(setB).values())


//Queue
let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.print();
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.size());
myQueue.isEmpty();
myQueue.print();

let antrianKasir = new PriorityQueue();
antrianKasir.enqueue(["Orang 1", 3]);
antrianKasir.enqueue(["Orang 2", 3]);
antrianKasir.enqueue(["Orang 3", 3]);
antrianKasir.enqueue(["Mentri 1", 2]);
antrianKasir.enqueue(["Presiden 1", 1]);
antrianKasir.print()


//BST
const bst = new BST();

bst.add(9);
bst.add(1);
bst.add(4);
bst.add(3);
bst.add(17);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.find(9))
bst.remove(4)
console.log(bst.find(9))
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log('in Order: ' + bst.inOrder())
console.log('pre Order: ' + bst.preOrder())
console.log('post Order: ' + bst.postOrder())
console.log('level Order: ' + bst.levelOrder())
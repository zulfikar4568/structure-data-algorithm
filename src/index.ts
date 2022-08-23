import { checkMatchItem, checkMatchItemHashMap, checkMatchItemModern, sumPairArrayHas, sumPairArrayHas2 } from "./2.solveInterview";
import { learnArray, mergeSortedArray, myReverseString, reverseString, reverseString2, reverseString3 } from "./3.array";
import { bubbleSort } from "./3.array/bubble-sort";
import { selectionSort } from "./3.array/selection-sort";
import { firstRequrring, firstRequrring2, HashTable } from "./4.hash-table";
import { DoublyLinkedList, SinglyLinkedList } from "./5.linked-list";
import { ArrayStack, LinkedStack } from "./6.stack";
import { LinkedQueue } from "./7.queue";
import { BinarySearchTree } from "./8.trees";
import { BST } from "./8.trees/binary-search-tree";
import { PriorityQueue, Queue } from "./random/queue";
import { MySet } from "./random/set";
import { palindrome, Stack } from "./random/stack";

//********************************************Stack*********************************************/
console.log(palindrome('racecar'))
let myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('e');
console.log('Peek : ' + myStack.peek());
console.log('Pop  : ' + myStack.pop());
console.log('Peek : ' + myStack.peek());
console.log('Size : ' + myStack.size());


//********************************************Set*********************************************/
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


//********************************************Queue*********************************************/
let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("d");
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


//********************************************BST*********************************************/
const bst = new BST();

bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);
bst.add(4);
bst.add(7);
bst.add(13);
bst.add(20);

console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.find(9))
bst.remove(20)
console.log(bst.find(9))
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log('in Order: ' + bst.inOrder())
console.log('pre Order: ' + bst.preOrder())
console.log('post Order: ' + bst.postOrder())
console.log('level Order: ' + bst.levelOrder())


let array1: string[] = ['a', 'b', 'c', 'd']
let array2: string[] = ['x', 'y', 'z', 'a']

console.log(checkMatchItem(array1, array2))
console.log(checkMatchItemHashMap(array1, array2))
console.log(checkMatchItemModern(array1, array2))

let sum = 8
let pairArray: number[] = [1, 2, 3, 4, 6]
console.log(sumPairArrayHas(pairArray, sum))
console.log(sumPairArrayHas2(pairArray, sum))


//********************************************ARRAY*********************************************/
learnArray();
console.log(myReverseString("zul"));
console.log(reverseString("zul"));
console.log(reverseString2("zul"));
console.log(reverseString3("zul"));
console.log(mergeSortedArray([0,3,4,31], [4,6,30]))
console.log(selectionSort([98,23,54,12,3]))
console.log(bubbleSort([98,23,54,12,3]))

//********************************************HASH TABLE*********************************************/
const ht = new HashTable(1);
ht.set("zul", 24)
ht.set("rico", 44)
console.log(ht)
console.log(ht.get("rico"))
console.log(ht.keys())

//Implementation
console.log(firstRequrring([1,2,3,3]))
console.log(firstRequrring2([1,5,4,3,9,3,2]))

//********************************************Linked List*********************************************/

console.log('//********************************************Linked List Doubly*********************************************/')
const myLinkedList = new DoublyLinkedList(4);
myLinkedList.append(6)
myLinkedList.append(3)
myLinkedList.append(7)
myLinkedList.append(9)
myLinkedList.prepend(34)
myLinkedList.insert(1, "saya")
myLinkedList.insert(100, "terakhir")
// myLinkedList.reverse()
console.dir(myLinkedList, { depth: null })
console.log(myLinkedList.exists(6))

console.log('//********************************************Linked List Singly*********************************************/')
const myLinkedList2 = new SinglyLinkedList(19);
myLinkedList2.append(12)
myLinkedList2.prepend(34)
myLinkedList2.insert(1, "saya")
console.dir(myLinkedList2, { depth: null })
myLinkedList2.reverse()
console.dir(myLinkedList2, { depth: null })


//********************************************Stack*********************************************/

console.log('//********************************************Stack*********************************************/')

const myLinkedStack = new LinkedStack();
myLinkedStack.push('noval')
myLinkedStack.push('isnen')
myLinkedStack.push('arif')
console.dir(myLinkedStack, { depth: null })
myLinkedStack.pop()
myLinkedStack.pop()
myLinkedStack.pop()
console.dir(myLinkedStack, { depth: null })

const myArrayStack = new ArrayStack();
myArrayStack.push('noval')
myArrayStack.push('isnen')
myArrayStack.push('arif')
console.dir(myArrayStack, { depth: null })
myArrayStack.pop()
myArrayStack.pop()
myArrayStack.pop()
console.dir(myArrayStack, { depth: null })


//********************************************Queue*********************************************/

console.log('//********************************************Queue*********************************************/')
const myLinkedQueue = new LinkedQueue();
myLinkedQueue.enqueue('noval')
myLinkedQueue.enqueue('isnen')
myLinkedQueue.enqueue('arif')
console.dir(myLinkedQueue, { depth: null })
myLinkedQueue.dequeue();
myLinkedQueue.dequeue();
console.dir(myLinkedQueue, { depth: null })

//********************************************BST*********************************************/

console.log('//********************************************BST*********************************************/')
const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(30);
console.dir(myBinarySearchTree, { depth: null })
myBinarySearchTree.remove(30);
myBinarySearchTree.insert(4);
console.dir(myBinarySearchTree, { depth: null })
console.dir(myBinarySearchTree.lookup(50), { depth: null })
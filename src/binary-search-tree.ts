export class Node {
  public data: number;
  public left: Node | null;
  public right: Node | null;
  constructor(data: number, left: Node | null = null, right: Node | null = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BST {
  private root: any;

  constructor() {
    this.root = null;
  }

  public add(data: number) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree: any = function (node: Node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }

  public find(data: number): Node | null {
    let current: Node | null = this.root;
    if (current === null) return null;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  public findMin(): number {
    let current: Node = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  public findMax(): number {
    let current: Node = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  public isPresent(data: number): boolean {
    let current: Node | null = this.root;
    if (current === null) return false;
    while (current) {
      if (current.data === data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  public remove(data: number) {
    const removeNode = function (node: Node | null, data: number): Node | null {
      if (node === null) return null;
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) return null;
        // node has no left child
        if (node.left === null) return node.right;
        // node has no right child
        if (node.right === null) return node.left;
        // node has both children
        let tempNode: Node | null = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
      return node;
    }
    this.root = removeNode(this.root, data);
  }
}
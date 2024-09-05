class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString() {
    console.log(`${this.value}`);
   }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)

    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    this.tail = newNode;

    return this
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head

    while(currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next;
    }

    return nodes
  }

  toString() {
    return this.toArray().map(node => node.toString()).toString()
  }

  prepend(value) {
    const newNode = new Node(value, this.head)

    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    }

    return this
  }

  find(value) {
    
    if(!this.head) {
      return null
    }

    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next;
    }

    return null
  }


  delete(value) {
    if(!this.head) {
      return null
    }

    let deletedNode = null;

    while(this.head && this.head.value === value) {
      deletedNode = this.head

      this.head = this.head.next
    }

    let currentNode = this.head

    if(currentNode !== null) {
      while(currentNode.next) {
        if(currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if(this.tail?.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }


  insertAfter(value, prevNode) {
    if(prevNode === null) {
      return this
    }

    const newNode = new Node(value)

    newNode.next = prevNode.next
    prevNode.next = newNode

    if(newNode.next === null) {
      this.tail = newNode
    }

    return this;
  }
}


const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
// console.log(JSON.stringify(list));
// console.log(list.toArray());
// console.log(list.toString());

list.prepend(0)
list.prepend(9)

// console.log(list.toString());
// console.log(list.find(1));
console.log(list.delete(9));
console.log(list.insertAfter(2, list.find(5)));




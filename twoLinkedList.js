class Node {
  constructor(value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.prev = prev
  }

  toString() {
    console.log(`${this.value}`);
   }
}

class TwoLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    if (!this.head) return null;
  
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
  
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
  
        this.length--;
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insertAfter(value, prevNode) {
    if(prevNode === null) {
      return this
    }

    const newNode = new Node(value)

    newNode.next = prevNode.next
    newNode.prev = prevNode.prev
    prevNode.next = newNode

    if(newNode.next === null) {
      this.tail = newNode
    }

    return this;
  }
}


const list = new TwoLinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
// console.log(list.delete(5));
console.log(list.insertAfter(10, list.find(4)));
console.log(list.toArray());

// console.log(JSON.stringify(list));
// console.log(list.toArray());
// console.log(list.toString());

// list.prepend(0)
// list.prepend(9)

// console.log(list.toString());
// console.log(list.find(1));
// console.log(list.delete(9));
// console.log(list.insertAfter(2, list.find(5)));




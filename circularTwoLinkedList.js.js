class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    return `${this.value}`;
  }
}

class CircularTwoLinkedList {
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
      newNode.next = this.head; 
      this.head.prev = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    }
    this.length++;
  }

  toArray() {
    const nodes = [];
    if (!this.head) return nodes;

    let currentNode = this.head;
    do {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return nodes;
  }

  toString() {
    return this.toArray().map(node => node.toString()).toString();
  }

  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;
    do {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return null;
  }

  delete(value) {
    if (!this.head) return null;

    let current = this.head;
    do {
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

        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = current.prev;
        }

        this.length--;
        return current;
      }
      current = current.next;
    } while (current !== this.head);

    return null;
  }

  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this;
    }

    const newNode = new Node(value);

    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;

    if (prevNode === this.tail) {
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new CircularTwoLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.insertAfter(10, list.find(4)));
console.log(list.toArray().map(node => node.value));
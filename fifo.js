class Queue {
  constructor() {
    this.items = []
  }

  add (item) {
    this.items.push(item)
  }

  remove () {
    if(this.isEmpty()) {
      return 'array is Empty'
    }
    return this.items.shift()
  }

  getFirst () {
    if(this.isEmpty()) {
      return 'array is Empty'
    }
    return this.items[0];
  }

  arraySearch () {
    this.items.forEach((element, i) => {
      console.log('element: ', element, 'index:', i);
    });
  }

  isEmpty () {
    return this.items.length === 0
  }
}

const instQueue = new Queue;
instQueue.add(1);
instQueue.add(2);
instQueue.add(3);
instQueue.arraySearch()
console.log(instQueue.getFirst(1));
class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    const existing = bucket.find(item => item[0] === key);
    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return undefined;
    const item = bucket.find(item => item[0] === key);
    return item ? item[1] : undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return false;
    const itemIndex = bucket.findIndex(item => item[0] === key);
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
      return true;
    }
    return false;
  }
}


const dict = new HashTable();

dict.set('ab', '1');
dict.set('ba', '2');
console.log(dict.get('ab', '1'), dict.get('ba', '2'));
dict.remove('ba');
console.log(dict.get('ba'));
console.log(dict);

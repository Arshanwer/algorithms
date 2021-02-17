class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  
  insertAtHead(data) {
      const newNode = new ListNode(data);
      // newNode.next = this.head;
      // newNode.prev = this.head;
      this.head = newNode;
      this.length++;
  }

  unshift(data) {
    const newNode = new ListNode(data);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = null;
      this.head = newNode;
    }
    this.length++;
  }

  enqueue(data) {
    const newNode = new ListNode(data);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } 
    this.length++;
  }

  dequeue() {
    let current = this.head;
    if(current) {
      this.head = current.next;
    }
    this.length--;
  }

  pop() {
    if(!this.head) return null;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }

  getByIndex(index) {
   if (index < 0 || index >= this.length) return null;
   let current = this.head;
    for(let i = 0; i < index; i++) {
      current = current.next;
   }
   return current; 
  }

  insertAtIndex(data, index) {
    if (index === 0) return this.insertAtHead(data);

    const prev = this.getByIndex(index - 1);
   if(prev == null) return null;

   prev.next = new ListNode(data, prev.next);
   this.length ++;

    return prev;
  }

  getHead() {
    return this.head;
  }

  print() {
    let output = '';
    let current = this.head;
    while(current) {
      output = `${output}${current.value}-->`;
      console.log(current)
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

module.exports = LinkedList;
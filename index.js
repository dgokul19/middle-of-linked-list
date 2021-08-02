// Find the middle of the linked list

class Node {
  constructor(data, next) {
    this.head = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addElement(element) {
    this.head = new Node(element, this.head);
    this.size++;
  }

  getMiddle() {
    let current = this.head;
    let index = Math.ceil(this.size / 2);
    let count = 1;

    while (current) {
      if (index === count) {
        return current.head;
      }
      current = current.next;
      count++;
    }
  }

  printList() {
    console.log(this);
  }
}

let list = new LinkedList();

list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);
list.addElement(6);

console.log(list.getMiddle());

class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value){
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    //To check the list
    return this;
  }
  
  prepend(value){
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head.next;
    this.head = newNode;
    this.length++;    
    return this;
  }
  
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter < index){
      currentNode = currentNode.next;
      counter++;
    }
    
    return currentNode;
  }
  
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
    };
    
    const leader = this.traverseToIndex(index-1);
    newNode.next = leader.next;
    leader.next = newNode;
    
    //To check
    return this.printList();
  }
  
  remove(index){
    if(index > this.length){
      return;
    }
    const leader = this.traverseToIndex(index-1);
    if(leader.next === this.tail){
     this.tail = leader; 
     leader.next = null;
     return;
    }
    if(leader === this.head){
      this.head = this.head.next;
      return;
    }
    
    leader.next =leader.next.next
    this.length--;
     //To check
    return this.printList();    
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);

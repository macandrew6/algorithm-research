/*
Write a function detectAndRemoveLoop() that checks whether a given Linked List 
contains loop and if loop is present then removes the loop and returns true. If 
the list doesn’t contain loop then it returns false. Below diagram shows a 
linked list with a loop. detectAndRemoveLoop() must change the below list to 
1->2->3->4->5->NULL.
*/

function detectAndRemoveLoop() {

}

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.printList();
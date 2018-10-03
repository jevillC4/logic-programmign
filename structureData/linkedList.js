function LinkedList() {

  this.head = null;

}

LinkedList.prototype.isEmpty = function () {
  return this.head == null;
};

LinkedList.prototype.size = function () {
  var current = this.head;
  var count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;  
}

LinkedList.prototype.prepend = function (val) {
  
  var newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode;
}

LinkedList.prototype.append = function (val) {
  
  var newNode = {
    data: val,
    next: null
  }

  if (this.isEmpty()) {
    this.head = newNode;
    return;    
  }

  var current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while (current !== null) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.remove = function (val) {
  if (!this.contains(val)) {
    return;
  }
  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var curr = this.head;
  while (curr.data !== val  ) {
    prev = curr,
    curr = curr.next
  }

  prev.next = curr.next;

}

LinkedList.prototype.print = function () {
  var output = '[';
  var current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ',';
    }
    current = current.next;
  }
  output += ']';
  console.log(output);  
}

var list =  new LinkedList();
list.append(10);
list.append(20);
list.append(25);
list.append(30);
list.prepend(3);
list.print();
console.log(list.contains(3));
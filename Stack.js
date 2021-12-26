function Node(data_val) {
  var data = data_val;
  var next = null;
  return {
    data,
    next,
  };
}

function Stack() {
  var head = null;
  var tail = null;
  var length = 0;
  return {
    push(data) {
      var newNode = new Node(data);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head = newNode;
      }
      length += 1;
    },
    pop() {
      if (!head) return;
      var removeNode = head;
      if (head === tail) {
        tail = null;
      }
      head = head.next;
      length -= 1;
      return removeNode.data;
    },
    size() {
      return length;
    },
  };
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.size();

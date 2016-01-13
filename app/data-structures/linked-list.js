export class LinkedList {
  constructor() {
    this._head = null;
  }

  get head() {
    return this._head;
  }

  set head(value) {
    this._head = value;
  }

  push = (value) => {
    let node = {
      value: value,
      next: null,
      previous: null
    }

    if (!this._head) {
      this._head = null;
    } else {
      var current = this._head;
      while (current) {
        current = current.next;
      }
      current.next = node;
    }
  }

  remove = (value) => {

  }

  exports.LinkedList = LinkedList;
}
}

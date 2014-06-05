var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance._storage = {};
  someInstance._size = 0;
  someInstance._first = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function (value) {
  this._storage[this._first + this._size] = value;
  this._size += 1;
};

queueMethods.dequeue = function () {
  var temp;

  if (this._size > 0) {
    this._size -= 1;
  }

  temp = this._storage[this._first];
  delete this._storage[this._first];
  this._first += 1;
  return temp;
};

queueMethods.size = function () {
  return this._size;
};




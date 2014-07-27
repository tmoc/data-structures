var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.storageSize = 0;

  return _.extend(someInstance, stackMethods);

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};
stackMethods.pop = function() {
  if (this.storageSize > 0) {
    this.storageSize--;
  }
  var temp = this.storage[this.storageSize];
  delete this.storage[this.storageSize];
  return temp;
};
stackMethods.size = function() {
  return this.storageSize;
};


// var newStack = );
// newStack // Object

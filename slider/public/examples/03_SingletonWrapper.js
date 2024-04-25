
debugger;

const SingletonWrapper = function () { };

SingletonWrapper.prototype = Object.create(window);

SingletonWrapper.prototype.constructor = SingletonWrapper;

const instance = new SingletonWrapper;

debugger;

console.log(instance);

debugger;

console.log(instance.location);

debugger;

console.log(instance.document);

debugger;
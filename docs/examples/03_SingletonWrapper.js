
debugger;

const SingletonWrapper = function () { };

SingletonWrapper.prototype = Object.create(document);

SingletonWrapper.prototype.constructor = SingletonWrapper;

const instance = new SingletonWrapper;

debugger;

console.log(instance);

debugger;

console.log(typeof document.querySelector);

debugger;
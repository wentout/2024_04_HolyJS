import { decorate, apply }from 'mnemonica';

debugger;

@decorate(undefined, {}, { strictChain : false })
class MyDecoratedClass {
	field: number;
	constructor () {
		this.field = 123;
	}
}

debugger;
@decorate(MyDecoratedClass)
class MyDecoratedSubClass {
	sub_field: number;
	constructor () {
		this.sub_field = 321;
	}
}

debugger;
export const myDecoratedInstance = new MyDecoratedClass;
export const myDecoratedSubInstance = apply(myDecoratedInstance, MyDecoratedSubClass);

debugger;
console.log(myDecoratedSubInstance.field);
console.log(myDecoratedSubInstance.sub_field);

debugger;
console.log(myDecoratedSubInstance);
debugger;

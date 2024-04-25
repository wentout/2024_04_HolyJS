import {  Strict } from 'typeomatica';

@Strict({ someProp: 123 })
class DecoratedByBase {
	someProp!: number;
}

class ExtendedDecoratedByBase extends DecoratedByBase {
	someProp: number;
	constructor() {
		super();
		this.someProp = 321;
	}
}

const instance = new ExtendedDecoratedByBase;

try {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	instance.someProp = 'string';
} catch (error) {
	debugger;
	console.log(error);
	debugger;
}
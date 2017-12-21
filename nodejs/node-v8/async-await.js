
'use strict';

function x1(x){
	return new Promise((res) => {
		setTimeout(() => res(x), 100);
	});
}
function x2(x){
	return new Promise((res) => {
		setTimeout(() => res(x*2), 100);
	});
}
function x3(x){
	return new Promise((res) => {
		setTimeout(() => res(x*3), 100);
	});
}

function calPromise(x) {
	return x1(x)
	.then(res => x2(res))
	.then(res => x3(res));
}

calPromise(2).then( res => console.log('promise : ',res));

async function asyncPromise(x){
	var r1 = await x1(x);
	var r2 = await x2(r1);
	var r3 = await x3(r2);
	return r3;
}

asyncPromise(2).then( res => console.log('async : ',res));
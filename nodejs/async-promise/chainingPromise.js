'use strict';

var callbackHellPromise = require('./callbackHellPromise');

var arr = Array(10).fill().map((v,i) => i );

function doTask(val){
	return new Promise((res, rej) =>{
		console.log('start : ', val);
		setTimeout(() => {
			if( val % 10  != 5 ){
				var msg = val + ' done.';
				console.log(msg);
				res(msg);
			}else{
				var msg = val + ' rejected.';
				console.log(msg);
				rej(msg);
			}
		}, 100);
	});
}

function createTask(No){
	No = No || 1;
	return Array(No).fill().map( (v , i) => i);
}


function processAll(No, fun){
	var promises =  createTask( No ).map( (v , i ) => fun(v) );
	return Promise.all( promises );
}


function processRace(No, fun){
	var promises =  createTask( No ).map( (v , i ) => fun(v) );
	return Promise.race( promises );
}

// processRace(7, doTask).then( response => console.log('Finish : ', response),
							// reject => console.log('Reject : ' ,reject));



function processArrayOkOnly(arr, fn) {
	return arr.reduce(
		(p, v) => p.then((a) => fn(v).then(res => a.concat([res]))),
		Promise.resolve([])
	);
}

function processArrayReduce(arr, fn) {
	return arr.reduce(
		(p, v) => p.then((a) => fn(v).then(res => a.concat([res]),
			rej => a.concat([rej]))),
		Promise.resolve([])
	);
}

processArrayReduce(createTask(6), doTask).then( res => console.log('Finished ok: ', res),
	rej => console.log('Finish failure: ', rej));


	
// processArrayOkOnly(arr, doTask).then( res => console.log('Done ', res) , rej => console.log('Done ', rej));


// function processArray(arr, fn){
// 	return arr.reduce(function(p, v){
// 		return p.then(function (a){
// 			return fn(v).then(function(res){
// 				return a.concat([res]);
// 			});
// 		});
// 	}, Promise.resolve([]));
// }

// processArrayLoop(arr, printValue).then(ok => console.log('Done : ', ok));
// processArrayReduce(arr, printValue).then(ok => console.log('Done : ', ok));

function processArrayLoop(arr, fn){
	var chain = Promise.resolve([]);
	for(var i = 0 ; i < arr.length ; i++){
		chain = chain.then( a => printValue(arr[i]).then(res => {
			return a.concat(res);
		}));
	}
}

function processArrayTemp( arr, fn , p ){
	if( arr.length ) {
		return p.then(a => {
			var ele = arr.splice(0,1)[0];
			return fn(ele).then(res => {
				result.concat([res]);
				return processArrayTemp(arr, fn, p, result);
			});
		});
	} else {
		return p.resolve(result);
	}
}


// function processArrayReduce(arr, fn){
// 	return arr.reduce(function(p, v){
// 		return p.then(function (a){
// 			return fn(v).then(function(res){
// 				return a.concat([res]);
// 			});
// 		});
// 	}, Promise.resolve([]));
// }

function getProm(v) {
	return new Promise(resolve => {
		console.log(v);
		setTimeout(resolve(v), 100);
	});
}

function Wait(r) {
	return new Promise(r => setTimeout(console.log('wait '), 1000))
}

function createChain() {
	let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	let chain = Promise.resolve();
	for (let i of a) {
		chain = chain
			.then(() => getProm(i))
			.then(Wait)
	}
	return chain;
}


// createChain().then(ok => console.log(ok));

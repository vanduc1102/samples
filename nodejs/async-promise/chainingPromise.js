var callbackHellPromise = require('./callbackHellPromise');

var arr = Array(20).fill().map((v,i) => i );

function printValue(val){
	return new Promise((res, rej) =>{
		setTimeout(() => {
			if( Date.now() % 10  != 9 ){
				console.log('ok : ' , val);
				res('ok');
			}else{
				console.log('reject : ' ,val);
				rej('not ok');
			}
		}, 100);
	});
}

function processArray(arr, fn) {
	return arr.reduce(
		(p, v) => p.then((a) => fn(v).then(res => a.concat([res]),rej => a.concat([rej]))),
		Promise.resolve([])
	);
}

function processArrayOkOnly(arr, fn) {
	return arr.reduce(
		(p, v) => p.then((a) => fn(v).then(res => a.concat([res]))),
		Promise.resolve([])
	);
}

processArray(arr, printValue).then( res => console.log('Done ', res) , rej => console.log('Done ', rej));


function processArray(arr, fn){
	return arr.reduce(function(p, v){
		return p.then(function (a){
			return fn(v).then(function(res){
				return a.concat([res]);
			});
		});
	}, Promise.resolve([]));
}
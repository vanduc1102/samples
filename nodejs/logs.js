'use strict';

function Main(){
	let arr = ['fatal','error','warn','debug','info'];
	let time = Date.now();
	console.log( arr[ time % 5 ] + ' at time ' + time);

}

setInterval(Main, 1000);


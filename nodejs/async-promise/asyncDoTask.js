function doTask( taskId ){
	setTimeout( () => {
		console.log('start do task : ' + taskId);
		console.log('finish task : ' + taskId);
	}, 100);
}
var taskId = 1;
doTask(taskId);
console.log('Hey task ' + taskId + ' is done, Let do something else');
function doTask( taskId , callback){
	console.log('start do task : ' + taskId);
	setTimeout( function() {
		console.log('finish task : ' + taskId);
		callback(taskId);
	}, 100);
}

var taskId = 1;
doTask(taskId, function(taskId) {
	console.log('Hey task ' + taskId + ' is done, Let do something else');
}) ;
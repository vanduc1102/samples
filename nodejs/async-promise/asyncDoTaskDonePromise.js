function doTask(taskId){
	console.log('start do task : ' + taskId);
	return new Promise(function(resolve, reject){
		setTimeout( function() {
			console.log('finish task : ' + taskId);
			resolve(taskId);
		}, 100);
	});
}

var taskId = 1;
doTask(taskId).then(function(response){
	console.log('Hey task ' + taskId + ' is done, Let do something else');
},function (reason){
	console.log('I can\'t do the task');
});
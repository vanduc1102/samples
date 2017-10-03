var taskId = 1;
// doTask(taskId).then(function(resolve) {
// 	console.log('Hey task ' + taskId + ' is done with result is '+ resolve +', Let do something else');
// }, function(reason){
// 	console.log('Can not finish the task');
// });

function doTask(taskId){
	console.log('start do task : ' + taskId);
	var promise =  new Promise(function(resolve, reject){
			downloadTask(taskId)
			.then(saveTaskToDb)
			.then(function(response){
				return exportTask(response, 'a-duck-dev');
			})
			.then(function(response){
				console.log('finish task : '+ response);
				resolve(response);
			}, function(reason){
				reason(reason);
			});
	});
	return promise;
}

function downloadTask(taskId) {
	console.log('start download : ' + taskId);
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			console.log('finished download : ' + taskId);
			resolve(taskId + 1);
		}, 200);
	});
}

function saveTaskToDb(taskId) {
	console.log('start save data : ' + taskId);
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('finish save data : '+ taskId);
			resolve(taskId + 1);
		}, 100);
	});
}

function exportTask(taskId, fileName) {
	console.log('start export data : ' + taskId);
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('file name : '+ fileName);
			console.log('finish export data : '+ taskId);
			resolve(taskId + 1);
		}, 100);
	});
}

module.exports = {
	doTask : doTask
}


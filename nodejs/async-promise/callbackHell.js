var taskId = 1;
doTask(taskId, function(result) {
	console.log('Hey task ' + taskId + ' is done with result is ' + result +', Let do something else.');
}) ;

function doTask( taskId , callback){
	console.log('start do task : ' + taskId);
	downloadTask(taskId, function(taskId){
		saveTaskToDb(taskId, function(taskId){
			exportTask(taskId, 'a-duck-dev', function(taskId){
				console.log('finish task : ' + taskId);
				callback(taskId);
			});
		});
	});
}

function downloadTask(taskId ,callback) {
	console.log('start download : ' + taskId);
	setTimeout(function() {
		console.log('finished download : ' + taskId);
		callback(taskId + 1);
	}, 200);
}

function saveTaskToDb(taskId ,callback) {
	console.log('start save data : ' + taskId);
	setTimeout(function(){
		console.log('finish save data : '+ taskId);
		callback(taskId + 1);
	}, 100);
}

function exportTask(taskId ,fileName, callback) {
	console.log('start export data : ' + taskId);
	setTimeout(function(){
		console.log('file name : '+ fileName);
		console.log('finish export data : '+ taskId);
		callback(taskId + 1);
	}, 100);
}


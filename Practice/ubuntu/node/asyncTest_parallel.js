var async=require("async");
async.parallel({
	task1: function(callback){
		setTimeout(function(){
			console.log("task1");
			callback(null, 1);
		}, 220);

	},
	task2: function(callback){
		setTimeout(function(){
			console.log("task2");
			callback(null, 2);
		}, 200);
	},
	task3: function(callback){
		setTimeout(function(){
			console.log("task3");
			callback(null, 3);
		}, 100);
	}
	},
	function(error, results){
		console.log(results);
	});
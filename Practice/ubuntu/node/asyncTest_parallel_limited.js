var async = require("async");
async.parallelLimit([
	function(callback){
		setTimeout(function(){
			console.log("task1");
			callback(null, "task1");
		}, 100);
	},
	function(callback){
		setTimeout(function(){
			console.log("task2");
			callback(null, "task2");
		}, 100);
	},
	function(callback){
		setTimeout(function(){
			console.log("task3");
			callback(new Error("error from task3"), "task3");
		}, 100);
	}
	],2,
	function(error, results){
		console.log(results);
		console.log(error);
	}
	);

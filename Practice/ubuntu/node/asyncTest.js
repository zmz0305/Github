var async=require("async");
async.series([
	function(callback){
		setTimeout(function(){
			console.log("Task 1");
			callback(null, 1);
		}, 300);
	},
	function(callback)
	{
		setTimeout(function()
		{
			console.log("Task 2");
			callback(new Error("error in task2"), 2);
		}, 300);
	},
	function(callback)
	{
		setTimeout(function()
		{
			console.log("Task 3");
			callback(null, 3);
		}, 300);
	}
	], 
	function(error, results){console.log(results);
		console.log(typeof(error));
		console.log(error.toString());

	});
	console.log(typeof(results));
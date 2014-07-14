var fs=require("fs");
var domain = require("domain").create();

function errorHandling(error, data)
{
	if(error)
	{
		throw error;
	}
	console.log(data);
	domain.dispose();
}

function fileReader()
{
	fs.readFile("", "utf8", errorHandling);
}

domain.run(fileReader)

// domain.run(function(){
// 	fs.readFile("", "utf8", function(error, data){
// 		if(error)
// 		{
// 			throw error;
// 		}
// 		console.log(data);
// 		domain.dispose();
// 	});
// });
domain.on("error", function(error){
	console.log("exception reported by domain.");
});
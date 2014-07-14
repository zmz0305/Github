var fs=require("fs");

fs.readFile("", "utf-8", function(error, data){
	if(error)
	{
		throw error;
	}
	console.log(data);
});

process.on("uncauhtException", function(error){
	console.log("the exception is caught");
});

console.log("Reading File.....");
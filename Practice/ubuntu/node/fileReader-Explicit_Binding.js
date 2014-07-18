var domain=require("domain");
var d1=domain.create();
var fs=require("fs");
// var d2=domain.create();
// d1.run(function(){
// 	d2.add(setTimeout(function(){
// 		throw new Error("test error");
// 	}));
// });

// d2.on("error", function(error){
// 	console.log("Caught by d2");
// });

// d1.on("error", function(error){
// 	console.log("Caught by d1")
// });

d1.run(function(){
	fs.readFile("", "utf8", function(error, data){
		//if(error)
			//throw error;
		console.log(data);
	});
});

d1.on("error", function(error){
	console.log("exception caught by d1");
	console.log(error);
});
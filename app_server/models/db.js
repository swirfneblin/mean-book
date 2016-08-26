var mongoose = require('mongoose');
var gracefulShutdown;

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

var dbURILog = 'mongodb://localhost/Loc8rLog';
var logDB = mongoose.createConnection(dbURILog);

logDB.on('connected', function(){
	console.log('Mongoose connected to '+ dbURILog);
});

logDB.close(function(){
	console.log('Mongoose log disconnected');
});

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected to ');
});

gracefulShutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through' + msg);
		callback();
	});
};

// reset do nodemon
process.once('SIGUSR2', function(){
	grecefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});
//encerramento da aplicação
process.on('SIGINT', function(){
	grecefulShutdown('app termination', function(){
		process.exit(0);
	});
});
//encerramento do heroku
process.on('SIGTERM', function(){
	grecefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
});

// var readline = require('readline');

// if(process.plataform === "win32"){
// 	var rl = readline.createInterface({
// 		input : process.stdin,
// 		output: process.stdout
// 	});
// 	rl.on("SIGINT", function(){
// 		process.emit("SIGINT");
// 	});
// };
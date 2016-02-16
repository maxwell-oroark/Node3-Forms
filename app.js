// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs')
// Create Express App Object \\
var app = express();




// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('public/:filename', function(req, res){
  	fs.readFile('public/' + req.params.filename ,function(err, data){
  		if (err) throw err
    // do something with data here
  		res.header('content-type', 'text/html')
  		res.send(data)
  		console.log(data)
	});

});

app.get('/', function(req, res){
	fs.readFile('public/data3.html', function(err, data){
			console.log(err)
    // do something with data here
  		res.header('content-type', 'text/html')
  		res.send(data)
  		// console.log(data)

	});
});

app.get('/success', function(req, res){
	fs.readFile('public/success.html', function(err, data){
		if (err) throw err
    // do something with data here
  		res.header('Content-Type', 'text/html')
  		res.send(data)
  		console.log('success data',data)

	});
});


app.post('/formsubmit', function(req,res){
	res.redirect('/success')
	console.log('form-submit', req.body.email)
	fs.writeFileSync('public/data2.txt',req.body.email)
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})


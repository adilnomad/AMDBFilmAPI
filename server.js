
const express = require('express');

const app = express()
var server = app.listen(3000, listening);

function listening() {
	console.log("listening on port 3000");
}

var names = {
	1:"Adil"
};

app.get('/', func);

function func(request, response) {
	responce.send('hellooo there, this is simple server!');
}

app.get('/person/:name', insult);

function insult(request, response) {
	var data = request.params;
	var name = data.name;
	responce.send('Yoo, ' + name + '! You f* loser!');
	console.log("Just kidding, " + name + " not loh!");
}

app.get('/loh', insultBack);

function insultBack(request, response) {
	responce.send('sam loh!');
}

































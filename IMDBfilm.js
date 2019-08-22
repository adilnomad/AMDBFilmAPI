/*
author: sakennomad @ github
*/
const express = require('express');
const request = require('request');
// getting hidden API keys
const config = require('./config.json');

const app = express()
var server = app.listen(3001, listening);

function listening() {
	console.log("listening...");
}
// root page
app.use(express.static("website"));
app.get('/:keyWord', getFilmData);

 function getFilmData(req, res) {

 	var keyWord = req.params.keyWord;
 	//call OMDB API using request
 	request('http://www.omdbapi.com/?s='+keyWord+'&apikey='+ config.APIKey, { json: true }, (err, resp, body) => {
 		 if (err) { return console.log(err); }
  		res.send(body.Search);
	});

}






























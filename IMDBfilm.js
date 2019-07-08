/* 
Inifial test design: make a person to search for a film by entering 
keyword into the URL address bar. Later will be wraped into some
front end and have a entry bar for that.
*/
const express = require('express');
const request = require('request');

const app = express()
var server = app.listen(3000, listening);

function listening() {
	console.log("listening on port 3000");
}
// root page
app.use(express.static("website"));

 app.get('/:keyWord', getFilmData);
 function getFilmData(req, res) {

 	var keyWord = req.params.keyWord;
 	//call OMDB API using request
 	request('http://www.omdbapi.com/?s='+keyWord+'&apikey=aa200f33', { json: true }, (err, resp, body) => {
 		 if (err) { return console.log(err); }
  		res.send(body.Search);
	});

}






























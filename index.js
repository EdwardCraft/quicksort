var express = require('express');
var app = express();
var path = require('path');


app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client'));

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(request, response){
	response.render('index.ejs');
});

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});





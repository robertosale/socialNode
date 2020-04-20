var http = require('http');
var fs = require('fs')
//create a server object:
http.createServer(function (req, res) {
 //
var url = req.url;
 if(url ==='/'){
    fs.readFile('./home.html', function(error, resp){
        if(error) {
            res.writeHead(404, {'Content-Type': 'text/html'}); // http header
            res.write('<h1>Not Found</h1>'); //write a response
            res.end(); //end the response
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(resp);
            res.end();
        }
    }) 


 }else if(url==='/about'){
    fs.readFile('./about.html', function(error, resp){
        if(error) {
            res.writeHead(404, {'Content-Type': 'text/html'}); // http header
            res.write('<h1>Not Found</h1>'); //write a response
            res.end(); //end the response
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(resp);
            res.end();
        }
    }) 

    
 }else{
    res.writeHead(404, {'Content-Type': 'text/html'}); // http header
    res.write('<h1>Not Found</h1>'); //write a response
    res.end(); //end the response
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
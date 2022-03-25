/*
const http = require('http');
const fs = require('fs');
const path = require('path');

//létrehoztunk egy változót amibe belemásoltuk a const server = http.createServer belsejét
//http.createServerbe pedig az új változó nevét tettük bele
const serverFunction = (req, res) => {

	const errorHTML = `Nem letezik`;
    
	//let filePath = path.resolve(__dirname + '/../frontend' + req.url);
	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
    

	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				console.log("az index html rendben kiszolgálódott")
				res.end(data);
			}
		});
	}
	});
}
const server = http.createServer(serverFunction);

const port = 9000;
const ip = "127.0.0.1";
const listenFun = () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log(`Never give up!`)
}

//listen metódus: 3 paraméter : port, string (IP cím), callback fct
server.listen(port, ip, listenFun);
*/

//a felsőt express js-el: 

const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
	res.sendFile( path.join(`${__dirname}/../frontend/index.html`) )
})

//itt van megmondva hogy csak a dog mappát lássa
app.use("/dog", express.static(`${__dirname}/../frontend/public`))

app.listen(9000, () => {
	console.log("http://127.0.0.1:9000")
})
// first start with express:

// Express.js is a framework built in JavaScript using Node.js as the server component.  
// It is also the E in the MEAN stack, so it must be important! Unlike most other MVC frameworks 
// (like Codeigniter and Rails), Express isn't exclusively MVC. It's actually more so just a set of tools that allows us to create a more robust Node Server. 
// There are a few different ways to build an MVC framework with Express, and we will eventually show you how we do it. 
// However, we believe the best way to learn Express is to start with the basics before working our way up.



// First, let's create our project:
// We are going to begin by creating the standard Hello World app with Express.

// Create a project folder called "Hello_Express"
// Create a file inside that folder called "server.js" (Surprise! Surprise! This will be our Node Server file!)
// Open up the server.js file and let's get started!


var express = require("express");

var app = express();

app.get('/', function (request, response){
	response.send("Hello Express");
})

app.listen(8000, function(){
	console.log("listening on 8000");
})



// go to your terminal
// direct to the hello_express folder
// install express: npm install express
// node server.js
// out put
// open in localhost:8000
// Hello Express

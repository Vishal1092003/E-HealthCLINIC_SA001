const express=require('express');
const dbconnect = require('./database/mongodb');
const posturl=require("./Routes/InputUrlRoute");
const app=express();
const cors=require('cors');
const signup=require("./Routes/Users/Singup")
const login=require("./Routes/Users/Login")
const DoctorSignUp=require("./Routes/doctors/DoctersSignUp")
const DoctorLogin=require("./Routes/doctors/DoctorsLogin")
// const cookie_parser=require("cookie-parser");
// app.use(cookie_parser());
app.use(express.json());
app.use(cors());

const port=8000;

app.listen(port,()=>{
    console.log(`server stated at ${port}`);
})

app.get('/',(req,res)=>{
     res.send(`server stated at ${port}`);
})

app.use('/posting',posturl);
app.use(signup);
app.use(login);
app.use(DoctorSignUp);
app.use(DoctorLogin);


dbconnect();




























/*
The app.listen() Method
When you call app.listen(), Express internally does the following:

a) Create HTTP Server
The app.listen() method essentially creates an HTTP server using Node's http.createServer() method, and passes it a function to handle incoming requests.

b) The Request Handler
Express defines a request handler function to process incoming HTTP requests. This function is essentially the core of how Express handles routing and middleware. Here's what happens:

Express first creates an HTTP server using http.createServer().
The server listens for incoming requests.
When a request is received, the server invokes the request handler, which processes the request and sends a response.

*/


/*
DIFFERENCE BETWEEN HTTP CREATE SERVER AND EXPPESS

1. Simplified Routing
With http.createServer(), you would have to manually handle routing, i.e., check the URL and HTTP method (GET, POST, etc.) to decide what action to take. Express simplifies this by providing an intuitive routing mechanism.

Without Express (Manual Routing):

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});



With Express (Simple Routing):

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
As you can see, Express allows you to define routes more clearly and with less code.

2. Middleware Support
Express has built-in support for middleware, which allows you to handle things like authentication, logging, request parsing, error handling, etc., in a modular and organized way. This would require a lot of manual work if you were to build it from scratch with http.createServer().

Example with Express Middleware:

const express = require('express');
const app = express();

// Middleware to log request info
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();  // Pass the request to the next handler
});

// Route handlers
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
*/
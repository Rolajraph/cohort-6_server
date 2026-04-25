// Step 1: Import the express module
const express = require('express');  // "Go into node_modules folder and bring out the Express package"
// We store it in a variable called 'express' so we can use it

// Step 2: Create an Express application instance
const app = express(); // "Use the Express package to CREATE our actual server application"
// 'app' is now our server — everything happens through 'app'
// Think of this as OPENING your restaurant for business

// body parser middleware to parse JSON request bodies
 app.use(express.json());



const studentInfo = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 22, grade: "C" }
];


app.get('/all-data', (req, res) => {
  res.json(studentInfo);
}); // "When someone visits http://localhost:3000/all-data"
// using a GET request (just visiting the URL in browser)
// run this function"
// req = the incoming request from the browser
// res = what we send back to the browser

// Step 3: Define a route handler for GET requests to the root URL ('/')
app.get('/', function(req, res) {
  res.send('Hello, World! welcome to Express.js!');  // "Send back the studentInfo array as JSON data"
  // The browser will see all 3 students displayed as JSON
});

app.get("/about" , (request , response)=>{
  response.send("this is about page")
});

app.get("/contact" , (request , response)=>{
  response.send("this is contact page")
});
app.get("/ourservices" , (request , response)=>{ 
  response.send("this is our services page")
});

// Step 4: Start listening on port 3000 for incoming requests
app.listen(3000, function() {
  console.log('Server is up and running ');
});


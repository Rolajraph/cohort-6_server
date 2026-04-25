// Step 1: Import the express module
const express = require('express');

// Step 2: Create an Express application instance
const app = express();

// body parser middleware to parse JSON request bodies
// app.use(express.json());


const studentInfo = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 22, grade: "C" }
];


app.get('/all-data', (req, res) => {
  res.json(studentInfo);
});

// Step 3: Define a route handler for GET requests to the root URL ('/')
app.get('/', function(req, res) {
  res.send('Hello, World! welcome to Express.js!');
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


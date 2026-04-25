const express = require("express");
const app = express();
app.use(express.json());

const port = 8080;
app.get("/", (request, response) => {
  response.send("server is up and running!");
});


// simulated in-memory database
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  
];

// GET all users is a method that allows clients to retrieve a list of all users from the server. When a client sends a GET request to the "/users" endpoint, the server responds with a JSON array containing all user objects stored in the in-memory database. Each user object typically includes properties such as id, name, and email. This endpoint is useful for displaying a list of users or for any functionality that requires access to all user data.
app.get("/users", (request, response) => {
  response.status(200).json(users);
});

// GET a single user by id
app.get("/users/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const user = users.find((el) => el.id === id);

  if (!user) {
    return response.status(404).json({ error: "User not found" });
    
  };

  response.status(200).json(user);
});


// POST REQUEST TO CREATE A NEW USER is a method that allows clients to send data to the server to create a new user. The server processes the incoming data, validates it, and if everything is correct, it adds the new user to the in-memory database and responds with the created user object. If there are any issues (like missing fields or duplicate email), it responds with an appropriate error message and status code.
app.post("/new-users", (request, response) => {
  const { name, email } = request.body;

  // Simple validation
  if (!name || !email) {
    return response.status(400).json({
       error: 'Name and email are required',
      });

  }


  // Create new user object
  const newUser = {
    id: users.length + 1, // Simple ID generation
    name: name,
    email: email,
  };

  users.push(newUser);
  response.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});




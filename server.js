const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Assume a long-running process here, like a database query or file read
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 5000); // Simulate a 5-second delay
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
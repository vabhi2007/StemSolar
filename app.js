const express = require('express');
const path = require('path');

const app = express();

// Set the static folder to serve files from
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'webpage.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

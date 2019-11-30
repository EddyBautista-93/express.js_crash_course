
// Requres the path
const express = require('express');

const app = express();
// Response
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Sets the port
const PORT = process.env.PORT || 5000;
//What runs the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

//START SERVER
app.listen(7000, function () {
 console.log("Server running");
});
const express = require('express');
const app= express();
const  bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => { 
    res.json("APP UP");
});

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)); 
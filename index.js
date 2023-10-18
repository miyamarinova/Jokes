import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = 'https://v2.jokeapi.dev/joke/';

app.use(express.static('public'));


app.get('/', (req,res) => {
    res.render("index.ejs", {content: ""});
});



app.listen(port,() =>{
    console.log('Listening on port' + port)
});

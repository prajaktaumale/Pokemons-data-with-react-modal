const express = require("express");
const Pokemon = require('./models/pokemonModal')
const db = require("./db")

const app = express();

app.use(express.json());

const pokemonsRoute = require('./routes/pokemonRoute') 
const userRoute = require('./routes/userRoute')

app.use('/api/pokemons/', pokemonsRoute)
app.use('/api/users/', userRoute)

app.get("/", (req, res) => {
    res.send('server is running')
});


const port = process.env.PORT || 5000;
app.listen(port, () => 'server is running on port')
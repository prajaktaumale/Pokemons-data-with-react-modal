const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({

    Name : {type: String, require},
    Image : {type: String, require},
    Category : {type: String, require},
    Description : {type: String, require}
},{
    timestamps: true
})

const pokemonModel = mongoose.model('pokemons', pokemonSchema)
module.exports = pokemonModel
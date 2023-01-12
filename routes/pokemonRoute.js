const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Pokemon = require('../models/pokemonModal')


router.get("/getallpokemons", async(req,res)=>{

    try {
        const pokemons = await Pokemon.find({})
        res.send(pokemons)
    } catch (error) {
        return res.status(400).json({message: 'somthing went wrong' + error});
    }

})

router.post("/addpokemon", async(req,res)=>{
    const pokemon = req.body.pokemon
    try {
        const newpokemon = new Pokemon({
            Name: pokemon.Name,
            Image : pokemon.Image,
            Category: pokemon.Category,
            Description: pokemon.Description
        })
        await newpokemon.save()
        res.send('new pokemon created successfully')
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
})

module.exports = router;
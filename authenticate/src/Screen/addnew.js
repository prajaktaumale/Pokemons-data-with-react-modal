import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addPokemon } from "../actions/pokemonAction";

export default function Addpizza() {
    const [Name, setname] = useState('')
    const [Image, setimage] = useState('')
    const [Category, setcategory] = useState('')
    const [Description, setdescription] = useState('')
    const dispatch = useDispatch()


    function formHandler(e) {
        e.preventDefault();
        const pokemon = {
            Name,
            Image,
            Description,
            Category
        }
        console.log(pokemon)
        dispatch(addPokemon(pokemon))

    }

    return (
        <div>
            <h2>Add Pokemon</h2>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Name Of The Item' className='form-control' value={Name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder='Image URL' className='form-control' value={Image} onChange={(e) => { setimage(e.target.value) }} />
                    <input required type="text" placeholder='Category' className='form-control' value={Category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input required type="text" placeholder='Description' className='form-control' value={Description} onChange={(e) => { setdescription(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="mt-3" type="submit">Add Pokemon</button>
                </form>
            </div>
        </div>
    )
}
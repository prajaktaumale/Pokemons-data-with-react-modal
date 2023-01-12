import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pokemon from '../components/pokemon'
import { getAllPokemons } from '../actions/pokemonAction'

export default function Homescreen() {

    const dispatch = useDispatch()

    const pokemonsstate = useSelector(state => state.getAllPokemonsReducer)

    const { pokemons, loading, error } = pokemonsstate

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])
    return (
        <div>
            <h1>Pokemons</h1>
            <a style={{float:'left'}} href="/addnewpokemon" className="btn m-2">Create</a>
            <div className='row justify-content-center m-3'>

                {loading ? (
                    <h1>Loading</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) : (
                    pokemons.map(pokemon => {
                        return <div className='col-md-4'>
                            <div>
                                <Pokemon pokemon={pokemon} />
                            </div>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}
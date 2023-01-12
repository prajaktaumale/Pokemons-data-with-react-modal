import axios from 'axios'
export const getAllPokemons=()=>async dispatch=>{

    dispatch({type:'GET_POKEMONS_REQUEST'})
    try {
        const response = await axios.get('/api/pokemons/getallpokemons')
        console.log(response)
        dispatch({type:'GET_POKEMONS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type:'GET_POKEMONS_FAILED', payload : error})
    }

}

export const addPokemon=(pokemon)=>async dispatch=>{

    dispatch({type:'ADD_POKEMONS_REQUEST'})
    try {
        const response = await axios.post('/api/pokemons/addpokemon',{pokemon})
        console.log(response) 
        alert('New Pokemon Created Successfully')
        dispatch({type:'ADD_POKEMONS_SUCCESS'})
        window.location.href='/homescreen'
    } catch (error) {
        dispatch({type:'ADD_POKEMONS_FAILED', payload: error})
    }

}

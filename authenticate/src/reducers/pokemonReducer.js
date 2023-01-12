export const getAllPokemonsReducer=(state={pokemons : []}, action)=>{

    switch(action.type){
        case 'GET_POKEMONS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_POKEMONS_SUCCESS' : return{
            loading: false,
            pokemons : action.payload
        }
        case 'GET_POKEMONS_FAILED' : return{
            error : action.payload,
            loading: false
        }
        default : return state
    }

}

export const addPokemonReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'ADD_POKEMONS_REQUEST': return{
            loading :true,
            ...state
        }
        case 'ADD_POKEMONS_SUCCESS': return{
            loading : false,
            success : true
        }
        case 'ADD_POKEMONS_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}
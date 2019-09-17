export default class BaseAPI {

    BASE_URL = () => "https://pokeapi.co/api/v2/pokemon/"

    getPokeInfo = name => {
        fetch(`${BASE_URL()}${name}`)
            .then(res => res.json())
            .then(data => data)
    }

    getType = type => {
        fetch(`${BASE_URL()}type/${type}`)
            .then(res => res.json())
            .then(data => data)
    }

    getPokemonByGen = gen => {
        fetch(`${BASE_URL()}generation/${gen}`)
            .then(res => res.json())
            .then(data => data)
    }

    // @todo corrigir erro de indefiniçao na URL base da API
}
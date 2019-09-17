export default class BaseAPI {

    constructor(){
        this.BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    }

    getPokeInfo = name => {
        fetch(`${this.BASE_URL}${name}`)
            .then(res => res.json())
            .then(data => data)
    }

    getType = type => {
        fetch(`${this.BASE_URL}type/${type}`)
            .then(res => res.json())
            .then(data => data)
    }

    getPokemonByGen = gen => {
        fetch(`${this.BASE_URL}generation/${gen}`)
            .then(res => res.json())
            .then(data => data)
    }
}
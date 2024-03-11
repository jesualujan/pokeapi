const morgan = require('morgan')

const logger = morgan('dev')

const URI = 'https://pokeapi.co/api/v2/pokemon/25'

// Función para realizar una petición a la PokeAPI
// tenemos una función asincrona,
const getPokemon = async () => {
      await fetch(URI) // tenemos que indicar en una función asincrona que va a esperar 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

// Envolver la función getPokemon con el logger de Morgan
logger({}, {},  getPokemon)



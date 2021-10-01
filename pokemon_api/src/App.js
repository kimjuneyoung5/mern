import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setPokemon(jsonResponse.results)
      })
      .catch(err => console.log(err))
  }

  let content = (
    pokemon.map((poke, i) =>(
      <ul>{poke.name}</ul>
    ))
  )

  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <button onClick = {fetchPokemon}>Fetch Pokemon</button>
      <hr />
      {pokemon ? 
      content : "fetching data..."}
    </div>
  );
}

export default App;

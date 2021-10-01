import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  //useEffect(() => {
  //  axiosPokemon()
  //}, [])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => {
      console.log(res.data)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }

  let content = (
    pokemon.length === 0 ?
    <h3>fetching data...</h3>
    :
    pokemon.map((poke, i) =>(
      <ul key={i}>{poke.name}</ul>
    ))
  )

  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <button onClick = {axiosPokemon}>Axios Pokemon</button>
      <hr />
      {content}
    </div>
  );
}

export default App;

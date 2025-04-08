import MakeCard from "./conponent/makecard.tsx";
import PokemonSpecs from "./conponent/PokemonSpecs.tsx";

import './App.css'

function test () {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))

}

function App() {




  return (
    <>
        <nav><img srcSet="./pkb.png" alt="MakeCard"/><h1>Pokemon World</h1><p>world pokemon database</p></nav>
      <MakeCard />
    </>

  );
}

export default App



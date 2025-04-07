function DataPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then(response => response.json())
        .then(function (AllPokemon) {
            AllPokemon.results.forEach(function (pokemon) {fetch PokemonData(pokemon);
            })
        })
}


function MakeCard() {

    return (
        <>
        <section>
            <img srcSet="./pkb.png" alt="MakeCard" />
            {DataPokemon.map((pokemon) => <p key={pokemon.name}>{pokemon.name}</p>)}
            {DataPokemon.map((pokemon) => <p key={pokemon.id}>{pokemon.id}</p>)}
        </section>
       </>
    )
}

export default MakeCard;
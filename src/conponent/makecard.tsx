import { useEffect, useState } from 'react'

interface DataPokemon {
    id: number;
    name: string;
}


function MakeCard() {

    const [DataPokemon, setDataPokemon] = useState<DataPokemon | null>(null);

    function callpokemondata () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then((res) => {setDataPokemon(res.results)})

    }

    useEffect(() => {
        callpokemondata()
    }, []);

    console.log(DataPokemon)

    return (
        <>
            {DataPokemon?.map((pokemon, index) => <section key={pokemon.name}>
                <img srcSet="./pkb.png" alt="MakeCard" />
                <p>n° {String(index + 1).padStart(4, '0')} </p>
                <button type="button" key={pokemon.name} onClick={() => setDataPokemon(pokemon.name) }>{pokemon.name}</button>
            </section>)}

       </>
    )
}

export default MakeCard;

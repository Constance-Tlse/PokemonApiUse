import {useEffect, useState} from "react";
interface DataPokemonUrl {
    id: number;
    name: string;
}

function PokemonSpecs() {

    const [DataPokemonUrl, setDataPokemonUrl] = useState<DataPokemonUrl | null>(null);
    function getdatapokemonUrl(pokemon) {
        fetch(pokemon.url)
            .then(response => response.json())
            .then((res) => {setDataPokemonUrl(res.results)})
    }

    useEffect(() => {
        getdatapokemonUrl()
    }, []);

    console.log(DataPokemonUrl)

    return (
    <>
        <section className=("SpecsPokemon")>
            <img srcSet={pokemon.other.official-artwork.front_default} alt="MakeCard" />
            <p>{pokemon.name}</p>
            <p>n° {pokemon.id}</p>
            <p>Type {pokemon.types.}</p>


        </section>
    </>
    )


}

export default PokemonSpecs;

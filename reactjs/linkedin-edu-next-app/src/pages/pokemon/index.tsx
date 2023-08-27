interface Pokemon {
    url: string;
    name: string;
}

interface PokemonPageProps {
    pokemonList: Pokemon[];
}

export default function PokemonPage({ pokemonList }: PokemonPageProps) {
    return (
        <div>
            <h1>Hello this is pokemon page : {pokemonList.length}</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.url}>
                        <a href={pokemon.url}>
                            <strong>{pokemon.name}</strong>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
    ).then((res) => res.json());
    console.log("response.results: ", response.results);
    return {
        props: {
            pokemonList: response.results,
        },
    };
}

interface Pokemon {
    name: string;
    id: number;
}

interface PokemonPageProps {
    pokemon: Pokemon;
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
    return (
        <div>
            <h1>Pokemon Detail Page : {pokemon.id}</h1>
            <div>{pokemon.name}</div>
            <strong>{pokemon.id}</strong>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const name = params.name as string;
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + name
    ).then((res) => res.json());
    console.log("response.results: ", response);
    return {
        props: {
            pokemon: response,
        },
    };
}

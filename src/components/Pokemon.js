import { useEffect, useState } from "react";
import axios from 'axios';

const MAX_ID = 1025;
const MIN_ID = 1;

const Pokemon = () => {
    const [pokemon, setPokemon] = useState();
    const [pokeId, setPokeId] = useState(MIN_ID);
    
    const fetchPokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((result) => {
            setPokemon(result?.data);
        })
        .catch(
            console.log("Trouble retrieving data from api")
        );
    }
    useEffect(() => {
        fetchPokemon(pokeId);
    }, [pokeId]);

    const previousOnClick = () => {
        setPokeId(pokeId === MIN_ID ? MAX_ID : pokeId - 1);
    }

    const nextOnClick = () => {
        setPokeId(pokeId === MAX_ID ? MIN_ID : pokeId + 1);
    }

    return (
        <div className="pokemon-wrapper">
            <div className="pokemon">
                <p>ID: {pokemon?.id}</p>
                <p>Name: {pokemon?.name}</p>
                <p>Weight: {pokemon?.weight}</p>
            </div>
            <div>
                <img src={pokemon?.sprites.front_default} alt="Front sprite" srcset="" />
                <img src={pokemon?.sprites.back_default} alt="Back sprite" srcset="" />
            </div>
            <div>
                <button onClick={previousOnClick} className="poke-button">
                    Previous
                </button>
                <button onClick={nextOnClick} className="poke-button">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pokemon;
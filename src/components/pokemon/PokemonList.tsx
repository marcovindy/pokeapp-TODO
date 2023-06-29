import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '@/services/pokemonApi'
import Pokemon from './interface/pokemon.interface'

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemonList()
            setPokemonList(data.results)
        }

        fetchData()
    }, [])

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList

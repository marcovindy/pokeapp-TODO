import React, { useEffect, useState } from 'react'
import { fetchPokemonList, fetchPokemonById } from '@/services/pokemonApi'
import styled from 'styled-components'
import Pokemon from './interface/pokemon.interface'
import PokemonCard from './PokemonCard'

const PokemonListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [pokemonOffset, setPokemonOffset] = useState<number>(1)
    const [pokemonLimit, setPokemonLimit] = useState<number>(10)

    const fetchPokemons = async () => {
        const pokemonData: Pokemon[] = []
        for (let i = pokemonOffset; i <= pokemonLimit; i++) {
            const response = await fetchPokemonById(i)
            pokemonData.push(response)
        }
        setPokemons(pokemonData)
    }

    useEffect(() => {
        fetchPokemons()
    }, [pokemonOffset, pokemonLimit])

    return (
        <div>
            <h1>Pokémon List</h1>
            <PokemonListContainer>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </PokemonListContainer>
        </div>
    )
}

export default PokemonList

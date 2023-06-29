import React, { useEffect, useState } from 'react'
import { fetchPokemonList, fetchPokemonById } from '@/services/pokemonApi'
import styled from 'styled-components'
import Pokemon from './interface/pokemon.interface'
import PokemonCard from './PokemonCard'
import { Button } from '@mui/material'

const PokemonListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const LoadMoreButton = styled(Button)`
    margin-bottom: 1rem;
`

const LoadMoreButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`

const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [pokemonOffset, setPokemonOffset] = useState<number>(1)
    const [pokemonLimit, setPokemonLimit] = useState<number>(20)

    const fetchPokemons = async () => {
        const pokemonData: Pokemon[] = []
        for (let i = pokemonOffset; i <= pokemonLimit; i++) {
            const response = await fetchPokemonById(i)
            pokemonData.push(response)
        }
        setPokemons((prevPokemons) => [...prevPokemons, ...pokemonData])
    }

    const handleLoadMore = () => {
        setPokemonOffset((prevOffset) => prevOffset + 20)
        setPokemonLimit((prevLimit) => prevLimit + 20)
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
            <LoadMoreButtonContainer>
                <LoadMoreButton onClick={handleLoadMore} variant="contained" color="primary">
                    Načíst další pokémony
                </LoadMoreButton>
            </LoadMoreButtonContainer>
        </div>
    )
}

export default PokemonList

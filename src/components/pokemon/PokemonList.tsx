import React, { useEffect, useState } from 'react'
import { fetchPokemonList, fetchPokemonById } from '@/services/pokemonApi'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Pokemon from './interface/pokemon.interface'
import axios, { AxiosResponse } from 'axios'

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
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} sx={{ width: 200, margin: 10 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {pokemon.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default PokemonList

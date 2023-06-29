import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '@/services/pokemonApi'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Pokemon from './interface/pokemon.interface'

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await fetchPokemonList()
            setPokemonList(data.results)
        }
        fetchPokemons()
    }, [])

    return (
        <div>
            <h1>Pokémon List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {pokemonList.map((pokemon) => (
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

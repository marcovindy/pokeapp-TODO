import React from 'react'
import PokemonList from '@/components/pokemon/PokemonList'

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Pokémon Page</h1>
            <PokemonList />
        </div>
    )
}

export default Dashboard

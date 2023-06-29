import React from 'react'
import PokemonList from '@/components/pokemon/PokemonList'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Pokémon Page</h1>
                <PokemonList />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard

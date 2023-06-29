import React from 'react'
import PokemonList from '@/components/pokemon/PokemonList'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@mui/material'

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>Pokémon Page</h1>
                <PokemonList />
            </Container>
            <Footer />
        </>
    )
}

export default Dashboard

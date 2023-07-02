import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@mui/material'

type PokemonDetailParams = {
    id: string
}

const PokemonDetail: React.FC = () => {
    const { id } = useParams<PokemonDetailParams>()

    return (
        <div>
            <h1>Pokémon Detail</h1>
            <p>ID: {id}</p>
            <Link to="/dashboard">
                <Button variant="contained" color="primary">
                    Zpět
                </Button>
            </Link>
        </div>
    )
}

export default PokemonDetail

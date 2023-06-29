import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import Pokemon from './interface/pokemon.interface'
import styled from 'styled-components'

// Styling
const StyledCard = styled(Card)`
    width: 200px;
    margin: 10px;
`

type PokemonCardProps = {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h6" component="div">
                    {pokemon.name}
                </Typography>
            </CardContent>
        </StyledCard>
    )
}

export default PokemonCard

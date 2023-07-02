import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Pokemon from './interface/pokemon.interface'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styling
const StyledCard = styled(Card)`
    width: 200px;
    margin: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

type PokemonCardProps = {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { id, name, sprites } = pokemon

    return (
        <StyledCard>
            <StyledLink to={`/pokemon/${id}`}>
                <CardMedia component="img" height="140" image={sprites.front_default} alt={name} />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </StyledLink>
        </StyledCard>
    )
}

export default PokemonCard

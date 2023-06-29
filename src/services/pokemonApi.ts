import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const fetchPokemonList = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/pokemon?limit=151`)
        return response.data
    } catch (error) {
        console.error('Chyba při načítání seznamu pokemonů:', error)
        throw error
    }
}

export const fetchPokemonById = async (id: number): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/pokemon/${id}`)
        return response.data
    } catch (error) {
        console.error('Chyba při načítání pokemona:', error)
        throw error
    }
}

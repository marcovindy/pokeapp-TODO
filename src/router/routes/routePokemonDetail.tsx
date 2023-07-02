import { IRoute } from '@/router/routes/routePublic'
import PokemonDetail from '@/pages/pokemonDetail/PokemonDetail'

export const routePokemonDetail: IRoute[] = [{ path: '/pokemon/:id', element: PokemonDetail }]

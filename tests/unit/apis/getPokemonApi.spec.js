import getPokemonApi from '@/apis/getPokemonApi'

describe('getPokemonApi in apis', () => {

    test('Should match baseURL', () => {
        
        expect(getPokemonApi.defaults.baseURL).toBe(`https://pokeapi.co/api/v2/pokemon`)

    })

})
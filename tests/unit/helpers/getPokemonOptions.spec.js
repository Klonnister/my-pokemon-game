import pokemonOptions, { getPokemons, pokemonsInfo } from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helper', () => {

    test('getPokemons should return an array with 650 elements', () => {

        expect( getPokemons().length ).toBe(650)
        expect( getPokemons()[5] ).toBe(6)
        expect( getPokemons()[178] ).toBe(179)
        expect( getPokemons()[312] ).toBe(313)
        expect( getPokemons()[498] ).toBe(499)
        expect( getPokemons()[642] ).toBe(643)

    })

    test('pokemonsInfo should return an array with pokemon names and ids', async () => {

        const pokemons = await pokemonsInfo([ 4, 10, 15, 25])        
    
        expect( pokemons ).toEqual([
            { name: 'charmander', id: 4 },
            { name: 'caterpie', id: 10 },
            { name: 'beedrill', id: 15 },
            { name: 'pikachu', id: 25 }
        ]) 

    })

    test('pokemonOptions should return an array with random pokemons', async () => {

        const pokemons = await pokemonOptions()
        console.log(pokemons)

        expect( pokemons ).toEqual([
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
        ])

    })

})


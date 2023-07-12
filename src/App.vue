<template>
  <main>
  <h1>¿Cuál es este Pokémon?</h1>

  <PokemonImage 
    v-if="this.pokemon"
    :pokemon-id="this.pokemon.id"
    :show-images="showImages"
  />

  <PokemonOptions 
    :pokemons="pokemonArr"
    @selection="checkAnswer"
  />

  <h2> {{ message }} </h2>

  </main>
</template>

<script>
import PokemonImage from './components/PokemonImage.vue'
import PokemonOptions from './components/PokemonOptions.vue'

import pokemonOptions from '@/helpers/getPokemonOptions'


export default {
  name: 'App',
  components: {
    PokemonImage,
    PokemonOptions,
  },

  data() {
    return {
      showImages: false,
      pokemonArr: [],
      pokemon: null,
      message: null,
    }
  },

  methods: {
    async getrandomPokemon() {
      this.pokemonArr = await pokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      
      this.pokemon = this.pokemonArr[ rndInt ]
    },

    checkAnswer( pokemonId ) {
      this.showImages = true

      if( this.pokemon.id === pokemonId ) {
        this.message = `Correcto, era ${ this.pokemon.name }!`
      } else {
        this.message = `Oops, era ${ this.pokemon.name }`
      }
    }

  },

  mounted() {
    this.getrandomPokemon()
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

main {
  background-color: hsla(0, 0%, 86%, 90%);
  padding: 1rem 1rem;
  margin: 0 1rem;
  border-radius: 1.5rem;

  @media screen and ( min-width: 33.75rem ) {
    padding: 1rem 4rem;
  }
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border-radius: 1rem;
}
</style>

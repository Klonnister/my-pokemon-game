<template>
  <main>
    <div class="top-bar" v-if="playing">
      <p>Punteo: {{ points }}</p>
      <p>Intentos: {{ intentos }}</p>
    </div>

    <h1 v-if="pokemon">¿Cuál es este Pokémon?</h1>
    <p  v-if="!pokemon" class="waiting">Espere, por favor...</p>

    <div v-if="!lost">
        <PokemonImage 
        v-if="this.pokemon"
        :pokemon-id="this.pokemon.id"
        :show-images="showImages"
        class="fade-in"
        />

        <PokemonOptions 
        :pokemons="pokemonArr"
        @selection="checkAnswer"
        :pokemon="pokemon"
        />

        <div v-if="showMessage" class="fade-in">
          <h2> {{ message }} </h2>
          <button      
            class="btn"
            @click="nextRound"
          >
            Siguiente
          </button>
        </div>
    </div>

    <div class="punteo fade-in" v-if="final">
        <h2>Fin del juego</h2>
        <p> Punteo: {{ points }} </p>
    </div>

    <button
        v-if="!playing"
        type="button"
        class="btn"
        @click="newGame"
    >
        Empezar
    </button>

  </main>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',

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
      showMessage: false,
      playing: false,
      lost: true,
      points: 0,
      intentos: 3,
      final: false,
    }
  },

  methods: {
    async getRandomPokemon() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      
      this.pokemon = this.pokemonArr[ rndInt ]
    },

    checkAnswer( pokemonId ) {
      this.showImages = true

      if( this.pokemon.id === pokemonId ) {
        this.message = `Correcto, era ${ this.pokemon.name }!`
        this.points += 10
      } else {
        this.message = `Oops, era ${ this.pokemon.name }`
        this.intentos -= 1
      }

      this.showMessage = true
    },

    nextRound() {
      if ( this.intentos === 0 ) {
        this.lost = true
        this.playing = false
        this.final = true
      } else {
        this.showImages = false
        this.pokemonArr = []
        this.pokemon =  null
        this.message = null
        this.showMessage = false
        this.getRandomPokemon()
      } 
    },

    newGame() {
      this.playing = true
      this.lost = false
      this.intentos = 3
      this.showImages = false
      this.pokemonArr = []
      this.pokemon =  null
      this.message = null
      this.showMessage = false
      this.points = 0
      this.final = false
      this.getRandomPokemon()
    },
  },

  mounted() {
      this.getRandomPokemon()
    }

}
</script>

<style scoped>

main {
  position: relative;
  background-color: hsla(0, 0%, 86%, 75%);
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

.waiting {
  font-size: 2rem;
  font-weight: bold;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  position: absolute;
  inset: 0;
  top: 0;
  margin: 0 auto;
  width: 90%;
  height: 5%;
  z-index: 0;
  font-size: 0.75rem;
}

.punteo {
  margin-bottom: 2rem;
}
</style>
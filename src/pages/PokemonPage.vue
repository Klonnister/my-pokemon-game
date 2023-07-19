<template>
  <main>
    <TopBar 
      v-if="playing" 
      :points="points"
      :intentos="intentos"
    />

    <h1 v-if="pokemon" class="fade-in">¿Cuál es este Pokémon?</h1>
    <p  v-if="!pokemon" class="waiting">Espere, por favor...</p>
    
    <div v-if="!playing" class="instructions fade-in">
      <h2>Instrucciones</h2>
      <ul>
        <li>Intenta adivinar el Pokemon con la imagen oculta!</li>
        <li>Cada acierto te da 10 puntos.</li>
        <li>El juego acaba luego de 3 intentos fallidos.</li>
      </ul>
    </div>

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

    <div class="fin-juego fade-in<" v-if="final">
        <h2>Fin del juego</h2>
        <p> Punteo: {{ points }} </p>
    </div>

    <button
        v-if="!playing"
        type="button"
        class="btn fade-in"
        @click="newGame"
    >
        Empezar
    </button>

  </main>
</template>

<script>
import getPokemonOptions from '@/helpers/getPokemonOptions'
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import TopBar from '@/components/TopBar.vue'


export default {
  name: 'PokemonPage',

  components: {
    PokemonImage,
    PokemonOptions,
    TopBar,
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

.instructions > ul {
  list-style-type: none;
  margin-bottom: 2rem;
}

.instructions > h2 {
  font-weight: bold;
}

.instructions > ul > li {
  margin-bottom: 0.3rem;
}

.fin-juego {
  margin-bottom: 2rem;
}
</style>
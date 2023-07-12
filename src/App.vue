<template>
  <main>
  <h1>¿Cuál es este Pokémon?</h1>

  <PokemonImage
    v-if="startGame"
    :pokemon-id="2"
    :show-images="showImages"
  />

  <PokemonOptions
    v-if="startGame"
  />

  <!-- <button
    v-if="!playing"
    type="button"
    class="btn"
    @click="start"
  >
    Nuevo Juego!
  </button> -->


  </main>
</template>

<script>
import PokemonImage from './components/PokemonImage.vue'
import PokemonOptions from './components/PokemonOptions.vue'

export default {
  name: 'App',
  components: {
    PokemonImage,
    PokemonOptions,
  },

  data() {
    return {
      showImages: false,
      startGame: true,
      // playing: false,
    }
  },

  methods: {
    // start() {
    //   this.startGame = true
    //   this.playing = true
    // },

  },

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
  margin: 1rem;
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

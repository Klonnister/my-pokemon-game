<template>
  <ul>
    
    <li v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click=" $emit( 'selection', pokemon.id ), comparePokemons( pokemon.id ) "
    >
      {{ pokemon.name }} 
    </li>

  </ul>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    pokemon: Object,
  },

  methods: {
    comparePokemons( id ) {
      if( id === this.pokemon.id ) {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
    }
  }  
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul > li {
    width: 75%;
    background-color: azure;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    border-radius: 1rem;
    cursor: pointer;
    border: 1px solid #2c3e50;
}

li:hover {
    background-color:beige;
}

</style>
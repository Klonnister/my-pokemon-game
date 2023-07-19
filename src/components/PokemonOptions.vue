<template>
  <ul>
    
    <li v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click=" addColors(), $emit( 'selection', pokemon.id ), pokemon.id "
        class="option"
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
    addColors () {
      const options = document.querySelectorAll('.option')
      options.forEach( option => {
        if( option.innerHTML != this.pokemon.name ) {
          option.classList.add('wrong')
        } else {
          option.classList.add('correct')
        }
      })




    },

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

.wrong {
    border: 1px solid firebrick;
    color: firebrick;
}

.correct {
    border: 1px solid darkgreen;
    color:darkgreen;
}

</style>
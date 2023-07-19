<template>
  <ul>
    
    <li v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click=" addColors( pokemon ), $emit( 'selection', pokemon.id )"
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
    addColors ( selectedPokemon ) {
        const options = document.querySelectorAll('.option')

        options.forEach( option => {
          if( option.innerHTML == selectedPokemon.name ) {
            option.classList.add('wrong')
          }
        })
        
        options.forEach( option => {
          if( option.innerHTML == this.pokemon.name) {
            option.classList.add('correct')
          }
        })

        options.forEach( option => {
          option.classList.add('deactivated')
          option.tabIndex = "-1"
          option.ariaDisabled = "true"
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
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: 5% 47%;
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
    background-image: url(../assets/cross.png);
}

.correct {
    border: 1px solid darkgreen;
    color:darkgreen;
    background-image: url(../assets/check.png);
}

.deactivated {
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}

</style>
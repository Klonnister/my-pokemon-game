<template>

  <img
    v-if="!showImages"
    :src="imageLink"
    alt="pokemon"
    class="hidden-pokemon"
  >

  <img 
    v-else
    :src="imageLink"
    alt="pokemon"
    class="fade-in"
  >

</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
        showImages: {
            type: Boolean,
            required: true,
        }
    },

    data() {
        return {
            imageLink: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

<style scoped>
img {
    max-width: 9rem;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}
</style>
<template>
  <div class="top-bar">
    <p>Punteo: {{ points }}</p>
    <p>Intentos: {{ intentos }}</p>
  </div>
</template>

<script>
export default {
    props: {
        points: {
            type: Number,
            required: true
        },
        intentos: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
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
</style>
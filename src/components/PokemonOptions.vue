<template>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</template>

<script>
export default {

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
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    border-radius: 1rem;
    cursor: pointer;
}

</style>
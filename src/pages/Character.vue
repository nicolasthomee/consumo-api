<template>
  <div v-if="character" class="details">
    <img :src="character.image" :alt="character.name" />
    <h2>{{ character.name }}</h2>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Location: {{ character.location.name }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      character: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        this.character = res.data;
      })
      .catch((err) => {
        console.error('Erro ao carregar personagem:', err);
      });
  }
};
</script>

<style scoped>
.details {
  max-width: 400px;
  margin: 30px auto;
  text-align: center;
}
img {
  border-radius: 10px;
  width: 100%;
}
</style>

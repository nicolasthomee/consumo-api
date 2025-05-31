<template>
  <div class="container">
    <CharacterCard
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';

export default {
  components: { CharacterCard },
  data() {
    return {
      characters: []
    };
  },
  mounted() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        this.characters = res.data.results;
      })
      .catch((err) => {
        console.error('Erro ao carregar personagens:', err);
      });
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}
</style>

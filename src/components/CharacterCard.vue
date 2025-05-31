<template>
  <div class="card" @click="goToCharacter">
    <img :src="character.image" :alt="character.name" />
    <h2>{{ character.name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['character'],
  methods: {
    goToCharacter() {
      this.$router.push(`/character/${this.character.id}`);
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
img {
  border-radius: 10px;
  width: 100%;
  height: auto;
}
</style>

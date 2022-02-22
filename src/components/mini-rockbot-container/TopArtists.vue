<script setup lang="ts">
  import { defineProps } from "vue";
  interface Props {
    topArtists: [any]
  }
  const props = defineProps<Props>();
  console.log(props.topArtists)
</script>
<template>
  <div class="topArtists">
    <el-avatar v-for="artist in props.topArtists" class="artist" :key="artist.artist_id" shape="circle" :size="60" :src="artist.artwork_small"></el-avatar>
  </div>
</template>

<style scoped>
.topArtists {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.artist {
  cursor: pointer;
  margin: 2%;
}
</style>
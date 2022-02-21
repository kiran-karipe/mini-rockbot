<script setup lang="ts">
  import { defineProps } from "vue";
  interface Props {
    nowPlaying: any
  }
  const props = defineProps<Props>()
</script>

<template>
  <div class="main">
    <el-avatar shape="square" :size="80" :src="props.nowPlaying.artwork_small"></el-avatar>
    <div class="songDetails">
      <p>{{props.nowPlaying.artist}}</p>
      <span>{{props.nowPlaying.song}}</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.el-avatar {
  margin-left: 3%;
}

.songDetails {
  padding-top: 2%;
  margin-left: 5%;
}

p {
  font-weight: bold;
  margin: 0%;
}
</style>
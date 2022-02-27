<script setup lang="ts">
  // defining props from vue to receive props from the parent component
  import { defineProps } from "vue";
  //creating an interface on what props to be received
  interface Props {
    nowPlaying: any
  }
  const props = defineProps<Props>()
</script>

<template>
  <!-- this template shows what's playing now -->
  <p class="title">Playing now</p>
  <div class="main">
    <el-avatar shape="square" :size="80" :src="props.nowPlaying.artwork_small"></el-avatar>
    <div class="song-details">
      <p class="artist-name">{{props.nowPlaying.artist}}</p>
      <span class="artist-song">{{props.nowPlaying.song}}</span>
    </div>
  </div>
</template>

<style scoped>
@import './CurrentPlaying.css';
</style>
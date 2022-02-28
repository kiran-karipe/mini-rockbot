<script setup lang="ts">
  // defining props from vue to receive props from the parent component
  import { defineProps } from "vue";
  import { NowPlaying } from '@/interfaces/NowPlaying';
  //creating an interface on what props to be received
  interface Props {
    nowPlaying: NowPlaying
  }
  const props = defineProps<Props>()
</script>

<template>
  <!-- this template shows what's playing now -->
  <p class="title">{{ $t('app.playing') }}</p>
  <div class="main">
    <el-avatar shape="square" :size="80" :src="props.nowPlaying ? props.nowPlaying.artwork_small : ''"></el-avatar>
    <div class="song-details">
      <p class="artist-name">{{props.nowPlaying ? props.nowPlaying.artist : ''}}</p>
      <span class="artist-song">{{props.nowPlaying ? props.nowPlaying.song : ''}}</span>
    </div>
  </div>
</template>

<style scoped>
@import './CurrentPlaying.css';
</style>
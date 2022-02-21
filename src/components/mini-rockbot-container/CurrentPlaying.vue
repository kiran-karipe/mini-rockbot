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
      <p class="artist">{{props.nowPlaying.artist}}</p>
      <span class="song">{{props.nowPlaying.song}}</span>
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

.artist {
  font-weight: bold;
  margin: 0%;
  color: #409eff;
}

.song {
  color: #409eff;
}

</style>
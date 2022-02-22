<script setup lang="ts">
  import { defineProps } from "vue";
  interface Props {
    nowPlaying: any
  }
  const props = defineProps<Props>()
</script>

<template>
  <p class="title">Playing now</p>
  <div class="main">
    <el-avatar shape="square" :size="80" :src="props.nowPlaying.artwork_small"></el-avatar>
    <div class="songDetails">
      <p class="artist">{{props.nowPlaying.artist}}</p>
      <span class="song">{{props.nowPlaying.song}}</span>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: left;
  margin: 0;
  padding-left: 3%;
  font-weight: bold;
  color: #409eff;
}
.main {
  display: flex;
}

.el-avatar {
  margin-left: 3%;
}

.songDetails {
  width: 70%;
  padding-top: 2%;
  margin-left: 5%;
  overflow: hidden;
  align-items: center;
  white-space: nowrap;
}

.artist {
  font-weight: bold;
  margin: 0%;
  color: #409eff;
}

.song {
  font-size: 14px;
  color: #409eff;
  text-align: left;
  text-overflow: ellipsis;
}

</style>
<script setup lang="ts">
  import { defineProps } from "vue";
  interface Props {
    topArtists: [any]
  }
  const props = defineProps<Props>();
  console.log(props.topArtists)
</script>
<template>
  <p class="title">Top Artists</p>
  <div class="avatars-div">
    <el-avatar v-for="artist in props.topArtists"
      class="avatar-el" :key="artist.artist_id"
      shape="circle" :size="60"
      :src="artist.artwork_small"
      @click="$emit('get-artist', artist.artist_id)"
    ></el-avatar>
    <el-avatar class="avatar-el more-avatar" :size="60"
      @click="$emit('browse-artists')"
    >
      more...
    </el-avatar>
  </div>
</template>

<style scoped>
.title {
  text-align: left;
  margin: 2% 0 3% 0%;
  padding-left: 3%;
  font-weight: bold;
}
.avatars-div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.avatar-el {
  cursor: pointer;
  margin: 2%;
}
.more-avatar:hover {
  background-color: #409eff;
  color: black;
}

</style>
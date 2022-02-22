<template>
  <p class="title">Coming up</p>
  <ul class="infinite-list" style="overflow: auto">
    <li v-for="item in props.queue" :key="item" class="infinite-list-item">
      <div class="songDetails">
        <p class="artist">{{item.artist}}</p>
        <p class="song">{{item.song}}</p>
      </div>
      <div class="voting">
        <LikeComponent :counter="item.likes" :vote-up="true"/>
        <LikeComponent :counter="item.likes" :vote-up="false"/>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import LikeComponent from '../shared/LikeComponent.vue';

  interface Props {
    queue: [any]
  }
  const props = defineProps<Props>();
</script>

<style scoped>
.title {
  text-align: left;
  margin: 0;
  padding-left: 3%;
  font-weight: bold;
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

.songDetails {
  width: 50%;
  padding-left: 3%;
  align-items: center;
}

.artist {
  font-size: 12px;
  font-weight: bold;
  margin: 0%;
  text-align: left;
  color: black;
}

.song {
  font-size: 12px;
  margin: 0%;
  text-align: left;
  color: black;
}

.voting {
  margin-right: 2%;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
</style>

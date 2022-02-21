<script setup lang="ts">
  import { defineProps } from "vue";
  interface Props {
    queue: [any]
  }
  const props = defineProps<Props>();
  console.log(props);
</script>

<template>
  <p class="comingup">Coming up</p>
  <ul class="infinite-list" style="overflow: auto">
    <li v-for="item in props.queue" :key="item" class="infinite-list-item">
      <div class="songDetails">
        <p class="artist">{{item.artist}}</p>
        <p class="song">{{item.song}}</p>
      </div>
      <div class="voting">
        <el-badge :value="item.likes" :max="99" type="success"></el-badge>
        <el-badge :value="item.dislikes" :max="99" class="item"></el-badge>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">

</script>

<style scoped>
.comingup {
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
}

.upVote .el-badge__content--danger {
  background-color: #67c23a;
}
</style>

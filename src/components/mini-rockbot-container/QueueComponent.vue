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
      <p>{{item.artist}}</p>
      <span>{{item.song}}</span>
    </li>
  </ul>
</template>

<script lang="ts">

</script>

<style>
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
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>

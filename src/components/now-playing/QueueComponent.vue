<script setup lang="ts">
  import { defineProps } from "vue";
  import LikeComponent from '../shared/LikeComponent.vue';

  interface Props {
    queue: [any]
  }
  const props = defineProps<Props>();
</script>

<template>
  <p class="queue-title">Coming up</p>
  <ul class="infinite-list" style="overflow: auto">
    <li v-for="item in props.queue" :key="item" class="infinite-list-item">
      <div class="item-details">
        <p class="item-name">{{item.artist}}</p>
        <p class="item-text">{{item.song}}</p>
      </div>
      <div class="like-button-div">
        <LikeComponent
          @click="$emit('vote-up',true, item.pick_id)"
          :counter="item.likes"
          :vote-up="true"
        />
        <LikeComponent
          @click="$emit('vote-up',false, item.pick_id)"
          :counter="item.dislikes"
          :vote-up="false"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.queue-title {
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

.item-details {
  width: 50%;
  padding-left: 3%;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}

.item-name {
  font-size: 12px;
  font-weight: bold;
  margin: 0%;
  text-align: left;
  color: black;
}

.item-text {
  font-size: 12px;
  margin: 0%;
  text-align: left;
  color: black;
  text-overflow: ellipsis;
}

.like-button-div {
  margin-right: 2%;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

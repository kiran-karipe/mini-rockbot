<script setup lang="ts">
  import { defineProps } from "vue";
  import LikeComponent from '../shared/LikeComponent.vue';

  interface Props {
    queue: any[]
  }
  const props = defineProps<Props>();
</script>

<template>
  <!-- this component will the list of songs that are in the queue -->
  <p class="queue-title">Coming up</p>
  <ul class="infinite-list" style="overflow: auto">
    <li v-for="item in props.queue" :key="item" class="infinite-list-item">
      <div class="item-details">
        <p class="item-name">{{item.artist}}</p>
        <p class="item-text">{{item.song}}</p>
      </div>
      <!-- Like an dislike buttons to vote on the songs -->
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
@import './QueueComponent.css';
</style>

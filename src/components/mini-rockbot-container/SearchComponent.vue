<script setup lang="ts">
  // import { defineProps } from "vue";
  // interface Props {
  //   nowPlaying: any
  // }
  // const props = defineProps<Props>()
  import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <el-button class="searchButton" size="large" :icon="Search" round>Search</el-button>
</template>

<style scoped>
  .searchButton {
    position: absolute;
    bottom: 0;
    left: 35%;
  }
</style>
<script setup lang="ts">
import { HalfCircleSpinner } from 'epic-spinners'
</script>

<template>
  <div class="spinner-div">
    <half-circle-spinner
      :animation-duration="1000"
      :size="50"
      color="#409eff"
      class="spinner-el"
    />
  </div>
</template>

<style scoped>
.spinner-div {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  overflow: auto;
  z-index: 2002;
}
.spinner-el {
  margin: auto;
  margin-top: 50vh;
}
</style>
<template>
  <CurrentPlaying />
  <QueueComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CurrentPlaying from './CurrentPlaying.vue';
import QueueComponent from './QueueComponent.vue';

@Options({
  components: {
    CurrentPlaying,
    QueueComponent
  }
})
export default class NowPlayingComponent extends Vue {}
</script>

<style scoped>
.box-card {
  text-align: center;
  min-height: 400px;
  border-radius: 0 !important;
  box-shadow: none !important;
  /* border-bottom: none; */
}
</style>
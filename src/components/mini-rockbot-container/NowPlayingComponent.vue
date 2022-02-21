<template>
  <CurrentPlaying :now-playing="nowPlayingResponse" />
  <el-divider class="divider"></el-divider>
  <QueueComponent :queue="queue"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CurrentPlaying from './CurrentPlaying.vue';
import QueueComponent from './QueueComponent.vue';
import { useNowPlaying } from '@/stores/nowPlaying';
import { mapState } from 'pinia';

@Options({
  components: {
    CurrentPlaying,
    QueueComponent
  }
})
export default class NowPlayingComponent extends Vue {
  nowPlayingResponse = {};
  queue = [];
  created() {
    useNowPlaying()
      .fetchNowPlaying().then(() => {
        const nowPlaying = {...mapState(useNowPlaying, {nowPlaying: 'getNowPlaying'}).nowPlaying()}
        const queue = {...mapState(useNowPlaying, {getQueue: 'getQueue'}).getQueue()}
        this.nowPlayingResponse = {...nowPlaying};
        this.queue = queue;
      });
  }
}
</script>

<style scoped>
.divider {
  margin: 3% 0;
}
</style>

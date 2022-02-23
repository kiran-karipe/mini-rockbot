<template>
  <CurrentPlaying :now-playing="nowPlayingResponse" />
  <el-divider class="divider"></el-divider>
  <QueueComponent :queue="queue" @vote-up="vote"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CurrentPlaying from '../now-playing/CurrentPlaying.vue';
import QueueComponent from '../now-playing/QueueComponent.vue';
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
  timer: any = -1;
  mounted() {
    this.fetchData();
    // this.timer = window.setInterval(() => {
    //   console.log('calling')
    //   this.fetchData()
    // }, 30000);
  }

  unmounted() {
    clearInterval(this.timer);
  }

  fetchData() {
    useNowPlaying()
      .fetchNowPlaying().then(() => {
        this.updateDetails();
      });
  }

  vote(isLiked: boolean, pick_id: number) {
    useNowPlaying()
      .postVote(isLiked, pick_id).then(() => {
      this.updateDetails();
    })
  }

  updateDetails() {
    const nowPlaying = {...mapState(useNowPlaying, {nowPlaying: 'getNowPlaying'}).nowPlaying()}
    const queue = {...mapState(useNowPlaying, {getQueue: 'getQueue'}).getQueue()}
    this.nowPlayingResponse = {...nowPlaying};
    this.queue = queue;
  }
}
</script>

<style scoped>
.divider {
  margin: 3% 0 2% 0;
}
</style>

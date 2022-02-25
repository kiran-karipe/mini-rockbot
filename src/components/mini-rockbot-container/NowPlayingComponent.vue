<template>
  <CurrentPlaying :now-playing="nowPlayingResponse" />
  <el-divider class="divider"></el-divider>
  <QueueComponent :queue="queue" @vote-up="vote"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CurrentPlaying from '../now-playing/CurrentPlaying.vue';
import QueueComponent from '../now-playing/QueueComponent.vue';
import { useMiniRockbot } from '@/stores/miniRockbot';
import { ElMessage } from 'element-plus'

@Options({
  components: {
    CurrentPlaying,
    QueueComponent
  }
})
export default class NowPlayingComponent extends Vue {
  nowPlayingResponse = {};
  queue: any[] = [];
  intervalId: any = -1;
  miniRockbotStore = useMiniRockbot();

  mounted() {
    this.fetchData();
    this.miniRockbotStore.$subscribe((value: any) => {
      this.open();
      const event = value.events;
      if (event.target) {
        this.nowPlayingResponse = {...event.target.nowPlaying};
        this.queue = [...event.target.queue]
      }
    })
    // this.intervalId = window.setInterval(() => {
    //   console.log('calling')
    //   this.fetchData()
    // }, 30000);
  }

  unmounted() {
    clearInterval(this.intervalId);
  }

  open = () => {
    ElMessage({
      message: 'queue updated.',
      type: 'success',
      center: true,
    })
  }
  fetchData() {
    this.miniRockbotStore
      .fetchNowPlaying();
  }

  vote(isLiked: boolean, pick_id: number) {
    this.miniRockbotStore
      .postVote(isLiked, pick_id);
  }
}
</script>

<style scoped>
.divider {
  margin: 3% 0 2% 0;
}
</style>

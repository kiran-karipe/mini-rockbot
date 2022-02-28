<template>
  <!-- NowPlayingComponent is further divided into two components (CurrentPlaying and QueueComponent)-->
  <!-- The main reason of dividing into components is to make reusable and dumb to improve the performance -->
  <CurrentPlaying :now-playing="nowPlayingResponse" />
  <!--here :now-playing is dynamic prop passed to the child component, we can also pass static props by removing : before the prop-->
  <el-divider class="divider"></el-divider>
  <QueueComponent :queue="queue" @vote-up="vote"/>
  <!-- here @vote-up is an event coming from the child component by emitting -->

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CurrentPlaying from '../now-playing/CurrentPlaying.vue';
import QueueComponent from '../now-playing/QueueComponent.vue';
import { useMiniRockbot } from '@/stores/miniRockbot';
import { ElMessage } from 'element-plus'
import { NowPlaying } from '../../interfaces/NowPlaying';

@Options({
  components: {
    CurrentPlaying,
    QueueComponent
  }
})
export default class NowPlayingComponent extends Vue {
  nowPlayingResponse: NowPlaying | null = null;
  queue: NowPlaying[] = [];
  intervalId = -1;
  miniRockbotStore = useMiniRockbot();

  // mounted is lifecycle hooks provided by vue 3 and it is a callback called when component is mounted,
  // best place invoke functions to get data from the backend
  mounted() {
    this.fetchData(); // fetching data for nowplaying and queue
    // this is a store subscriber where you subscribe to the store and trigger when there is a change in the store.
    this.miniRockbotStore.$subscribe((value: any) => {
      this.queueUpdated();
      const event = value.events;
      // listening to the changes in the store and re-assigning the values in the component.
      if (event.target) {
        this.nowPlayingResponse = {...event.target.nowPlaying};
        this.queue = [...event.target.queue]
      }
    })

    // this setInterval is to make a call every 30 seconds to update the queue and current playing
    this.intervalId = window.setInterval(() => {
      console.log('calling')
      this.fetchData()
    }, 30000);
  }

  // just like mounted, unmounted is a lifecylehook
  // this is a callback called when component is unmounted or destroyed
  // used to clear any subscriptions or intervals as done here
  unmounted() {
    clearInterval(this.intervalId);
  }

  // this is used to show a message whenever the queue is updated.
  queueUpdated = () => {
    ElMessage({
      message: 'queue updated.',
      type: 'success',
      center: true,
    })
  }

  // this method is using the store and making an api call using store(Pinia)
  fetchData() {
    this.miniRockbotStore
      .fetchNowPlaying();
  }

  // similar to fetchData method above, this method is used to make an api call whenever there is a vote-up or vote-down happened on the song.
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

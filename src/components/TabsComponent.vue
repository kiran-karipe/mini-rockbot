<template>
  <el-tabs :tab-position="'bottom'" stretch style="height: 200px" class="demo-tabs">
    <el-tab-pane label="Now Playing"><NowPlayingComponent /></el-tab-pane>
    <el-tab-pane label="Request" class="request"><RequestComponent /></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NowPlayingComponent from './mini-rockbot-container/NowPlayingComponent.vue';
import RequestComponent from './mini-rockbot-container/RequestComponent.vue';

@Options({
  components: {
    NowPlayingComponent,
    RequestComponent
  }
})
export default class TabsComponent extends Vue {}
</script>

<style scoped>
.request {
  min-height: 400px;
}
</style>

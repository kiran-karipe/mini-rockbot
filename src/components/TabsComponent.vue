<template>
  <el-tabs :tab-position="'bottom'" stretch style="height: 200px" class="demo-tabs">
    <el-tab-pane label="Now Playing"><NowPlayingComponent /></el-tab-pane>
    <el-tab-pane label="Request">Request component goes here</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NowPlayingComponent from './mini-rockbot-container/NowPlayingComponent.vue';

@Options({
  components: {
    NowPlayingComponent
  }
})
export default class TabsComponent extends Vue {}
</script>

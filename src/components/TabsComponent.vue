<template>
  <!-- Used element-plus bottom tabbed components to show the tabs and their content -->
  <!-- Here el-tab-pane takes each tab along with the content -->
  <!-- Each el-tab-pane element takes a component as its content -->
  <!-- Here there are two components, NowPlayingComponent and RequestComponent -->
  <el-tabs :tab-position="'bottom'" stretch class="demo-tabs">
    <el-tab-pane label="Now Playing"><NowPlayingComponent /></el-tab-pane>
    <el-tab-pane label="Request" class="request"><RequestComponent /></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NowPlayingComponent from './mini-rockbot-container/NowPlayingComponent.vue';
import RequestComponent from './mini-rockbot-container/RequestComponent.vue';

@Options({ // @component renamed as @Options in vue 3 for adding component options to your class components
  components: {
    NowPlayingComponent,
    RequestComponent
  }
})

export default class TabsComponent extends Vue {}
</script>

<!-- scoped style is to make sure the CSS applies only to the component -->
<style scoped>
.request {
  min-height: 436px;
}
</style>

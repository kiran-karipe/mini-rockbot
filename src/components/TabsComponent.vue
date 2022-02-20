<template>
  <el-tabs :tab-position="'bottom'" style="height: 200px" class="demo-tabs">
    <el-tab-pane label="Now Playing">Now playing component goes here</el-tab-pane>
    <el-tab-pane label="Request">Request component goes here</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
export default class TabsComponent extends Vue {}
</script>

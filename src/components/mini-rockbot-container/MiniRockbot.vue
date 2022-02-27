<template>
  <HeaderComponent />
  <el-divider class="divider"></el-divider>
  <TabsComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TabsComponent from '../TabsComponent.vue';
import HeaderComponent from '../HeaderComponent.vue';

@Options({
  components: { // divided the application into two components
    TabsComponent, // tabs component is place where entire app runs
    HeaderComponent // a static component for header
  },
})

export default class MiniRockbot extends Vue {}
</script>

<style scoped>
.divider {
  margin: 0 0 3% 0;
}
</style>
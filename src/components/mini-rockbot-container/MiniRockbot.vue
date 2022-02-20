<template>
  <ContentComponent />
  <TabsComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContentComponent from './ContentComponent.vue';
import TabsComponent from './TabsComponent.vue';

@Options({
  components: {
    ContentComponent,
    TabsComponent
  },
})

export default class MiniRockbot extends Vue {}
</script>

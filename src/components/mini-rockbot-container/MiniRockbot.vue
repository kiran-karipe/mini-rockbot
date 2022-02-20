<template>
  <TabsComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TabsComponent from '../TabsComponent.vue';

@Options({
  components: {
    TabsComponent
  },
})

export default class MiniRockbot extends Vue {}
</script>

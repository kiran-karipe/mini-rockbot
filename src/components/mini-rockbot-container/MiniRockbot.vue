<template>
  <HeaderComponent />
  <TabsComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TabsComponent from '../TabsComponent.vue';
import HeaderComponent from '../HeaderComponent.vue';

@Options({
  components: {
    TabsComponent,
    HeaderComponent
  },
})

export default class MiniRockbot extends Vue {}
</script>
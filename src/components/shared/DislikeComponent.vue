<template>
  <el-button type="primary">
    <span>{{props.counter}} &nbsp;</span>
    <Icon icon="bxs:{{dislike}}"/>
  </el-button>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import { Icon } from '@iconify/vue';

  interface Props {
    counter: number
  }
  const props = defineProps<Props>();
</script>


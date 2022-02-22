<script setup lang="ts">
  import { defineProps } from "vue";
  import { Icon } from '@iconify/vue';

  interface Props {
    counter: number,
    voteUp: boolean
  }
  const props = defineProps<Props>();
</script>

<template>
  <el-button type="primary">
    <span>{{props.counter}} &nbsp;</span>
    <Icon icon="bxs:like" v-if="props.voteUp" />
    <Icon icon="bxs:dislike" v-if="!props.voteUp" />
  </el-button>
</template>
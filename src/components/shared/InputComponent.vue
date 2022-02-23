<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from "vue";
import Autocomplete from 'vue3-autocomplete';

const input = ref('')
interface Props {
  filteredArtists: []
}
const props = defineProps<Props>();
console.log(props.filteredArtists)
</script>  

<template>
  <Autocomplete
      v-model="input"
      id="artists"
      @input="$emit('query-search', input)"
      :results="props.filteredArtists"
      :debounce="1000"
      placeholder="Search Artists"
  ></Autocomplete>
</template>

<style scoped>
  .input {
    width: 50%;
  }
</style>
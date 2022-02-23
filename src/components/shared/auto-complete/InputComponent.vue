<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from "vue";
import Autocomplete from 'vue3-autocomplete';

const input = ref('')
interface Props {
  suggestionList: []
}
const props = defineProps<Props>();
</script>  

<template>
  <Autocomplete
      v-model="input"
      id="artists"
      @input="$emit('query-search', input)"
      :debounce="1000"
      placeholder="Search Artists"
  ></Autocomplete>
  <div class="list-popper">
    <ul class="autocomplete-suggestion__list">
      <li v-for="item in props.suggestionList" :key="item"
        class="autocomplete-suggestion__list autocomplete-suggestion__list-item textAlign" 
        role="option" aria-selected="false">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "./InputComponent.css";
</style>
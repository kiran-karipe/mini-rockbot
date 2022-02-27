<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from "vue";
import Autocomplete from 'vue3-autocomplete';

const input = ref('')
interface Props {
  suggestionList: [any]
  showList: boolean
}
const props = defineProps<Props>();
</script>  

<template>
  <!-- this is autocomplete component to search artists from the given input -->
  <!-- this input will passed as a query to get the results -->
  <p class="title">Search playlists</p>
  <Autocomplete
      v-model="input"
      id="artists"
      @input="$emit('query-search', input)"
      :debounce="1000"
      placeholder="search"
      class="el-input__inner input"
  ></Autocomplete>
  <!-- this shows the list of the search results from the given input -->
  <div class="list-popper" v-if="props.showList">
    <ul class="autocomplete-suggestion__list">
      <li v-for="item in props.suggestionList" :key="item"
        class="autocomplete-suggestion__list autocomplete-suggestion__list-item" 
        role="option" aria-selected="false"
        @click="$emit('select-artist', item.artist_id)">
        {{item.artist}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "./InputComponent.css";

.title {
  text-align: left;
  margin: 2% 0 3% 0%;
  padding-left: 3%;
  font-weight: bold;
}
</style>
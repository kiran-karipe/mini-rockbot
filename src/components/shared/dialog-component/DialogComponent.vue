<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from "vue";

const dialogVisible = ref(true);
interface Props {
  isVisible: boolean
}
const props = defineProps<Props>();

function getAlphabets() {
  return [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
}
</script> 

<template>
  <!-- this is a dialog component to the letters from A-Z -->
  <!-- User should be able to pick the letter and browse results from the letter -->
  <el-dialog
    v-if="props.isVisible"
    v-model="dialogVisible"
    title="Select a letter to browse artists"
    width="20%"
  >
    <div class="alphabets">
      <div class="alphabet"
        v-for="alphabet in getAlphabets()"
        :key="alphabet"
        @click="$emit('browse-artists', alphabet)">
        {{alphabet}}
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.alphabets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.alphabet {
  width: 10%;
  margin: 2%;
  color: #409eff;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>
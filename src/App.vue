<template>
  <!-- This is how we render a component inside another component -->
  <MiniRockbot />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MiniRockbot from './components/mini-rockbot-container/MiniRockbot.vue';

@Options({
  components: {
    MiniRockbot, // MiniRockbot is main container component of our app
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  max-width: 350px;
  border: 1px #dcdfe6 solid;
  min-height: 550px;
  position: relative;
}
</style>

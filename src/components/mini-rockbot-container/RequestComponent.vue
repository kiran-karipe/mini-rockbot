<script></script>
<template>
  <p class="title">Top Artists</p>
  <TopArtists :top-artists="topArtists"/>
  <SearchComponent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useTopArtists } from '@/stores/topArtists';
import { mapState } from 'pinia';
import TopArtists from './TopArtists.vue';
import SearchComponent from './SearchComponent.vue';

@Options({
  components: {
    TopArtists,
    SearchComponent
  }
})

export default class RequestComponent extends Vue {
  topArtists = [];

  mounted() {
    useTopArtists()
      .fetchTopArtists().then(() => {
        const topArtists = {...mapState(useTopArtists, {topArtists: 'getTopArtists'}).topArtists()}
        this.topArtists = {...topArtists};
      })
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  margin: 2% 0 3% 0%;
  padding-left: 3%;
  font-weight: bold;
}
</style>
<template>
  <p class="title">Top Artists</p>
  <TopArtists
    :top-artists="topArtists"
    @get-artist="getArtistDetails"
  />
  <el-divider class="divider"></el-divider>
  <InputComponent
    :suggestion-list="filteredArtists"
    @query-search="searchArtists"
    @select-artist="getArtistDetails"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useTopArtists } from '@/stores/topArtists';
import { useNowPlaying } from '@/stores/nowPlaying';
import { mapState } from 'pinia';
import TopArtists from '../request-tab/TopArtists.vue';
import InputComponent from '../shared/auto-complete/InputComponent.vue';

@Options({
  components: {
    TopArtists,
    InputComponent
  }
})

export default class RequestComponent extends Vue {
  topArtists = [];
  filteredArtists: any[] = [];
  timer: any;

  mounted() {
    useTopArtists()
      .fetchTopArtists().then(() => {
        const topArtists = {...mapState(useTopArtists, {topArtists: 'getTopArtists'}).topArtists()}
        this.topArtists = {...topArtists};
      });
  }

  getArtistDetails(artist_id: number) {
    useNowPlaying()
      .getArtist(artist_id);
  }

  searchArtists(value: string) {
    if (value) {
      useTopArtists()
      .searchArtists(value).then(() => {
        const filteredArtists = {...mapState(useTopArtists, {searchArtists: 'getFilteredArtists'}).searchArtists()}
        this.filteredArtists = {...filteredArtists};
      });
    }
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
.divider {
  margin: 3% 0 3% 0;
}
</style>
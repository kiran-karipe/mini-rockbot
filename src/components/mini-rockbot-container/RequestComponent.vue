<template>
  <p class="title">Top Artists</p>
  <TopArtists
    :top-artists="topArtists"
    @get-artist="getArtistDetails"
  />
  <el-divider class="divider"></el-divider>
  <InputComponent
    :filtered-artists="filteredArtists"
    @query-search="querySearch"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useTopArtists } from '@/stores/topArtists';
import { mapState } from 'pinia';
import TopArtists from './TopArtists.vue';
import InputComponent from '../shared/InputComponent.vue';

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
    useTopArtists()
      .getArtist(artist_id);
  }

  querySearch(value: string) {
    if (value) {
      useTopArtists()
      .browseArtists(value).then(() => {
        const filteredArtists = {...mapState(useTopArtists, {browseArtist: 'getFilteredArtists'}).browseArtist()}
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
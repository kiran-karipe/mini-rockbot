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
import { useMiniRockbot } from '@/stores/miniRockbot';
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
  miniRockbotStore = useMiniRockbot();
  topArtistStore = useTopArtists();

  mounted() {
    this.topArtistStore
      .fetchTopArtists();

    this.topArtistStore.$subscribe((value: any) => {
      const event = value.events;
      if (event.target && event.key === 'topArtists') {
        this.topArtists = {...event.target.topArtists};
      }
      if (event.target && event.key === 'filteredArtists') {
        this.filteredArtists = [...event.target.filteredArtists]
      }
    })
  }

  getArtistDetails(artist_id: number) {
    this.miniRockbotStore
      .getArtist(artist_id);
  }

  searchArtists(value: string) {
    if (value) {
      this.topArtistStore
      .searchArtists(value);
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
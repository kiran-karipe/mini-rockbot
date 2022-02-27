<template>
  <TopArtists
    :top-artists="topArtists"
    @get-artist="getArtistDetails"
    @open-dialog="openDialog"
  />
  <el-divider class="divider"></el-divider>
  <InputComponent
    :suggestion-list="filteredArtists"
    :show-list="showList"
    @query-search="searchArtists"
    @select-artist="getArtistDetails"
  />
  <DialogComponent
    :is-visible="dialogVisible"
    @browse-artists="browseArtists"
    />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useTopArtists } from '@/stores/topArtists';
import { useMiniRockbot } from '@/stores/miniRockbot';
import TopArtists from '../request-tab/TopArtists.vue';
import InputComponent from '../shared/auto-complete/InputComponent.vue';
import DialogComponent from '../shared/dialog-component/DialogComponent.vue';

@Options({
  components: {
    TopArtists,
    InputComponent,
    DialogComponent
  }
})

export default class RequestComponent extends Vue {
  topArtists = [];
  filteredArtists: any[] = [];
  showList = false;
  miniRockbotStore = useMiniRockbot();
  topArtistStore = useTopArtists();
  dialogVisible = false;

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
        this.showList = true;
        this.dialogVisible = false;
      }
    })
  }

  getArtistDetails(artist_id: number) {
    this.miniRockbotStore
      .getArtist(artist_id);
    this.showList = false;
  }

  searchArtists(value: string) {
    if (value) {
      this.topArtistStore
      .searchArtists(value);
    } else {
      this.filteredArtists = [];
      this.showList = false;
    }
  }

  browseArtists(letter: string) {
    if (letter) {
      this.topArtistStore
      .browseArtists(letter);
    } else {
      this.filteredArtists = [];
      this.showList = false;
    }
  }

  openDialog() {
    this.dialogVisible = true;
  }
}
</script>

<style scoped>
.divider {
  margin: 3% 0 3% 0;
}
</style>
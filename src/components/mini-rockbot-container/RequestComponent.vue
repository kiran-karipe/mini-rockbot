<template>
  <!-- This component is to show the top-artists with their avatars -->
  <!-- :top-artists is prop passed to the child component, get-artist and open-dialog are the two events emitted from the child component -->
  <TopArtists
    :top-artists="topArtists"
    @get-artist="getArtistDetails"
    @open-dialog="openDialog"
  />
  <el-divider class="divider"></el-divider>

  <!-- InputComponent is a search field to search artists -->
  <!-- this is a auto-complete component -->
  <InputComponent
    :suggestion-list="filteredArtists"
    :show-list="showList"
    @query-search="searchArtists"
    @select-artist="getArtistDetails"
  />
  <!-- This component is mainly used to browse-artists by a alphabet -->
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
import { TopArtist } from "@/interfaces/TopArtist";

@Options({
  components: {
    TopArtists,
    InputComponent,
    DialogComponent
  }
})

export default class RequestComponent extends Vue {
  // initializing variables for the component
  topArtists: TopArtist[] = [];
  filteredArtists: TopArtist[] = [];
  showList = false;
  miniRockbotStore = useMiniRockbot();
  topArtistStore = useTopArtists();
  dialogVisible = false;

  mounted() {
    // using topArtistStore to fetch top-artists from the backend
    this.topArtistStore
      .fetchTopArtists();

    // subscribing to the store and listening to changes and updating
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

  // This is method is used to make an api call to with selected artist id.
  getArtistDetails(artist_id: number) {
    this.miniRockbotStore
      .getArtist(artist_id);
    this.showList = false;
  }

  // this method is used to fetch artists using store.
  searchArtists(value: string) {
    if (value) {
      this.topArtistStore
      .searchArtists(value);
    } else {
      this.filteredArtists = [];
      this.showList = false;
    }
  }

  // similar to searchArtists method, it takes a letter and browse artists with letter a first character in the name.
  browseArtists(letter: string) {
    if (letter) {
      this.topArtistStore
      .browseArtists(letter);
    } else {
      this.filteredArtists = [];
      this.showList = false;
    }
  }

  // this is to open dialog component when user is searching for more artists.
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
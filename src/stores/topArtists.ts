import { defineStore } from "pinia";
import {toRaw} from 'vue';
const API_URL = `https://api.rockbot.com/v3/engage/`;
const options = {
  headers: {
    'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
  }
}

export interface Artists {
  topArtists: any[],
  filteredArtists: any[]
}

export const useTopArtists = defineStore('topArtists-store', {
  state: (): Artists => {
    return {
      topArtists: [],
      filteredArtists: []
    }
  },

  getters: {
    getTopArtists(state) {
      return state.topArtists;
    },

    getFilteredArtists(state) {
      return state.filteredArtists;
    }
  },

  actions: {
    async fetchTopArtists() {
      const url = `${API_URL}` + 'top_artists';
      const response: any = await this.post(url, options);
      response.length = 6;
      this.topArtists = [...response];
    },

    async searchArtists(value: string) {
      const url = `${API_URL}` + 'search_artists?query=' + value;
      const response: any = await this.post(url, options);
      this.filteredArtists = [...response];
    },

    async browseArtists(letter: string) {
      const url = `${API_URL}` + 'browse_artists?letter=' + letter;
      const response: any = await this.post(url, options);
      this.filteredArtists = [...response];
    },

    getArtistsNames(response: any) {
      return response.map((item: any) => item.artist)
    },

    async post(url: string, options: any) {
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        return toRaw(result.response);
      } catch (err) {
        this.topArtists = [];
        console.error('Error fetching top artists:', err);
        return err;
      }
    }
  }
})
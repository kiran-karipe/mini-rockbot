import { defineStore } from "pinia";
import {toRaw} from 'vue';
const API_URL = `https://api.rockbot.com/v3/engage/`;

export const useTopArtists = defineStore('topArtists-store', {
  state: () => {
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
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        result.response.length = 6;
        this.topArtists = toRaw(result.response);
      } catch (err) {
        this.topArtists = [];
        console.error('Error fetching top artists:', err);
        return err;
      }
    },

    async getArtist(artist_id: number) {
      const url = `${API_URL}` + 'request_artist?artist_id=' + artist_id;
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        return toRaw(result.response);
      } catch (err) {
        console.error('Error fetching artist with the id:', err);
        return err;
      }
    },

    async searchArtists(value: string) {
      const url = `${API_URL}` + 'search_artists?query=' + value;
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        this.filteredArtists = toRaw(result.response);
        return result.response;
      } catch (err) {
        this.filteredArtists = [];
        console.error('Error finding artists with input:', err);
        return err;
      }
    },

    getArtistsNames(response: any) {
      return response.map((item: any) => item.artist)
    }
  }
})
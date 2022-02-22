import { defineStore } from "pinia";
import {toRaw} from 'vue';
const API_URL = `https://api.rockbot.com/v3/engage/`;

export const useTopArtists = defineStore('topArtists-store', {
  state: () => {
    return {
      topArtists: [],
      fetching: false
    }
  },

  getters: {
    getTopArtists(state) {
      return state.topArtists;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchTopArtists() {
      this.fetching = true;
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
        console.error('Error loading now playing:', err);
        return err;
      }

      this.fetching = false;
    },

    async getArtist(artist_id: number) {
      this.fetching = true;
      const url = `${API_URL}` + 'request_artist?artist_id=' + artist_id;
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        // result.response.length = 6;
        // this.topArtists = toRaw(result.response);
      } catch (err) {
        this.topArtists = [];
        console.error('Error loading now playing:', err);
        return err;
      }

      this.fetching = false;
    },

  }
})